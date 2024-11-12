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
  
      <PopularGame />

      <EventsPast />

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
      ContactBanner: () => import("@/components/ContactBanner"),
      EventsPast: () => import("@/components/EventsPast"),
      Footer: () => import("@/components/Footer"),
    },
    data() {
      return {
        navOpen: false,
        BreadcrumbTitle: "Past Events",
        BreadcrumbSubTitle: "Past Events",
        paddingTop: "pt-32",
      };
    },
    head() {
      return {
        title: "Past Events",
      };
    },
  };
  </script>
  