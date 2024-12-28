// src/App.js
import React, { useState } from 'react';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import InviteForm from './components/InviteForm';

const App = () => {
  const [events, setEvents] = useState([]);

  const createEvent = (eventDetails) => {
    setEvents([...events, eventDetails]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Event Planner</h1>
      
      <EventForm onCreateEvent={createEvent} />
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Upcoming Events</h2>
      <EventList events={events} />
      
      {events.length > 0 && <InviteForm eventIndex={0} />}
    </div>
  );
};

export default App;
