<template>
    <!-- Gaming World Section Start -->
    <div
      class="lg:mb-32 md:mb-20 mb-15 bg-cover bg-center py-20"
      style="background-image: url('/images/others/static-banner.webp');"
    >
      <div class="container">
        <TitleSection :title="title" />
      </div>
      <div class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          class="text-white text-center align-center bg-opacity-90 bg-gray-800 rounded-lg shadow-lg md:pt-14 md:pb-12 md:px-12 sm:py-14 sm:px-6 py-14 px-10 hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
          v-for="(service, index) in services"
          :key="index"
        >
          <div class="my-6">
            <img class="h-40 w-40 mx-auto rounded-full border-4 border-gray-700" :src="service.imgSrc" :alt="service.name" />
          </div>
          <div class="block">
            <h3 class="text-white font-exo text-xl md:text-2xl font-bold uppercase mb-3">
              {{ service.title }}
            </h3>
            <p class="text-gray-300 mb-2">{{ service.date }} | {{ service.time }}</p>
            <p class="text-gray-400 text-sm">{{ service.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Gaming World Section End -->
  </template>
  
  <script>
  export default {
    components: {
      TitleSection: () => import("@/components/Title/TitleSection"),
    },
    data() {
      return {
        title: "Welcome to the Exciting World of eSports!",
        services: [
          {
            imgSrc: "/images/others/upcoming-game-thumb1.webp",
            name: "BGMI Image",
            title: "BGMI Championship",
            date: "Nov 15, 2024",
            time: "6:00 PM",
            text: "Watch top players battle it out in the BGMI Championship, featuring intense gameplay and thrilling action!",
          },
          {
            imgSrc: "/images/others/upcoming-game-thumb2.webp",
            name: "CODM Image",
            title: "CODM Warfare",
            date: "Nov 20, 2024",
            time: "7:30 PM",
            text: "Dive into the CODM Warfare tournament and witness exceptional strategies and team play!",
          },
          {
            imgSrc: "/images/others/upcoming-game-thumb3.webp",
            name: "CoC Image",
            title: "Clash of Clans Battle",
            date: "Nov 22, 2024",
            time: "5:00 PM",
            text: "Join the Clash of Clans Battle as clans fight to claim victory in this ultimate strategy game.",
          },
          {
            imgSrc: "/images/others/upcoming-game-thumb7.webp",
            name: "Valorant Image",
            title: "Valorant Masters",
            date: "Nov 25, 2024",
            time: "8:00 PM",
            text: "Catch the Valorant Masters where precision meets skill in an intense showdown!",
          },
          {
            imgSrc: "/images/others/upcoming-game-thumb5.webp",
            name: "PUBG Image",
            title: "PUBG Global Series",
            date: "Dec 1, 2024",
            time: "9:00 PM",
            text: "Survival of the fittest! Witness teams competing in the PUBG Global Series.",
          },
          {
            imgSrc: "/images/others/upcoming-game-thumb6.webp",
            name: "Pokemon Unite Image",
            title: "Pokémon Unite Championship",
            date: "Dec 5, 2024",
            time: "4:30 PM",
            text: "Experience the Pokémon Unite Championship with thrilling team-based action and unique Pokémon strategies.",
          },
        ],
      };
    },
  };
  </script>
  