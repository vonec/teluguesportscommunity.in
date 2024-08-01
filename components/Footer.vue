<template>
  <!-- Footer Section Start -->
  <div>
    <!-- Main Footer Start -->
    <div class="py-32">
      <div class="container">
        <div class="grid grid-cols-1 sm:grid-cols-12">
          <div class="sm:col-span-6 lg:col-span-4">
            <FooterInfoWidget />
          </div>
          <div class="sm:col-span-6 lg:col-span-6 mt-10 sm:mt-0">
            <!-- Text Start -->
            <p>
              Telugu Esports Community (TEC) unites Telugu-speaking gamers,
              nurturing talent with training and mentorship, and promoting
              esports excellence through tournaments and events. Join TEC to
              connect, compete, and grow together.
            </p>
            <!-- Text End -->
          </div>
          <div class="sm:col-span-6 lg:col-span-2 mt-10 lg:mt-0">
            <FooterMenuList />
          </div>
        </div>
      </div>
    </div>
    <!-- Main Footer End -->

    <!-- Footer Bottom Start -->
    <div class="bg-gray-800 py-5">
      <div
        class="container flex justify-between relative items-center md:flex-row flex-col-reverse"
      >
        <p class="text-gray-500 text-sm uppercase font-medium mb-0">
          &copy; {{ currentYear }} TEC Made with
          <i class="icofont-heart text-primary"></i> in
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGJSURBVHjaYvy/nwEO/kEwGP37w/DvHxj9gSEwGyAAhXJwAAAEQzG0xSqmtJUZjOTW+sEll5f2xz5eMDkyDnaeOFmVxQIlCkiIveYVQGANDED2U6BShn9/gSyQHpCK3zDyFxj9ZmSXBdoAEEAs/8RMGTm1GFjE/v//9x+o5//fO6+FztyR+/vvr5HCbVWRpyCz//359/8PI4voP6ntAAHE+PvvXyZGxv//gbb8h9i2bPu9n5++6msIn7vzOcFPCWgM0CggCVT2/uMngABiYgI7nwGsA4K+fv2pLM21a//tz19//ger/g+RAgXJP4AAYoKYCkKMYH3//+spCx6/+vEPG5ehigDYWmT0DyCAGBmKGToCOp5+fPrn358/f3///vvn97/ff4Dk399AERD59w8I/fsjwy+zvHE5QACxMPxhgAjB1SGU/vsD1/nn319gMDD8YgAIIBYgBvJFuEUgxkBJMAKqAII///+AqP9gDf8YAAKIkSGZAagHaA+IhKM/SCJ/YAiUEBgAAgwA+jxNFkS1oCwAAAAASUVORK5CYII="
          />
        </p>
        <client-only>
          <back-to-top
            class="md:absolute-center position-absolute cursor-pointer z-999 left-3/4 md:left-1/2 mb-15 sm:mb-auto"
            bottom="auto"
            right="auto"
          >
            <img src="/images/icon/scroll-top.webp" alt="" />
          </back-to-top>
        </client-only>

        <ul class="flex">
          <li
            v-for="(link, index) in links"
            :key="index"
            class="text-white content-last-child-before before:ml-3 before:mr-3 before:inline-block before:content-['|'] first:before:hidden"
          >
            <n-link
              :to="`${link.pageLink}`"
              class="text-gray-500 text-sm uppercase font-medium transition-all hover:text-primary"
              >{{ link.linkName }}</n-link
            >
          </li>
        </ul>
      </div>
    </div>
    <!-- Footer Bottom End -->
  </div>
  <!-- Footer Section End -->
</template>

<script>
export default {
  components: {
    FooterInfoWidget: () => import("@/components/Footer/FooterInfoWidget"),
    FooterContactInfoWidget: () =>
      import("@/components/Footer/FooterContactInfoWidget"),
    FooterWinnerWidget: () => import("@/components/Footer/FooterWinnerWidget"),
    FooterMenuList: () => import("@/components/Footer/FooterMenuList"),
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      links: [
        {
          contentBefore: "",
          pageLink: "/terms-and-conditions",
          linkName: "Terms & Conditions",
        },
        {
          contentBefore: "||",
          pageLink: "/privacy-policy",
          linkName: "Privacy Policy",
        },
      ],
    };
  },
};
</script>
