import React, { useEffect, useState } from "react";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://zoewc-1.onrender.com/api/messages";

  // ✅ Fetch messages from backend
  const fetchMessages = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Delete message
  const deleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setMessages((prev) => prev.filter((msg) => msg._id !== id));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  // ✅ Toggle “Replied” status (locally)
  const toggleReplied = (id) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg._id === id ? { ...msg, replied: !msg.replied } : msg
      )
    );
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg">
        Loading messages...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-10 px-6 md:px-20 font-medium">
      <h1 className="text-3xl font-bold mb-6 text-center">📩 Messages</h1>

      {messages.length === 0 ? (
        <div className="text-center text-gray-500">No messages yet.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full bg-white shadow-md rounded-lg">
            <thead className="bg-base-300 text-base font-semibold">
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Date</th>
                <th>Replied</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr
                  key={msg._id}
                  className="hover:bg-base-200 transition duration-150"
                >
                  <td>{msg.name}</td>
                  <td>{msg.phone}</td>
                  <td className="max-w-xs truncate">{msg.message}</td>
                  <td>{new Date(msg.createdAt).toLocaleString()}</td>
                  <td className="text-center">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-success"
                      checked={!!msg.replied}
                      onChange={() => toggleReplied(msg._id)}
                    />
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => deleteMessage(msg._id)}
                      className="btn btn-error btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
