<template>
  <div class="flex flex-col mr-12 xl:mr-100">
    <!-- Footer Logo Start -->
    <NuxtLink to="/" class="mb-10">
      <img src="/images/logo.webp" alt="Footer Logo" />
    </NuxtLink>
    <!-- Footer Logo End -->

    <!-- Social Icon List Start -->
    <ul class="flex mt-4">
      <li v-for="(link, index) in links" :key="index" class="mr-4 last:mr-0">
        <a
          :href="`${link.href}`"
          :style="{ backgroundImage: `url(${link.BgShape})` }"
          class="w-10 h-10 leading-10 text-center inline-block"
          target="_blank"
          ><i :class="link.className"></i
        ></a>
      </li>
    </ul>
    <!-- Social Icon List End -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          href: "https://www.instagram.com/TeluguEsportsCommunity",
          BgShape: "/images/icon/instagram.webp",
          className: "icofont-instagram text-white",
        },
        {
          href: "https://discord.gg/JP9nkJmEft",
          BgShape: "/images/icon/discord.png",
          className: "icofont- text-white",
        },
        {
          href: "https://chat.whatsapp.com/GcLUabRQn9oGt0JlYjDlAX",
          BgShape: "/images/icon/whatsapp-bg.png",
          className: "icofont-whatsapp text-white",
        },
        {
          href: "https://www.youtube.com/@TeluguEsportsCommunity",
          BgShape: "/images/icon/youtube-bg.webp",
          className: "icofont-youtube-play text-white",
        },
      ],
    };
  },
};
</script>
