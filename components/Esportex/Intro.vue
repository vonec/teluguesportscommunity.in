<template>
  <!-- About Section Start -->
  <div class="container flex items-start md:space-x-4 flex-col lg:flex-row">
    <div class="w-full lg:w-1/2 mb-10 lg:mb-0">
      <div class="sm:mr-12 mr-0 text-center relative">
        <img src="/images/esportex/logo.png?Acbd" alt="eSportX" />

        <CounterUp />
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
          Esportex is the first telugu esports event hosted in collaboration
          with
          <strong>SportEx 8th Edition</strong> and <strong>HITEX</strong>. Set
          within India’s largest sports and fitness expo, this two-day spectacle
          (22–23 August 2025) marks a historic integration of competitive gaming
          into the mainstream sporting arena. With curated tournaments in BGMI
          and Free Fire MAX, a LAN Grand Finals, and high-energy fan zones,
          Esportex bridges physical and digital sports for a unified,
          high-impact audience experience.
        </p>
      </div>
      <div
        class="flex flex-col md:flex-row justify-center items-center gap-8 p-6"
      >
        <!-- Image 1 -->
        <div class="flex flex-col items-center">
          <img
            src="/images/esportex/esportex-bgmi.png"
            alt="Esportex BGMI"
            class="w-64 h-auto rounded shadow-md mb-4"
          />
          <a
            href="https://game7.in/tournament/bgmi/esportex-bgmi"
            target="_blank"
            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center"
          >
            BGMI Registration
          </a>
        </div>

        <!-- Image 2 -->
        <div class="flex flex-col items-center">
          <img
            src="/images/esportex/esportex-ff.png"
            alt="Esportex FreeFire MAX"
            class="w-64 h-auto rounded shadow-md mb-4"
          />
          <a
            href="https://forms.gle/nC8xdvjRYoifuZ4t9"
            target="_blank"
            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center"
          >
            FreeFire Max Registration
          </a>
        </div>
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
    CounterUp: () => import("@/components/Esportex/Countdown"),

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
