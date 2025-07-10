<template>
  <div
    class="bg-cover bg-gray-800"
    style="background-image: url(/images/bg/body-bg2.webp)"
  >
    <HeaderSection />

    <OffCanvasMobileMenu
      :class="{ 'show-mobile-menu': navOpen }"
      @togglenav="navOpen = !navOpen"
    />

    <Breadcrumb
      :BreadcrumbTitle="BreadcrumbTitle"
      :BreadcrumbSubTitle="BreadcrumbSubTitle"
    />

    <EsportxMenu />

    <div class="container mx-auto flex flex-col lg:flex-row mb-10 gap-3">
  <!-- Activity 1 -->
  <div class="flex-1 flex">
    <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 w-full">
      <h3 class="text-2xl font-bold text-yellow mb-4">Meet & Greet Zones</h3>
      <p class="text-gray-300">
        Interact with your favorite esports creators, streamers, and professional players live at the venue. From selfies to Q&A sessions, it's a chance to connect with the faces behind the screen.
      </p>
    </div>
  </div>

  <!-- Activity 2 -->
  <div class="flex-1 flex">
    <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 w-full">
      <h3 class="text-2xl font-bold text-bright mb-4">Partner Booth Activations</h3>
      <p class="text-gray-300">
        Discover interactive booths from top tech, gaming, and lifestyle brands. Enjoy giveaways, product demos, and booth challenges with real-time rewards and merch drops.
      </p>
    </div>
  </div>

  <!-- Activity 3 -->
  <div class="flex-1 flex">
    <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 w-full">
      <h3 class="text-2xl font-bold text-punch mb-4">Creator Stage Highlights</h3>
      <p class="text-gray-300">
        Catch your favorite creators live on stage with hosting segments, influencer showdowns, and content battles that blend entertainment with competition.
      </p>
    </div>
  </div>

  
</div>


    <ContactBanner :paddingTop="paddingTop" />

    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    HeaderSection: () => import("@/components/HeaderSection"),
    OffCanvasMobileMenu: () =>
      import("@/components/Header/OffCanvasMobileMenu"),
    Breadcrumb: () => import("@/components/Breadcrumb"),
    ScheduleB: () => import("@/components/eSportX/Schedule"),
    ContactBanner: () => import("@/components/ContactBanner"),
    Footer: () => import("@/components/Footer"),
  },
  data() {
    return {
      navOpen: false,
      BreadcrumbTitle: "eSportX",
      BreadcrumbSubTitle: "Fuel the Hype. Feel the Heat. ",
      paddingTop: "pt-18",
    };
  },
};
</script>
