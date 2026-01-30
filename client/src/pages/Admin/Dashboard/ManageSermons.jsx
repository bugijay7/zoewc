import React, { useState, useEffect } from "react";
import axios from "axios";

function ManageSermons() {
  const [sermons, setSermons] = useState([]);
  const [editingSermon, setEditingSermon] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    youtubeLink: "",
  });

  // Fetch all sermons
  useEffect(() => {
    fetchSermons();
  }, []);

  const fetchSermons = async () => {
    try {
      const res = await axios.get("https://zoewc-omsu.onrender.com/api/sermons");
      setSermons(res.data);
    } catch (err) {
      console.error("Error fetching sermons:", err);
    }
  };

  // Delete sermon
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this sermon?")) {
      try {
        await axios.delete(`https://zoewc-omsu.onrender.com/api/sermons/${id}`);
        setSermons(sermons.filter((s) => s._id !== id));
      } catch (err) {
        console.error("Error deleting sermon:", err);
      }
    }
  };

  // Start editing
  const handleEdit = (sermon) => {
    setEditingSermon(sermon._id);
    setFormData({
      title: sermon.title,
      date: sermon.date.split("T")[0],
      description: sermon.description,
      youtubeLink: sermon.youtubeLink,
    });
  };

  // Handle field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Update sermon
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://zoewc-omsu.onrender.com/api/sermons/${editingSermon}`,
        formData
      );
      setEditingSermon(null);
      setFormData({
        title: "",
        date: "",
        description: "",
        youtubeLink: "",
      });
      fetchSermons();
    } catch (err) {
      console.error("Error updating sermon:", err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-4xl font-medium text-center text-primary mb-6">
        Manage Sermons
      </h2>

      {/* Sermon list */}
      <div className="space-y-4">
        {sermons.map((sermon) => (
          <div
            key={sermon._id}
            className="flex flex-col sm:flex-row sm:items-center justify-between border border-base-300 rounded-lg p-4 shadow-sm bg-base-100"
          >
            <div className="flex-2/4">
              <h3 className="text-lg font-medium">{sermon.title}</h3>
              <p className="text-sm opacity-70">
                {new Date(sermon.date).toDateString()}
              </p>
              <p className="text-sm mt-2 line-clamp-2">{sermon.description}</p>
              <div className="mt-3">
                <iframe
                  src={sermon.youtubeLink}
                  title={sermon.title}
                  className="w-full h-20 sm:h-40 rounded-md"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="flex gap-2 mt-4 sm:mt-0 sm:ml-4">
              <button
                onClick={() => handleEdit(sermon)}
                className="btn btn-warning btn-sm text-white"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(sermon._id)}
                className="btn btn-error btn-sm text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit form */}
      {editingSermon && (
        <div className="mt-10 bg-base-100 shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-medium mb-4 text-primary">Edit Sermon</h3>
          <form onSubmit={handleUpdate} className="space-y-4">
            <div className="form-control">
              <label className="label font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label font-medium">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="textarea textarea-bordered w-full"
                rows="3"
                required
              ></textarea>
            </div>

            <div className="form-control">
              <label className="label font-medium">YouTube Embed Link</label>
              <input
                type="text"
                name="youtubeLink"
                value={formData.youtubeLink}
                onChange={handleChange}
                placeholder="https://www.youtube.com/embed/..."
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setEditingSermon(null)}
                className="btn btn-neutral"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ManageSermons;
