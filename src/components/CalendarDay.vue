<template>
  <div class="day column" @click="setActiveDay(day.id)">
    <div class="day-banner has-text-white has-text-centered">
      {{ day.abbvTitle }}
    </div>
    <div class="day-details">
      <div class="day-number">{{ day.title }}</div>
      <CalendarEvent
        v-for="(event, index) in day.events"
        :key="index"
        :event="event"
        :day="day"
      />
    </div>
  </div>
</template>

<script>
import CalendarEvent from '@/components/CalendarEvent.vue';
import { store } from '../store/store';
export default {
  name: 'CalendarDay',
  components: {
    CalendarEvent
  },
  props: ['day'],
  methods: {
    setActiveDay(id) {
      store.setActiveDay(id);
    }
  }
};
</script>

<style lang="scss" scoped>
.day-details {
  padding: 10px;
}
</style>
