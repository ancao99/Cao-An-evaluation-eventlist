// api/eventApi.js

const API_URL = "http://localhost:3000/events";

const eventApi = {
  getEvents() {
    const response =  fetch(API_URL);
    return response.json();
  },

  addEvent(event) {
    const response =  fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });
    return response.json();
  },

  updateEvent(id, updates) {
    const response =  fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    });
    return response.json();
  },

  deleteEvent(id) {
    const response =  fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    return response.ok;
  }
};
