
class EventView {
    constructor() {
      this.eventList = document.getElementById("eventList");
      this.addEventForm = document.getElementById("addEventForm");
      this.addEventButton = document.getElementById("addEventButton");
      this.confirmAddButton = document.getElementById("confirmAddButton");
      this.cancelAddButton = document.getElementById("cancelAddButton");
      this.addEventName = document.getElementById("addEventName");
      this.addStartDate = document.getElementById("addStartDate");
      this.addEndDate = document.getElementById("addEndDate");
  
      this.addEventButton.addEventListener("click", () => this.showAddEventForm());
      this.cancelAddButton.addEventListener("click", () => this.hideAddEventForm());
    }
  
    renderEventElement(event, controller) {
      const { id, eventName, startDate, endDate } = event;
  
      const eventItem = document.createElement("div");
      eventItem.classList.add("event-item");
      eventItem.id = id;
  
      const nameElem = document.createElement("div");
      nameElem.classList.add("event-item__name");
      nameElem.textContent = eventName;
  
      const startElem = document.createElement("div");
      startElem.classList.add("event-item__start-date");
      startElem.textContent = `Start: ${startDate}`;
  
      const endElem = document.createElement("div");
      endElem.classList.add("event-item__end-date");
      endElem.textContent = `End: ${endDate}`;
  
      const updateBtn = document.createElement("button");
      updateBtn.classList.add("event-item__update");
      updateBtn.textContent = "Update";
      updateBtn.addEventListener("click", () => {
        this.showUpdateEventForm(event, controller);
      });
  
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("event-item__delete");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", async () => {
        await controller.deleteEvent(id);
        eventItem.remove();
      });
  
      eventItem.append(nameElem, startElem, endElem, updateBtn, deleteBtn);
      this.eventList.appendChild(eventItem);
    }
  
    clearEvents() {
      this.eventList.innerHTML = "";
    }
  
    showAddEventForm() {
      this.addEventForm.classList.remove("hidden");
    }
  
    hideAddEventForm() {
      this.addEventForm.classList.add("hidden");
      this.clearAddEventForm();
    }
  
    clearAddEventForm() {
      this.addEventName.value = "";
      this.addStartDate.value = "";
      this.addEndDate.value = "";
    }
  
    showUpdateEventForm(event, controller) {
      const newEventName = prompt("Enter new event name:", event.eventName);
      if (newEventName !== null) {
        const updates = { eventName: newEventName };
        controller.updateEvent(event.id, updates);
      }
    }
  }
  