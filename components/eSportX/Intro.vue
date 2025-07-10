<template>
  <!-- About Section Start -->
  <div class="container flex items-center space-x-4 flex-col lg:flex-row">
    <div class="w-full lg:w-1/2 mb-10 lg:mb-0">
      <div class="sm:mr-12 mr-0 text-center relative">
        <img
          src="/images/others/about-thumb.png"
          alt="Telugu eSports Community"
        />
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
      <div class="about_desc mb-10">
        <p>
         eSportX is TEC’s flagship esports event hosted in collaboration with Sportex 2025 and HITEX. Set within India’s largest sports and fitness expo, this two-day spectacle (22–23 August 2025) marks a historic integration of competitive gaming into the mainstream sporting arena.

With curated tournaments in BGMI and Free Fire MAX, a LAN Grand Finals, and high-energy fan zones, eSportX bridges physical and digital sports for a unified, high-impact audience experience.
        </p>
        <div class="xl:mb-2 sm:mb-2 mt-6 mb-2">
          <h3
            class="xl:text-2xl text-xl text-white uppercase font-bold leading-8"
          >
            Our Commitment at eSportX
          </h3>
        </div>

        <p>
          We are committed to building a high-impact esports platform that puts regional talent on the national stage. At eSportX, our focus is on creating authentic, competitive, and community-powered tournaments that elevate the Telugu esports ecosystem.

With every match, creator spotlight, and LAN final—we aim to bridge the gap between grassroots gaming and professional opportunities, while setting a new benchmark for integrity, transparency, and scalability in Indian esports.
        </p>
      </div>
      <div class="about_btn">
        <n-link
          to="/contact"
          class="group primary-btn opacity-100 transition-all"
          style="background-image: url(/images/others/btn-bg.png)"
        >
          {{ btnName }}
          <img
            src="/images/icon/arrrow-icon.webp"
            alt="Arrow Icon"
            class="ml-3 w-5 h-5 group-hover:ml-4 transition-all"
          />
        </n-link>
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
