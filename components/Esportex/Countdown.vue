<template>
  <!-- Countdown Section Start -->
  <div class="container border-top-2 bg-color() my-16 text-white text-center">
    <h2 class="text-3xl lg:text-5xl font-blackOps uppercase mb-8">
      Event Countdown
    </h2>
    <div class="grid md:grid-cols-4 grid-cols-2 gap-8">
      <div class="countdown-block">
        <p class="text-5xl lg:text-7xl font-bold text-yellow">
          {{ countdown.days }}
        </p>
        <p class="uppercase mt-2 text-lg">Days</p>
      </div>
      <div class="countdown-block">
        <p class="text-5xl lg:text-7xl font-bold text-bright">
          {{ countdown.hours }}
        </p>
        <p class="uppercase mt-2 text-lg">Hours</p>
      </div>
      <div class="countdown-block">
        <p class="text-5xl lg:text-7xl font-bold text-punch">
          {{ countdown.minutes }}
        </p>
        <p class="uppercase mt-2 text-lg">Minutes</p>
      </div>
      <div class="countdown-block">
        <p class="text-5xl lg:text-7xl font-bold text-primary">
          {{ countdown.seconds }}
        </p>
        <p class="uppercase mt-2 text-lg">Seconds</p>
      </div>
    </div>
  </div>
  <!-- Countdown Section End -->
</template>

<script>
export default {
  data() {
    return {
      countdown: {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      },
      eventDate: new Date("2025-08-22T10:00:00"), // Event start date/time
      intervalId: null,
    };
  },
  methods: {
    updateCountdown() {
      const now = new Date();
      const distance = this.eventDate - now;

      if (distance <= 0) {
        clearInterval(this.intervalId);
        this.countdown = {
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        };
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.countdown = {
        days: this.padNumber(days),
        hours: this.padNumber(hours),
        minutes: this.padNumber(minutes),
        seconds: this.padNumber(seconds),
      };
    },
    padNumber(num) {
      return String(num).padStart(2, "0");
    },
  },
  mounted() {
    this.updateCountdown();
    this.intervalId = setInterval(this.updateCountdown, 1000);
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
};
</script>

<style scoped>
.countdown-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
