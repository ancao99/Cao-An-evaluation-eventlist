// features/controller.js

class EventController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      this.view.confirmAddButton.addEventListener("click", () => this.addEvent());
  
      this.loadEvents();
    }
  
    async loadEvents() {
      const events = await this.model.loadEvents();
      this.view.clearEvents();
      events.forEach(event => this.view.renderEventElement(event, this));
    }
  
    async addEvent() {
      const event = {
        eventName: this.view.addEventName.value,
        startDate: this.view.addStartDate.value,
        endDate: this.view.addEndDate.value,
        id: Math.random().toString(36).substring(2, 9)
      };
      const newEvent = await this.model.addEvent(event);
      this.view.renderEventElement(newEvent, this);
      this.view.hideAddEventForm();
    }
  
    async updateEvent(id, updates) {
      const updatedEvent = await this.model.updateEvent(id, updates);
      this.loadEvents(); // Reload to reflect the update
    }
  
    async deleteEvent(id) {
      await this.model.deleteEvent(id);
      this.loadEvents(); // Reload to reflect the deletion
    }
  }
  