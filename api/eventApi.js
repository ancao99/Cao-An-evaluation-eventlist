// api/eventApi.js

const API_URL = "http://localhost:3000/events";

const eventApi = {
  async getEvents() {
    const response = await fetch(API_URL);
    return response.json();
  },

  async addEvent(event) {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });
    return response.json();
  },

  async updateEvent(id, updates) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    });
    return response.json();
  },

  async deleteEvent(id) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    return response.ok;
  }
};
