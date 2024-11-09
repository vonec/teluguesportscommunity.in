<template>
  <div>
    <!-- Esports Training Section Start -->
    <div class="container mx-auto mt-20 pt-8 text-center">
      <!-- Heading and Hero Image -->
      <h1 class="text-4xl lg:text-5xl font-extrabold text-primary mb-6 animate-fadeIn">Unlock Your Esports Potential</h1>
      <p class="text-xl text-gray-300 mb-10 animate-fadeIn delay-300">
        Step up your game with curated resources tailored to boost your skills, enhance strategy, and keep you at peak performance.
      </p>

      <div class="flex flex-col lg:flex-row items-center lg:space-x-16">
        <!-- Video Thumbnail with Play Button -->
        <div class="w-full lg:w-1/2 mb-8 lg:mb-0 relative group">
          <img
            src="/images/others/about-thumb.png"
            alt="Esports Training"
            class="rounded-lg shadow-lg transition-transform transform hover:scale-105"
            style="filter: brightness(0.9);"
          />
          <CoolLightBox :items="items" :index="index" @close="index = null"></CoolLightBox>
          <div
            @click="index = 0"
          >
            <i class="icofont-ui-play text-white text-6xl"></i>
          </div>
        </div>

        <!-- Training Resources Section -->
        <div class="w-full lg:w-1/2 space-y-6">
          <div
            v-for="section in sections"
            :key="section.title"
            class="p-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl animate-fadeIn"
          >
            <div class="flex items-center mb-4">
              <span class="text-3xl mr-4">🚀</span>
              <h3 class="text-2xl font-bold uppercase">{{ section.title }}</h3>
            </div>
            <p class="leading-relaxed text-lg">{{ section.content }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Esports Training Section End -->
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
      items: [
        {
          src: "https://www.youtube.com/watch?v=STko8mdMoNg",
        },
      ],
      index: null,
      sections: [
        {
          title: "Strategic Mastery & Teamwork",
          content:
            "Gain an edge by mastering game mechanics and team strategies. Sharpen communication, anticipate moves, and learn how to sync seamlessly with your team for unstoppable gameplay.",
        },
        {
          title: "Skill Optimization",
          content:
            "Push your limits! Set clear goals, maintain a consistent practice schedule, and refine your skills through feedback. Experiment with strategies to find your unique style and edge.",
        },
        {
          title: "Peak Physical and Mental Fitness",
          content:
            "Stay sharp and focused with balanced routines. Prioritize sleep, nutrition, and regular exercise to keep your mind and body prepared for intense gameplay and rapid decision-making.",
        },
        {
          title: "Adaptability and Resilience",
          content:
            "In the dynamic world of esports, adaptability is crucial. Embrace change, remain calm under pressure, and learn to turn setbacks into stepping stones to come back stronger every time.",
        },
      ],
    };
  },
};
</script>

