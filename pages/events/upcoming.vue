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

      <EventsUpcoming />

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
      Footer: () => import("@/components/Footer"),
      EventsUpcoming: () => import("@/components/EventsUpcoming")
 

    },
    data() {
      return {
        navOpen: false,
        BreadcrumbTitle: "Upcoming",
        BreadcrumbSubTitle: "Upcoming",
        paddingTop: "pt-32",
      };
    },
    head() {
      return {
        title: "Upcoming",
      };
    },
  };
  </script>
  