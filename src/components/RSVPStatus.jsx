// src/components/RSVPStatus.js
import React, { useState } from 'react';

const RSVPStatus = ({ eventIndex }) => {
  const [rsvpStatus, setRsvpStatus] = useState(null);

  const handleRSVP = (status) => {
    setRsvpStatus(status);
  };

  return (
    <div className="flex space-x-4">
      <button onClick={() => handleRSVP('Going')} className="p-2 bg-green-500 text-white rounded">
        Going
      </button>
      <button onClick={() => handleRSVP('Not Going')} className="p-2 bg-red-500 text-white rounded">
        Not Going
      </button>
      {rsvpStatus && (
        <p className="text-gray-500">RSVP Status: {rsvpStatus}</p>
      )}
    </div>
  );
};

export default RSVPStatus;
