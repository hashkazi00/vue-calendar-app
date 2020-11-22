<template>
  <div id="calendar-entry">
    <div class="calendar-entry-note">
      <input
        type="text"
        placeholder="New Event"
        v-model="inputEntry"
        required
      />
      <p class="calendar-entry-day">
        Day of event:
        <span class="bold">{{ titleOfActiveDay }}</span>
      </p>
      <a
        class="button is-primary is-small is-outlined"
        @click="submitEvent(inputEntry)"
        >Submit</a
      >
    </div>
    <p style="color: red; font-size: 13px;" v-if="error">
      You must type something
    </p>
  </div>
</template>

<script>
import { store } from '../store/store';
export default {
  name: 'CalendarEvent',
  computed: {
    titleOfActiveDay() {
      return store.getActiveDay().fullTitle;
    }
  },
  data() {
    return {
      inputEntry: '',
      //to display an error message if user clicks submit without typing anything in the input.
      error: false
    };
  },
  methods: {
    submitEvent(inputEntry) {
      if (!inputEntry) return (this.error = true);
      store.submitEvent(inputEntry);
      this.inputEntry = '';
      this.error = false;
    }
  }
};
</script>

<style lang="scss" scoped>
#calendar-entry {
  background: #fff;
  border: 1px solid #42b883;
  border-radius: 10px;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;

  .calendar-entry-note {
    input {
      width: 200px;
      font-weight: 600;
      border: 0;
      border-bottom: 1px solid #ccc;
      font-size: 15px;
      height: 30px;
      margin-bottom: 10px;

      &:focus {
        outline: none;
      }
    }

    .calendar-entry-day {
      color: #42b883;
      font-size: 12px;
      margin-bottom: 10px;
      padding-bottom: 5px;

      .bold {
        font-weight: 600;
      }
    }

    .submit {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
