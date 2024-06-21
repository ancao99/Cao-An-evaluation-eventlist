
class EventController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      this.view.confirmAddButton.addEventListener("click", () => this.addEvent());
  
      this.loadEvents();
    }
  
    loadEvents() {
      const events = this.model.loadEvents();
      this.view.clearEvents();
      events.forEach(event => this.view.renderEventElement(event, this));
    }
  
     addEvent() {
      const event = {
        eventName: this.view.addEventName.value,
        startDate: this.view.addStartDate.value,
        endDate: this.view.addEndDate.value,
        id: Math.random().toString(36).substring(2, 9)
      };
      const newEvent = this.model.addEvent(event);
      this.view.renderEventElement(newEvent, this);
      this.view.hideAddEventForm();
    }
  
     updateEvent(id, updates) {
      const updatedEvent = this.model.updateEvent(id, updates);
      this.loadEvents(); 
    }
  
    deleteEvent(id) {
      this.model.deleteEvent(id);
      this.loadEvents(); 
    }
  }
  