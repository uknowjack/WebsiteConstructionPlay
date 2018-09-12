import React, { Component } from 'react';
import PlannedEvents from './PlannedEvents';
import BookEvent from './BookEvent.js';
import './css/Events.css'

class Events extends Component {
  render() {
    return (
      <div id="eventsContainer">
        <br/>
        EVENTS
        <br/><br/>
        <PlannedEvents />
        <button>
          Book an Event
        </button>
        <br/><br/>
        <BookEvent />
        <br/>
      </div>
    );
  }
}

export default Events;
