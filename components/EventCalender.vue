<template>
  <section class="event-calendar py-12">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold text-yellow-400 mb-8">Event Calendar</h2>

      <!-- Calendar Grid -->
      <div class="calendar grid grid-cols-7 gap-4">
        <div
          v-for="(day, index) in daysInMonth"
          :key="index"
          :class="[
            'relative border p-4 rounded-lg',
            getEventsForDay(day.date).length ? 'has-event hover-event' : ''
          ]"
          @click="selectDate(day)"
        >
          <h3 class="text-xl font-semibold">{{ day.date }}</h3>
          <ul class="mt-2 text-sm">
            <li v-for="(event, eventIndex) in getEventsForDay(day.date)" :key="eventIndex">
              {{ event.title }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Event Details Modal -->
      <div v-if="selectedDateEvents.length" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg w-3/4 max-w-2xl">
          <h3 class="text-2xl font-bold text-yellow-400 mb-4">Events on {{ selectedDate }}</h3>
          <ul>
            <li v-for="(event, index) in selectedDateEvents" :key="index" class="mb-3">
              <div class="flex items-center justify-between">
                <span>{{ event.title }}</span>
                <button
                  @click="goToVideo(event.videoUrl)"
                  class="text-sm text-yellow-400 hover:text-yellow-300 underline"
                >
                  Watch Video
                </button>
              </div>
              <p class="text-sm text-gray-400">{{ event.description }}</p>
            </li>
          </ul>
          <button
            @click="closeModal"
            class="mt-4 bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
export default {
  data() {
    return {
      daysInMonth: this.generateDays(),
      events: [
        { title: "BGMI Championship", date: "2024-11-05", description: "Thrilling BGMI matches!", videoUrl: "https://www.youtube.com/watch?v=example1" },
        { title: "CODM Winter Clash", date: "2024-11-10", description: "High-stakes CODM battles!", videoUrl: "https://www.youtube.com/watch?v=example2" },
        { title: "Valorant Showdown", date: "2024-11-15", description: "Intense Valorant plays!", videoUrl: "https://www.youtube.com/watch?v=example3" },
        { title: "PUBG Global Series", date: "2024-11-20", description: "Global PUBG competition!", videoUrl: "https://www.youtube.com/watch?v=example4" },
        { title: "Pokemon Masters", date: "2024-11-25", description: "Exciting Pokemon battles!", videoUrl: "https://www.youtube.com/watch?v=example5" },
      ],
      selectedDate: null,
      selectedDateEvents: [],
    };
  },
  methods: {
    generateDays() {
      const days = [];
      const daysInMonth = new Date(2024, 11, 0).getDate(); // Days in November 2024
      for (let i = 1; i <= daysInMonth; i++) {
        days.push({ date: `2024-11-${String(i).padStart(2, "0")}` });
      }
      return days;
    },
    getEventsForDay(date) {
      return this.events.filter(event => event.date === date);
    },
    selectDate(date) {
      this.selectedDate = date;
      this.selectedDateEvents = this.getEventsForDay(date);
    },
    closeModal() {
      this.selectedDate = null;
      this.selectedDateEvents = [];
    },
    goToVideo(url) {
      window.open(url, "_blank");
    },
  },
};
</script>


<style scoped>  

.event-calendar .calendar > div {
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #374151; /* Dark gray border for non-event dates */
  border-radius: 8px;
}

.event-calendar .calendar .has-event {
  background-color: #fef08a; /* Yellow for event dates */
  color: #1f2937; /* Dark text for visibility */
}

.event-calendar .calendar .has-event h3 {
  color: #854d0e; /* Slightly darker yellow for text */
}

.event-calendar .calendar .hover-event:hover {
  background-color: #fef3c7; /* Lighter yellow on hover for event dates only */
}

</style>
