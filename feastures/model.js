// features/model.js

class EventModel {
    constructor() {
      this.events = [];
    }
  
    async loadEvents() {
      this.events = await eventApi.getEvents();
      return this.events;
    }
  
    async addEvent(event) {
      const newEvent = await eventApi.addEvent(event);
      this.events.push(newEvent);
      return newEvent;
    }
  
    async updateEvent(id, updates) {
      const updatedEvent = await eventApi.updateEvent(id, updates);
      const index = this.events.findIndex(event => event.id === id);
      if (index !== -1) {
        this.events[index] = { ...this.events[index], ...updates };
      }
      return updatedEvent;
    }
  
    async deleteEvent(id) {
      const success = await eventApi.deleteEvent(id);
      if (success) {
        this.events = this.events.filter(event => event.id !== id);
      }
      return success;
    }
  }
  