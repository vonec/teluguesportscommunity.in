<template>
  <nav class="text-white px-4 py-3 mb-10 text-xl font-bold shadow">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo -->
      <div class="text-xl font-bold md:hidden">
        <NuxtLink to="/esportx" class="hover:text-teal-400 transition"
          >eSportEx</NuxtLink
        >
      </div>

      <div>&nbsp;</div>
      <!-- Mobile toggle -->
      <button @click="open = !open" class="md:hidden focus:outline-none">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <!-- Menu links -->
      <div
        :class="{ block: open, hidden: !open }"
        class="w-full md:flex md:items-center md:w-auto md:space-x-6 hidden"
      >
        <NuxtLink
          to="/esportx"
          class="block py-3 px-3 rounded hover:text-[#B153F0]"
          exact-active-class="bg-gradient-to-r from-[#B153F0] via-[#8E39E0] to-[#6A22C8] text-white hover:text-white rounded px-3 py-2 shadow-md"
          >About</NuxtLink
        >
        <NuxtLink
          to="/esportx-schedule"
          class="block py-3 px-3 rounded hover:text-[#B153F0]"
          exact-active-class="bg-gradient-to-r from-[#B153F0] via-[#8E39E0] to-[#6A22C8] text-white hover:text-white rounded px-3 py-2 shadow-md"
          >Schedule</NuxtLink
        >
        <NuxtLink
          to="/esportx-events"
          class="block py-3 px-3 rounded hover:text-[#B153F0]"
          exact-active-class="bg-gradient-to-r from-[#B153F0] via-[#8E39E0] to-[#6A22C8] text-white hover:text-white rounded px-3 py-2 shadow-md"
          >Events</NuxtLink
        >
        <NuxtLink
          to="/esportx-sponsors"
          class="block py-3 px-3 rounded hover:text-[#B153F0]"
          exact-active-class="bg-gradient-to-r from-[#B153F0] via-[#8E39E0] to-[#6A22C8] text-white hover:text-white rounded px-3 py-2 shadow-md"
          >Become a Sponsor</NuxtLink
        >
        <NuxtLink
          to="/esportx-social"
          class="block py-3 px-3 rounded hover:text-[#B153F0]"
          exact-active-class="bg-gradient-to-r from-[#B153F0] via-[#8E39E0] to-[#6A22C8] text-white hover:text-white rounded px-3 py-2 shadow-md"
          >Social Feed</NuxtLink
        >
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const open = ref(false);
</script>
