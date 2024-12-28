// src/components/InviteForm.js
import React, { useState } from 'react';

const InviteForm = ({ eventIndex }) => {
  const [guestEmail, setGuestEmail] = useState('');

  const handleChange = (e) => {
    setGuestEmail(e.target.value);
  };

  const handleInvite = (e) => {
    e.preventDefault();
    console.log(`Inviting ${guestEmail} to event ${eventIndex}`);
    setGuestEmail('');
  };

  return (
    <form onSubmit={handleInvite} className="space-y-4 p-4 border border-gray-300 rounded-lg">
      <input
        type="email"
        value={guestEmail}
        onChange={handleChange}
        placeholder="Guest Email"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        Invite Guest
      </button>
    </form>
  );
};

export default InviteForm;
