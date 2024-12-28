// src/components/EventList.js
import React from 'react';
import RSVPStatus from './RSVPStatus';

const EventList = ({ events }) => {
  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <div key={index} className="border border-gray-300 rounded-lg p-4 space-y-2">
          <h2 className="text-xl font-bold">{event.name}</h2>
          <p>{event.date} at {event.time}</p>
          <p>{event.location}</p>
          <RSVPStatus eventIndex={index} />
        </div>
      ))}
    </div>
  );
};

export default EventList;
