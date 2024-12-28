// src/components/EventForm.js
import React, { useState } from 'react';

const EventForm = ({ onCreateEvent }) => {
  const [eventDetails, setEventDetails] = useState({
    name: '',
    date: '',
    time: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateEvent(eventDetails);
    setEventDetails({ name: '', date: '', time: '', location: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border border-gray-300 rounded-lg">
      <input
        type="text"
        name="name"
        placeholder="Event Name"
        value={eventDetails.name}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="date"
        name="date"
        value={eventDetails.date}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="time"
        name="time"
        value={eventDetails.time}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Event Location"
        value={eventDetails.location}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        Create Event
      </button>
    </form>
  );
};

export default EventForm;
