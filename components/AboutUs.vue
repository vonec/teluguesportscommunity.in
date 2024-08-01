<template>
  <!-- About Section Start -->
  <div class="container flex items-center space-x-4 flex-col lg:flex-row">
    <div class="w-full lg:w-1/2 mb-10 lg:mb-0">
      <div class="sm:mr-12 mr-0 text-center relative">
        <img
          src="/images/others/about-thumb.png"
          alt="Telugu eSports Community"
        />
        <CoolLightBox :items="items" :index="index" @close="index = null">
        </CoolLightBox>
        <div v-for="(item, imageIndex) in items" :key="imageIndex">
          <div
            @click="index = imageIndex"
            class="absolute bottom-0 right-0 md:right-32 lg:right-0 cursor-pointer h-120 w-120 bg-primary rounded-full flex justify-center items-center z-30 before:content-[''] before:h-120 before:w-120 before:bg-primary before:opacity-50 before:rounded-full before:absolute before:z-20 before:transition-all hover:before:h-32 hover:before:w-32"
          >
            <i class="icofont-ui-play z-40 text-white"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-1/2">
      <div class="about_title lg:mb-6 mb-4">
        <h5
          class="text-primary text-xl uppercase font-bold pl-24 lg:mb-6 mb-4 relative before:absolute before:content-[''] before:left-0 before:top-1/2 before:-translate-y-1/2 before:transform before:h-1 before:bg-primary before:w-16"
        >
          About Telugu eSports Community
        </h5>
      </div>
      <div class="about_desc mb-10">
        <p>
          At TEC, our mission is to build a thriving ecosystem that unites all
          stakeholders from the Telugu-speaking esports community. Whether you
          are a player, coach, manager, clan member, sponsor, graphic designer,
          production team member, promoter, or organizer, TEC is your ultimate
          destination for everything related to esports.
        </p>
        <div class="xl:mb-2 sm:mb-2 mt-6 mb-2">
          <h3
            class="xl:text-2xl text-xl text-white uppercase font-bold leading-8"
          >
            Our Vision
          </h3>
        </div>

        <p>
          Our vision is to build the largest and most vibrant esports ecosystem
          for the Telugu-speaking community. We strive to create an environment
          where every stakeholder feels welcome and empowered to achieve their
          goals. Through continuous support, development, and promotion, we aim
          to elevate the profile of Telugu esports on the global stage.
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
          src: "https://www.youtube.com/watch?v=STko8mdMoNg",
        },
      ],
      index: null,
    };
  },
};
</script>
