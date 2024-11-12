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
        class="text-white text-center align-center bg-opacity-90 bg-gray-800 rounded-lg shadow-lg md:pt-14 md:pb-12 md:px-12 sm:py-14 sm:px-6 py-14 px-10 hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 flex flex-col"
        v-for="(service, index) in services"
        :key="index"
      >
        <div class="my-6">
          <img class="h-40 w-40 mx-auto rounded-full border-4 border-gray-700" :src="service.imgSrc" :alt="service.name" />
        </div>
        <div class="flex-1">
          <h3 class="text-white font-exo text-xl md:text-2xl font-bold uppercase mb-3">
            {{ service.title }}
          </h3>
          <p class="text-gray-300 mb-2">{{ service.date }} | {{ service.time }}</p>
          <p class="text-gray-400 text-sm">{{ service.text }}</p>
        </div>
        <!-- Click Here Button in the same position in all cards -->
        <a
  :href="service.link"
  target="_blank"
  class="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
>
  Click Here
</a>

      </div>
    </div>
  </div>
  <!-- Gaming World Section End -->
</template>

<script>
import pastEvents from '@/data/past_events.json';

export default {
  components: {
    TitleSection: () => import("@/components/Title/TitleSection"),
  },
  data() {
    return {
      title: pastEvents.title,
      services: pastEvents.services,
    };
  },
};
</script>
