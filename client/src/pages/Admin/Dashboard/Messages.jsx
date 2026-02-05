import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaArrowLeft, FaEnvelopeOpenText, FaCheckCircle, FaRegCircle } from "react-icons/fa";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://zoewc-omsu.onrender.com/api/messages";

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

  const deleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setMessages((prev) => prev.filter((msg) => msg._id !== id));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      {/* Header Area */}
      <div className="max-w-7xl mx-auto mb-8">
        <Link to="/dashboard" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4">
          <FaArrowLeft className="mr-2" /> Back to Dashboard
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center">
              <FaEnvelopeOpenText className="mr-3 text-rose-500" /> Messages
            </h1>
            <p className="text-gray-500 mt-1">Manage inquiries and contact form submissions.</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
            <span className="text-sm font-medium text-gray-600">Total: {messages.length}</span>
          </div>
        </div>
      </div>

      {/* Messages Table Card */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {messages.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No messages found in the inbox.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 tracking-wider">Sender</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 tracking-wider">Contact Info</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 tracking-wider w-1/3">Message Content</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 tracking-wider">Date</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 tracking-wider text-center">Replied</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 tracking-wider text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {messages.map((msg) => (
                  <tr key={msg._id} className={`hover:bg-gray-50 transition-colors ${msg.replied ? 'opacity-75' : 'opacity-100'}`}>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-800">{msg.name}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {msg.phone}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 leading-relaxed">
                      {msg.message}
                    </td>
                    <td className="px-6 py-4 text-xs text-gray-400 whitespace-nowrap">
                      {new Date(msg.createdAt).toLocaleDateString()}<br/>
                      {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button 
                        onClick={() => toggleReplied(msg._id)}
                        className={`text-2xl transition-colors ${msg.replied ? 'text-green-500' : 'text-gray-300 hover:text-gray-400'}`}
                      >
                        {msg.replied ? <FaCheckCircle /> : <FaRegCircle />}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button 
                        onClick={() => deleteMessage(msg._id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete Message"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}