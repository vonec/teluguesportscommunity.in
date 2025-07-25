<template>
  <!-- About Section Start -->
  <div class="container flex items-center space-x-4 flex-col lg:flex-row">
    <div class="w-full lg:w-1/2 mb-10 lg:mb-0">
      <div class="sm:mr-12 mr-0 text-center relative">
        <img src="/images/esportex/logo.png" alt="eSportX" />
      </div>
    </div>
    <div class="w-full lg:w-1/2">
      <div class="about_title lg:mb-6 mb-4">
        <h5
          class="text-primary text-xl uppercase font-bold pl-24 lg:mb-6 mb-4 relative before:absolute before:content-[''] before:left-0 before:top-1/2 before:-translate-y-1/2 before:transform before:h-1 before:bg-primary before:w-16"
        >
          About eSportX
        </h5>
      </div>
      <div class="about_desc mb-10 text-xl">
        <p>
          eSportEx is the first telugu esports event hosted in collaboration with
          <strong>SportEx 8th Edition</strong> and <strong>HITEX</strong>. Set
          within India’s largest sports and fitness expo, this two-day spectacle
          (22–23 August 2025) marks a historic integration of competitive gaming
          into the mainstream sporting arena. With curated tournaments in BGMI
          and Free Fire MAX, a LAN Grand Finals, and high-energy fan zones,
          eSportEx bridges physical and digital sports for a unified, high-impact
          audience experience.
        </p>

        <CounterUp />
      </div>
    </div>
  </div>
  <!-- About Section End -->
</template>
<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
export default {
  components: {
    CounterUp: () => import("@/components/eSportX/Countdown"),

    CoolLightBox,
  },
  data() {
    return {
      btnName: "Play Now",
      items: [
        {
          src: "https://teluguesportscommunity.in/eSportX",
        },
      ],
      index: null,
    };
  },
};
</script>
