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

    <template>
      <section id="activities" class="bg-transparent py-20 text-white">
        <div class="container mx-auto px-4">
          <h2
            class="text-3xl lg:text-5xl font-blackOps uppercase text-center mb-12"
          >
            eSports Tournaments
          </h2>

          <!-- Row 1: BGMI -->
          <div class="flex flex-col md:flex-row items-center gap-6 mb-10">
            <!-- Logo/Image -->
            <div class="flex justify-center">
              <img
                src="/images/esportex/bgmi.png"
                alt="BGMI Logo"
                class="h-60 w-60 object-contain"
              />
            </div>
            <!-- Details Text -->
            <div class="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <h3 class="text-2xl font-bold text-yellow mb-2">
                BATTLEGROUNDS MOBILE INDIA (BGMI)
              </h3>
              <p class="text-gray-300">
                The best BGMI teams from the Telugu-speaking community go
                head-to-head in a 12-match LAN finale packed with strategy,
                pressure, and high-octane finishes. Witness South India's most
                promising talent rise under the spotlight in a showdown built
                for local pride and national recognition.
              </p>
            </div>
          </div>

          <!-- Row 2: FREEFIRE MAX -->
          <div class="flex flex-col md:flex-row items-center gap-6 mb-10">
            <!-- Logo/Image -->
            <div class="flex justify-center">
              <img
                src="/images/esportex/ff.png"
                alt="FREEFIRE MAX LOGO"
                class="h-60 w-60 object-contain"
              />
            </div>
            <!-- Details Text -->
            <div class="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <h3 class="text-2xl font-bold text-primary mb-2">
                FREEFIRE MAX (FF MAX)
              </h3>
              <p class="text-gray-300">
                Featuring top-tier squads from across the country, the Free Fire
                MAX LAN Championship is where strategy meets spectacle. With 12
                teams qualifying through nationwide open registrations, fans can
                expect dynamic zone plays, unpredictable clutches, and pure
                adrenaline on the eSportX 2025 stage.
              </p>
            </div>
          </div>
          <h2
            class="text-3xl lg:text-5xl font-blackOps uppercase text-center mb-12"
          >
            Other Activities
          </h2>
          <!-- Remaining Activities Blocks -->
          <div class="grid md:grid-cols-3 gap-6">
            <!-- Block 1 -->
            <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <h3 class="text-2xl font-bold text-bright mb-2">
                Creator Meet & Greet
              </h3>
              <p class="text-gray-300">
                Connect with your favorite top creators, streamers — enjoy
                selfies, rapid-fire Q&As, autograph moments, and spontaneous
                creator challenges live at the venue.
              </p>
            </div>
            <!-- Block 2 -->
            <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <h3 class="text-2xl font-bold text-punch mb-2">
                Creator Stage Highlights
              </h3>
              <p class="text-gray-300">
                Discover immersive activations and live product demos from
                leading gaming, tech, and lifestyle brands. From interactive
                booths and sampling stations to contest giveaways and merch
                drops, our sponsor zones are built for maximum audience
                engagement.
              </p>
            </div>
            <!-- Block 3 -->
            <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <h3 class="text-2xl font-bold text-yellow mb-2">
                Live Player Interviews
              </h3>
              <p class="text-gray-300">
                Catch exclusive on-ground interviews and post-match breakdowns
                from the analyst desk. Hear directly from casters, creators, and
                team captains as they dissect plays, share strategies, and react
                to every match-defining moment — all broadcast live and on-site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </template>

    <script>
      export default {
        name: "ActivitiesSection",
      };
    </script>

    <style scoped>
      /* Optional image size control */
    </style>

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
    ScheduleB: () => import("@/components/Esportex/Schedule"),
    ContactBanner: () => import("@/components/ContactBanner"),
    Footer: () => import("@/components/Footer"),
  },
  data() {
    return {
      navOpen: false,
      BreadcrumbTitle: "Esportex",
      BreadcrumbSubTitle: "Fuel the Hype. Feel the Heat. ",
      paddingTop: "pt-18",
    };
  },
};
</script>
