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

    <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 bg-white/5 backdrop-blur-sm rounded-xl p-8 text-white mt-20">
  <!-- Left: Sponsor Info Text -->
  <div class="flex-1">
    <h3 class="text-3xl font-bold mb-4 text-yellow">Partner with eSportX 2025</h3>
    <p class="text-gray-300 text-lg">
      Showcase your brand to 25,000+ live attendees and millions of digital viewers.<br>
      Join the first-ever Telugu Esports Tournament, held in strategic collaboration with SportEx 2025 and HITEX.
    </p>
  </div>

  <!-- Right: CTA Button -->
  <div class="mt-8 lg:mt-2">
  <nuxt-link
    to="/contact/"
    target="_blank"
    rel="noopener noreferrer"
    role="button"
    class="bg-gradient-to-r from-[#B153F0] via-[#8E39E0] to-[#6A22C8] text-white hover:text-white rounded px-3 py-2 shadow-md"
  >
    Become a Sponsor
  </nuxt-link>
  </div>
</div>




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
