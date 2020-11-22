import { seedData } from './seed';

export const store = {
  state: {
    seedData
  },

  getActiveDay() {
    return this.state.seedData.find(day => day.active);
  },

  setActiveDay(id) {
    return this.state.seedData.map(dayObj => {
      dayObj.id === id ? (dayObj.active = true) : (dayObj.active = false);
    });
  },
  submitEvent(inputEntry) {
    const activeDay = this.getActiveDay();
    activeDay.events.push({ details: inputEntry, edit: false });
  },
  resetEditOfAllEvents() {
    this.state.seedData.map(dayObj => {
      dayObj.events.map(event => {
        event.edit = false;
      });
    });
  },
  getEventObj(dayId, eventDetails) {
    const dayObj = this.state.seedData.find(day => day.id === dayId);

    return dayObj.events.find(event => event.details === eventDetails);
  },
  editEvent(dayId, eventDetails) {
    this.resetEditOfAllEvents();
    const eventObj = this.getEventObj(dayId, eventDetails);
    eventObj.edit = true;
  },
  updateEvent(dayId, originalEventDetails, updatedEventDetails) {
    const eventObj = this.getEventObj(dayId, originalEventDetails);
    eventObj.details = updatedEventDetails;
    eventObj.edit = false;
  },
  deleteEvent(dayId, eventDetails) {
    const dayObj = this.state.seedData.find(day => day.id === dayId);
    const indexToEvent = dayObj.events.findIndex(
      event => event.details === eventDetails
    );
    dayObj.events.splice(indexToEvent, 1);
  }
};
