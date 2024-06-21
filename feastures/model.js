
class EventModel {
    constructor() {
      this.events = [];
    }
  
    loadEvents() {
      this.events = eventApi.getEvents();
      return this.events;
    }
  
    addEvent(event) {
      const newEvent = eventApi.addEvent(event);
      this.events.push(newEvent);
      return newEvent;
    }
  
    lupdateEvent(id, updates) {
      const updatedEvent = eventApi.updateEvent(id, updates);
      const index = this.events.findIndex(event => event.id === id);
      if (index !== -1) {
        this.events[index] = { ...this.events[index], ...updates };
      }
      return updatedEvent;
    }
  
    deleteEvent(id) {
      const success = eventApi.deleteEvent(id);
      if (success) {
        this.events = this.events.filter(event => event.id !== id);
      }
      return success;
    }
  }
  