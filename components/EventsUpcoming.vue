span
<template>
  <!-- Gaming World Section Start -->
  <div
    class="mb-15 bg-cover bg-center"
    style="background-image: url('/images/others/static-banner.webp')"
  >
    <div class="container">
      <TitleSection :title="title" />
    </div>
    <div
      class="container h-[500px] flex justify-center items-center"
      v-if="loading"
    >
      Loading...
    </div>
    <div
      v-else
      class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      <div
        class="text-white text-center align-center bg-opacity-90 bg-gray-800 rounded-lg shadow-lg md:pt-14 md:pb-12 md:px-12 sm:py-14 sm:px-6 py-14 px-10 hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 flex flex-col"
        v-for="(service, index) in services"
        :key="index"
      >
        <div class="my-6">
          <img
            class="h-40 w-40 mx-auto rounded-full border-4 border-gray-700"
            :src="service.imgSrc"
            :alt="service.name"
            @error="handleImageError"
          />
        </div>
        <div class="flex-1">
          <h3
            class="text-white font-exo text-xl md:text-2xl font-bold uppercase mb-3"
          >
            {{ service.title }}
          </h3>
          <p class="text-gray-300 mb-2">
            {{ formatDate(service.date) }}
          </p>
          <p class="text-gray-400 text-sm">{{ service.text }}</p>
        </div>
        <!-- Click Here Button in the same position in all cards -->
        <a
          :href="service.link"
          target="_blank"
          class="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
        >
          Click Here
        </a>
      </div>
    </div>
    <div class="container">
      <div class="mt-8 flex justify-between items-center">
        <button
          @click="fetchPage(currentPage - 1)"
          :disabled="currentPage === 1 || loading"
          class="px-4 py-2 bg-[#592F99] text-white rounded disabled:opacity-50"
        >
          <span v-if="loading">Loading...</span>
          <span v-else>Previous</span>
        </button>

        <div>Page {{ currentPage }} of {{ totalPages }}</div>

        <button
          @click="fetchPage(currentPage + 1)"
          :disabled="currentPage >= totalPages || loading"
          class="px-4 py-2 bg-[#592F99] text-white rounded disabled:opacity-50"
        >
          <span v-if="loading">Loading...</span>
          <span v-else>Next</span>
        </button>
      </div>
    </div>
  </div>
  <!-- Gaming World Section End -->
</template>

<script>
export default {
  components: {
    TitleSection: () => import("@/components/Title/TitleSection"),
  },
  data() {
    return {
      title: "Upcoming Events",

      currentPage: 1,
      limit: 12,
      totalPages: 1,
      totalItems: 0,
      services: [],
      loading: false, // Loading state
    };
  },
  async fetch() {
    this.page = parseInt(this.$route.query.page) || 1;
    this.limit = parseInt(this.$route.query.limit) || 6;

    try {
      this.loading = true; // Start loading
      const response = await this.$axios.get(
        `/api/data?s=events&t=upcoming&page=${this.page}&l=${this.limit}`
      );
      this.services = response.data.data;
      this.currentPage = response.data.meta.current_page;
      this.limit = response.data.meta.per_page;
      this.totalPages = response.data.meta.total_pages;
      this.totalItems = response.data.meta.total;
    } catch (error) {
      console.error("Error fetching blog data:", error);
      this.services = null; // Reset services on error
    } finally {
      this.loading = false; // Stop loading
    }
  },

  methods: {
    async fetchPage(page) {
      console.log("Fetching page", page);
      this.loading = true; // Start loading
      try {
        // Update the URL without reloading the page
        this.$router.push({ query: { ...this.$route.query, page } });

        const { data } = await this.$axios.get(
          `/api/data?s=events&t=upcoming&page=${page}&l=${this.limit}`
        );
        this.services = data.data;
        this.currentPage = data.meta.current_page;
        this.limit = data.meta.per_page;
        this.totalPages = data.meta.total_pages;
        this.totalItems = data.meta.total;
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        this.loading = false; // Stop loading
      }
    },
    formatDate(isoDate) {
      const date = new Date(isoDate);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    },
    handleImageError(event) {
      // Define the array of backup images directly inside the function
      const backupImages = [
        "/images/blog/blog-grid-1.webp",
        "/images/blog/blog-grid-2.webp",
        "/images/blog/blog-grid-3.webp",
        "/images/blog/blog-grid-4.webp",
        "/images/blog/blog-grid-5.webp",
        "/images/blog/blog-grid-6.webp",
      ];

      // Select a random image from the backupImages array
      const randomIndex = Math.floor(Math.random() * backupImages.length);
      event.target.src = backupImages[randomIndex];
    },
  },
};
</script>
