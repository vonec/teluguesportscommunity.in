<template>
    <section class="past-events py-12">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-yellow-400 mb-10">Legendary Past Events</h2>
        
        <div class="relative flex items-center justify-center w-full">
          <!-- Navigation Buttons -->
          <div 
            class="swiper-button-prev rounded-full bg-yellow-500 text-black hover:bg-yellow-600 transition w-12 h-12 flex items-center justify-center mr-4 cursor-pointer"
          >
            <i class="fas fa-chevron-left"></i>
          </div>
  
          <swiper 
            class="swiper-container max-w-4xl w-full"
            :options="swiperOptions"
          >
            <swiper-slide 
              v-for="(event, index) in pastEvents" 
              :key="index"
              class="flex justify-center"
            >
              <div 
                class="relative overflow-hidden rounded-xl shadow-xl w-full max-w-3xl h-80 transform transition-transform duration-500 hover:scale-105 bg-cover bg-center"
                :style="{ backgroundImage: `url(${event.image})` }"
                @click="goToVideo(event.videoUrl)"
              >
                <div class="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white px-6 py-4 cursor-pointer">
                  <h3 class="text-3xl font-bold">{{ event.title }}</h3>
                  <p class="text-lg mt-2">{{ event.description }}</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
  
          <div 
            class="swiper-button-next rounded-full bg-yellow-500 text-black hover:bg-yellow-600 transition w-12 h-12 flex items-center justify-center ml-4 cursor-pointer"
          >
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from "vue-awesome-swiper";
  import "swiper/css/swiper.css";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },                                                                //change your old event videos YT link//
    data() {
      return {
        pastEvents: [
          { title: "BGMI Championship 2023", image: "/images/games/bgmi.png", description: "A thrilling showdown among the best BGMI players!", videoUrl: "https://www.youtube.com/watch?v=example1" },
          { title: "CODM Winter Clash", image: "/images/games/call-of-duty.jpg", description: "The ultimate winter battle in CODM!", videoUrl: "https://www.youtube.com/watch?v=example2" },
          { title: "COC Summer Fest", image: "/images/games/clash-of-clans.jpg", description: "An epic summer celebration for Clash of Clans!", videoUrl: "https://www.youtube.com/watch?v=example3" },
          { title: "Valorant Showdown", image: "/images/valorant.jpg", description: "High-stakes Valorant matches you can't miss!", videoUrl: "https://www.youtube.com/watch?v=example4" },
          { title: "PUBG Global Series", image: "/images/games/pubg-new-state.jpg", description: "Witness PUBG legends compete for the title!", videoUrl: "https://www.youtube.com/watch?v=example5" },
          { title: "CS:GO Legends Cup", image: "/images/games/cs-go.jpg", description: "A clash of the best CS:GO players worldwide!", videoUrl: "https://www.youtube.com/watch?v=example6" },
          { title: "Pokemon Masters", image: "/images/games/pokemon-unite.jpg", description: "Catch 'em all in the Pokemon Masters tournament!", videoUrl: "https://www.youtube.com/watch?v=example7" },
        ],
        swiperOptions: {
          slidesPerView: 1,
          centeredSlides: true,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        },
      };
    },
    methods: {
      goToVideo(url) {
        window.open(url, "_blank");
      },
    },
  };
  </script>
  