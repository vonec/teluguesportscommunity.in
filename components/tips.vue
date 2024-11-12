<template>
  <div>
    <!-- About Section Start -->
    <div
      class="container flex items-start space-y-8 flex-col lg:flex-row mt-20 pt-8"
    >
      <div class="w-full lg:w-1/2 mb-10 lg:mb-0 relative">
        <div class="sm:mr-12 mr-0 text-center relative">
          <img
            src="/images/others/about-thumb.png"
            alt="Telugu eSports Community"
            class="rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
            style="filter: brightness(0.85)"
          />
          <CoolLightBox
            :items="items"
            :index="index"
            @close="index = null"
          ></CoolLightBox>
          <div v-for="(item, imageIndex) in items" :key="imageIndex">
            <div
              @click="index = imageIndex"
              class="absolute bottom-0 right-0 md:right-32 lg:right-0 cursor-pointer h-24 w-24 bg-primary rounded-full flex justify-center items-center z-30 animate-pulse hover:scale-110 transition-all duration-200"
            >
              <i class="icofont-ui-play z-40 text-white text-4xl"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Cards Layout for Paragraphs -->
      <div class="w-full lg:w-1/2 grid grid-cols-1 gap-6">
        <div
          v-for="section in sections"
          :key="section.title"
          class="p-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl animate-fadeIn"
        >
          <div class="flex items-center mb-4">
            <span class="text-3xl mr-4">📣</span>
            <h3 class="text-2xl font-bold uppercase">{{ section.title }}</h3>
          </div>
          <p class="leading-relaxed text-lg">{{ section.content }}</p>
        </div>

        <n-link
          to="/contact"
          class="group primary-btn opacity-100 transition-all"
          style="background-image: url(/images/others/btn-bg.png)"
        >
          Join US
          <img
            src="/images/icon/arrrow-icon.webp"
            alt="Arrow Icon"
            class="ml-3 w-5 h-5 group-hover:ml-4 transition-all"
          />
        </n-link>
      </div>
    </div>
    <!-- About Section End -->
  </div>
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
      sections: [
        {
          title: "Mastering Strategy and Teamwork",
          content:
            "Develop a very deep understanding of the game mechanics, including its strengths, weaknesses, and meta. Learn to communicate effectively with your team, sharing information and coordinating strategies to achieve common goals.Analyze your opponents' strengths and weaknesses to develop counter-strategies.Practice teamwork and coordination to execute complex strategies and maneuvers.",
        },
        {
          title: "Improving Your Skills",
          content:
            "To improve your esports skills, set specific goals, create a consistent practice schedule, and track your progress. Seek feedback from coaches and experienced players, and experiment with new strategies to find your edge.",
        },
        {
          title: "Maintaining Physical and Mental Health",
          content:
            "Connection fosters a sense of unity and camaraderie among team members, which is essential for success in esports. When everyone is connected, they can work together seamlessly, anticipating each other's moves and executing strategies more effectively.",
        },
        {
          title: "Developing a Growth Mindset in Esports",
          content:
            " To cultivate a growth mindset, focus on embracing challenges and focusing on progress, not perfection, adapting to change and embracing feedback, staying curious and reflecting on your performance, setting specific and achievable goals, and seeking diverse perspectives while staying positive and resilient. ",
        },
      ],
    };
  },
};
</script>
