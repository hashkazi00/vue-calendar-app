<template>
  <div id="calendar-week" class="container">
    <div class="columns is-mobile">
      <CalendarDay
        v-for="day in sharedState.seedData"
        :key="day.id"
        :day="day"
      />
    </div>
  </div>
</template>

<script>
import { store } from '../store/store';
import CalendarDay from '@/components/CalendarDay.vue';
export default {
  name: 'CalendarWeek',
  components: {
    CalendarDay
  },
  data() {
    return {
      sharedState: store.state
    };
  }
};
</script>

<style lang="scss" scoped>
#calendar-week {
  margin-bottom: 50px;
  .column {
    padding: 0 0 0 0;
  }

  .day {
    background-color: #4a4a4a;
    color: #fff;
    border-left: 1px solid #8f8f8f;
    border-bottom: 1px solid #8f8f8f;
    font-size: 12px;
    cursor: pointer;

    &:hover {
      background: darken(#4a4a4a, 3%);
    }

    .day-banner {
      background-color: #333333;
      color: #fff;
      padding: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 12px;
      font-weight: 600;
    }

    &:last-child {
      border-right: 1px solid #8f8f8f;
    }
  }
}
</style>
