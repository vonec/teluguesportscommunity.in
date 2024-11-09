<template>
    <!-- Gaming World Section Start -->
    <div class="lg:mb-32 md:mb-20 mb-15">
      <div class="container">
        <TitleSection :title="title" />
      </div>
      <div
        class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <div
          class="text-white text-center align-cener bg-no-repeat bg-scroll bg-center bg-cover md:pt-14 md:pb-12 md:px-12 sm:py-14 sm:px-6 py-14 px-10 h-[660px]"
          :style="{ backgroundImage: `url(${service.videoBannerBg})` }"
          v-for="(service, index) in services"
          :key="index"
        >
          <div class="my-12 text-center align-center">
            <img class="h-37 w-36" :src="service.imgSrc" :alt="service.name" />
          </div>
          <div class="block">
            <h3
              class="text-white font-exo text-xl md:text-2xl font-bold uppercase mb-4"
            >
              {{ service.live }}
            </h3>
            <p class="">{{ service.text }}</p>
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
        title: "Get Connected to our Esports.",
        services: [
          {
            imgSrc: "/images/others/gaming-world1.webp",
            name: "Service Image",
            live: "Unite",
            text: "TEC brings together all stakeholders from the Telugu-speaking esports world, including players, clans, coaches, managers, sponsors, graphic designers, production teams, promoters, and organizers. We foster a vibrant and inclusive community, providing a platform for everyone to connect, collaborate, and grow.",
            videoBannerBg: "/images/others/gaming-world-bg1.webp",
          },
          {
            imgSrc: "/images/others/gaming-world2.webp",
            name: "Service Image",
            live: "Nurture",
            text: "TEC is dedicated to helping every stakeholder reach their full potential. Through mentorship programs, training sessions, and comprehensive resources, we support players, coaches, managers, and other contributors in developing their skills and achieving their esports dreams.",
            videoBannerBg: "/images/others/gaming-world-bg2.webp",
          },
          {
            imgSrc: "/images/others/gaming-world3.webp",
            name: "Service Image",
            live: "Promote",
            text: "TEC showcases the talents of Telugu gamers and their supporting teams on national and international stages. By organizing regular tournaments, events, and live streams, we provide opportunities for players, clans, and all stakeholders to gain recognition and success in the competitive gaming arena.",
            videoBannerBg: "/images/others/gaming-world-bg3.webp",
          },
        ],
      };
    },
  };
  </script>