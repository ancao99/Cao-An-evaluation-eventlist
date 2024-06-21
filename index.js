//const API_URL = "http://localhost:3000/todos";
const model = new EventModel();
const view = new EventView();
const controller = new EventController(model, view);
