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
          Connection With Our Esports Community
        </h5>
      </div>
      <div class="xl:mb-2 sm:mb-2 mt-6 mb-2">
        <h3
          class="xl:text-2xl text-xl text-white uppercase font-bold leading-8"
        >
          Esports Team Communication:
        </h3>
      </div>
      <div class="about_desc mb-10">
        <p>
          Esports members, including players, coaches, and team staff, should be
          connected through various means to enhance their performance,
          teamwork, and overall experience.
        </p>

        <div class="xl:mb-2 sm:mb-2 mt-6 mb-2">
          <h3
            class="xl:text-2xl text-xl text-white uppercase font-bold leading-8"
          >
            Communication
          </h3>
        </div>

        <p>
          Regular communication is crucial in esports, where split-second
          decisions can make a significant difference in matches. Connected
          members can communicate effectively through voice or text chat,
          ensuring they're on the same page and can coordinate strategies.
        </p>
      </div>

      <div class="xl:mb-2 sm:mb-2 mt-6 mb-2">
        <h3
          class="xl:text-2xl text-xl text-white uppercase font-bold leading-8"
        >
          Teamwork
        </h3>
      </div>

      <p>
        Connection fosters a sense of unity and camaraderie among team members,
        which is essential for success in esports. When everyone is connected,
        they can work together seamlessly, anticipating each other's moves and
        executing strategies more effectively.
      </p>

      <div class="xl:mb-2 sm:mb-2 mt-6 mb-2">
        <h3
          class="xl:text-2xl text-xl text-white uppercase font-bold leading-8"
        >
          Data Sharing
        </h3>
      </div>

      <p>
        Connected members can share data, such as game statistics, replays, and
        analysis, to improve their gameplay and identify areas for improvement.
      </p>

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
      btnName: "Join US",
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
