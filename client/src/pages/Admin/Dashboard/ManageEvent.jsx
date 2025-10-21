import React, { useEffect, useState } from "react";
import axios from "axios";

function ManageEvent() {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("https://zoewc-1.onrender.com/api/events");
      setEvents(res.data);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await axios.delete(`https://zoewc-1.onrender.com/api/events/${id}`);
        setEvents(events.filter((event) => event._id !== id));
      } catch (err) {
        console.error("Error deleting event:", err);
      }
    }
  };

  const handleEdit = (event) => {
    setEditingEvent(event._id);
    setFormData({
      title: event.title,
      date: event.date.split("T")[0],
      description: event.description,
      image: null,
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("title", formData.title);
      form.append("date", formData.date);
      form.append("description", formData.description);
      if (formData.image) form.append("image", formData.image);

      await axios.put(`https://zoewc-1.onrender.com/api/events/${editingEvent}`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setEditingEvent(null);
      setFormData({ title: "", date: "", description: "", image: null });
      fetchEvents();
    } catch (err) {
      console.error("Error updating event:", err);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-medium text-center text-primary mb-10">
        Manage Events
      </h2>

      {/* Event list */}
      <div className="space-y-6">
        {events.map((event) => (
          <div
            key={event._id}
            className="flex flex-col md:flex-row items-center justify-between bg-base-100 p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <img
                src={`https://zoewc-1.onrender.com/${event.image}`}
                alt={event.title}
                className="w-28 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="font-medium text-lg text-base-content">
                  {event.title}
                </h3>
                <p className="text-sm opacity-70">
                  {new Date(event.date).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <button
                onClick={() => handleEdit(event)}
                className="btn btn-warning btn-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(event._id)}
                className="btn btn-error btn-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit form */}
      {editingEvent && (
        
        <div className="mt-10 bg-base-100 shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-medium mb-4 text-primary">Edit Event</h3>
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="textarea textarea-bordered w-full"
                required
              ></textarea>
            </div>

            <div>
              <label className="block font-medium mb-1">Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="file-input file-input-bordered w-full"
              />
            </div>

            <div className="flex justify-end">
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ManageEvent;
