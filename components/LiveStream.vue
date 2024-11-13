<template>
  <!-- Live Section Start -->
  <section class="live-section">
    <div class="container relative">
      <!-- YouTube Channel Promotion Section -->
      <div
        class="text-center bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-12 px-8 rounded-lg shadow-lg mb-10 relative overflow-hidden"
      >
        <!-- Floating Background Icons -->
        <div
          class="absolute -top-6 -left-6 opacity-10 text-white text-8xl font-bold transform rotate-45"
        >
          🎮
        </div>
        <div
          class="absolute -top-6 right-6 opacity-10 text-white text-8xl font-bold transform -rotate-45"
        >
          🔥
        </div>

        <!-- Promotion Content -->
        <h2 class="text-4xl text-white font-extrabold mb-4 animate-pulse">
          Subscribe to Our YouTube Channel!
        </h2>
        <p class="text-lg sm:text-xl mb-6 font-light tracking-wide">
          Catch exclusive live streams, highlights, and all the latest in
          esports action!
        </p>
        <a
          href="http://www.youtube.com/@TeluguEsportsCommunity"
          target="_blank"
          class="bg-[#ff9900] hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-flex items-center"
        >
          <svg
            class="text-red-600"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M19.615 4.184C21.1 4.184 22 5.09 22 6.611v10.784c0 1.521-.9 2.427-2.385 2.427H4.385C2.9 19.822 2 18.916 2 17.395V6.611c0-1.521.9-2.427 2.385-2.427h15.23zM10 15.576l6-3.577-6-3.577v7.154z"
            />
          </svg>
          Subscribe Now
        </a>
      </div>

      <!-- Video Carousel Section -->
      <CoolLightBox
        :items="matchesData"
        :index="index"
        @close="index = null"
      ></CoolLightBox>

      <swiper class="swiper" :options="swiperOption">
        <swiper-slide
          v-for="(match, imageIndex) in matchesData"
          :key="imageIndex"
        >
          <div class="relative">
            <img
              class="sm:h-full h-64 w-full object-cover"
              :src="match.gamingBg"
              :alt="match.gamingAlt"
            />
            <div @click="index = imageIndex" class="absolute-center">
              <img
                class="md:w-120 w-20 h-20 md:h-120 cursor-pointer rounded"
                :src="match.playBtnOne"
                :alt="match.playAlt"
              />
            </div>
            <div
              class="absolute md:h-20 h-12 left-1/2 bottom-0 transform -translate-x-2/4 bg-no-repeat bg-center w-full flex justify-center items-center"
              :style="{ backgroundImage: `url(${match.videoShapeBg})` }"
            >
              <h3
                class="text-white font-exo font-bold uppercase text-base sm:text-xl md:text-2xl"
              >
                {{ match.shapeTitle }}
              </h3>
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <!-- Navigation Arrows -->
      <div
        class="livesection-button-prev swipper-arrow text-white absolute top-2/4 transform -translate-y-2/4 md:w-68 w-55 md:h-55 h-11 bg-cover flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape transition-all 2xl:-left-28 left-3 z-50 cursor-pointer"
      >
        <img
          class="w-4 h-6"
          src="/images/icon/navigation-arrow2.webp"
          alt="Prev"
        />
      </div>
      <div
        class="livesection-button-next swipper-arrow text-white absolute top-2/4 transform -translate-y-2/4 md:w-68 w-55 md:h-55 h-11 flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape bg-cover transition-all 2xl:-right-28 2xl:left-auto right-3 z-50 cursor-pointer"
      >
        <img
          class="w-4 h-6"
          src="/images/icon/navigation-arrow1.webp"
          alt="Next"
        />
      </div>
    </div>
  </section>
  <!-- Live Section End -->
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import matchesData from "../data/matches.json";

export default {
  components: {
    Swiper,
    SwiperSlide,
    CoolLightBox,
  },
  data() {
    return {
      matchesData,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: false,
        navigation: {
          nextEl: ".live-section .livesection-button-next",
          prevEl: ".live-section .livesection-button-prev",
        },
      },
      index: null,
    };
  },
};
</script>
