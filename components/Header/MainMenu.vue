<template>
  <!-- Menu Start -->
  <div class="px-8 hidden lg:block">
    <nav>
      <ul class="flex">
        <li
          v-for="(menuItem, index) in menu"
          :key="index"
          class="relative mr-14 group z-10 before:content-[''] before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100"
          :class="
            menuItem.title.length > 7
              ? 'before:bg-nav-shape-big before:w-[120px]'
              : 'before:bg-nav-shape'
          "
        >
          <NuxtLink
            :to="menuItem.link"
            class="text-white uppercase font-bold font-exo py-4"
          >
            {{ menuItem.title }}
          </NuxtLink>
          <ul
            v-if="menuItem.submenu.length"
            class="flex flex-col bg-white absolute w-56 px-4 py-2 border-l-2 rounded left-0 right-auto top-12 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all group-hover:top-9"
          >
            <li
              v-for="(submenuItem, subIndex) in menuItem.submenu"
              :key="subIndex"
            >
              <NuxtLink
                :to="submenuItem.link"
                class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary border-l-2 border-transparent hover:border-primary pl-3"
              >
                {{ submenuItem.title }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <div class="hidden bg-nav-shape-big w-27.5 w-[120px]"></div>
  </div>
  <!-- Menu End -->
</template>
<script>
import menu from "@/data/menu.json";
export default {
  name: "NavMenu",
  data() {
    return {
      menu,
    };
  },
};
</script>
