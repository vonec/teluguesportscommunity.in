<template>
  <div>
    <!-- Esports Resources Section Start -->
    <div class="container mx-auto mt-20 pt-8 text-center">
      <!-- Heading and Hero Image -->
      <h1
        class="text-4xl lg:text-5xl font-extrabold text-primary mb-6 animate-fadeIn"
      >
        Ultimate Esports Toolkit
      </h1>
      <p class="text-xl mb-10 animate-fadeIn delay-300">
        Equip yourself with essential tools, tips, and insights designed to
        elevate your game. Discover resources that pro players swear&nbsp;by!
      </p>

      <div class="flex flex-col lg:flex-row items-start lg:space-x-16">
        <!-- Video Thumbnail with Play Button -->
        <div class="w-full lg:w-1/2 mb-8 lg:mb-0 relative">
          <img
            src="/images/games/AI_img1.jpg"
            alt="Esports Resources"
            class="rounded-lg shadow-lg transition-transform transform hover:scale-105"
            style="filter: brightness(0.9)"
          />
          
        
        </div>

        <!-- Resource Tips Section -->
        <div class="w-full lg:w-1/2 space-y-6">
          <div
            v-for="section in sections"
            :key="section.title"
            class="p-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 animate-fadeIn"
          >
            <div class="flex items-center mb-4">
              <span class="text-3xl mr-4">🔥</span>
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
    </div>
    <!-- Esports Resources Section End -->
  </div>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

export default {
 
  data() {
    return {
    
      index: null,
      sections: [
        {
          title: "Pro Gaming Gear & Tools",
          content:
            "Level up with pro-approved gear! From high-precision mice to responsive mechanical keyboards and premium headsets, find out which equipment maximizes your reaction time and gameplay experience. Discover cutting-edge tools that provide an edge, from analytics software to aim trainers!",
        },
        {
          title: "Mindset Mastery & Mental Resilience",
          content:
            "Peak performance isn't just skill—it's mentality! Learn tips to keep a cool head under pressure, embrace failure as growth, and stay positive. Build a routine for mental endurance, using focus exercises, meditation, and mindset strategies to stay unstoppable.",
        },
        {
          title: "Game Analysis & Strategy Insights",
          content:
            "Understanding the meta is key! Dive into expert guides on the latest strategies, map control tactics, and game-specific nuances. Uncover tools for analyzing your performance and replays, helping you optimize your approach, counter opponents, and outsmart the competition.",
        },
        {
          title: "Nutrition & Physical Fitness for Gamers",
          content:
            "Fuel your game with the right nutrition and keep your body ready for long sessions. Learn about foods that improve focus, hydration strategies, and simple exercises to prevent strain. Discover why top players treat their body like a finely tuned machine!",
        },
      ],
    };
  },
};
</script>
