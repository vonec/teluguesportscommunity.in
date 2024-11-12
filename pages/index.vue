<template>
  <div
    class="bg-cover bg-gray-800"
    style="background-image: url(/images/bg/body-bg.webp)"
  >
    <HeaderSection />

    <OffCanvasMobileMenu
      :class="{ 'show-mobile-menu': navOpen }"
      @togglenav="navOpen = !navOpen"
    />

    <HeroBanner />

    <GamingWorld />

    <CounterUp />

    <BlogHome />

    <ContactBanner :paddingTop="paddingTop" />

    <Footer />
  </div>
</template>

<script> 
export default {
  components: {
    HeaderSection: () => import("@/components/HeaderSection"),
    HeroBanner: () => import("@/components/HeroBanner"),
    OffCanvasMobileMenu: () =>
      import("@/components/Header/OffCanvasMobileMenu"),
    GamingWorld: () => import("@/components/GamingWorld"),
    LiveStream: () => import("@/components/LiveStream"),
    UpcomingMatchesHome: () => import("@/components/UpcomingMatchesHome"),
    CounterUp: () => import("@/components/CounterUp"),
    PopularGame: () => import("@/components/Games/PopularGame"),
    Testimonial: () => import("@/components/Testimonial"),
    BlogHome: () => import("@/components/BlogHome"),
    ContactBanner: () => import("@/components/ContactBanner"),
    Footer: () => import("@/components/Footer"),
  },
  head() {
    return {
      title: "Home Page",
    };
  },
  data() {
    return {
      navOpen: false,
      paddingTop: "pt-32",
    };
  },
};
</script>
