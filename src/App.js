import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    // on prend en param les events précedents puis on return un spread de prevEvents en ajoutant le nouvel event au nouveau tableau
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  };

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => id !== event.id);
    });
  };

  const subtitle = "All the latest events in Marioland";

  return (
    <div className="App">
      <Title title="Marioland Events" subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {showModal && (
        <Modal isSalesModal={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}

      <div>
        <button onClick={() => setShowModal(true)}>Add new event</button>
      </div>
    </div>
  );
}

export default App;
