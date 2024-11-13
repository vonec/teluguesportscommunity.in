<template>
  <!-- Blog Post Section Start -->
  <div class="container">
    <!-- Title Section Start -->
    <TitleSection :title="title" :text="text" />
    <!-- Title Section End -->

    <div
      class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 sm:gap-12 px-0 sm:px-10"
    >
      <div v-for="(blog, index) in blogData" :key="index">
        <div class="flex sm:items-center flex-col sm:flex-row">
          <div
            class="lg:w-40 xl:w-52 2xl:w-52 md:w-44 sm:w-37 w-32 mb-7 sm:mb-0 flex-shrink-0"
          >
            <a :href="blog.link" target="_blank">
              <img :src="blog.imgSrc" :alt="blog.title" />
            </a>
          </div>
          <div class="xl:ml-9 lg:ml-6 md:ml-9 ml-3 flex flex-col flex-1">
            <span class="text-sm text-white font-exo font-normal mb-2 sm:mb-5"
              ><i class="icofont-calendar text-primary mr-2"></i
              >{{ blog.date }}</span
            >
            <h2
              class="text-white xl:text-2xl lg:text-xl md:text-2xl sm:text-lg font-bold uppercase font-exo hover:text-primary transition-all mb-2 sm:mb-5 leading-9"
            >
              <a :href="blog.link" target="_blank">
                {{ blog.title }}
              </a>
            </h2>
            <a
              :href="blog.link"
              target="_blank"
              class="uppercase font-exo relative pl-12 text-sm text-white transition-all hover:text-primary before:content-[''] before:absolute before:h-0.5 before:w-7.5 before:bg-primary before:left-0 before:top-1/2 before:transform before:-translate-y-1/2"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Pagination Controls -->
    <div class="mt-8 flex justify-between items-center">
      <button
        @click="fetchPage(currentPage - 1)"
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-[#592F99] text-white rounded disabled:opacity-50"
      >
        Previous
      </button>

      <div>Page {{ currentPage }} of {{ totalPages }}</div>

      <button
        @click="fetchPage(currentPage + 1)"
        :disabled="currentPage >= totalPages"
        class="px-4 py-2 bg-[#592F99] text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  </div>
  <!-- Blog Post Section End -->
</template>

<script>
export default {
  components: {
    TitleSection: () => import("@/components/Title/TitleSection"),
  },

  data() {
    return {
      title: "Latest News",
      text: "",
      currentPage: 1,
      limit: 12,
      totalPages: 1,
      totalItems: 0,
      blogData: [],
    };
  },
  async fetch() {
    // Check the page query parameter in the URL and set to 1 if not present
    this.page = parseInt(this.$route.query.page) || 1;
    this.limit = parseInt(this.$route.query.limit) || 6;

    try {
      // Fetch data from the API using the current page
      const response = await this.$axios.get(
        `/api/data?s=news&page=${this.page}&limit=${this.limit}`
      );
      this.blogData = response.data.data;
      this.currentPage = response.data.meta.current_page;
      this.limit = response.data.meta.per_page;
      this.totalPages = response.data.meta.total_pages;
      this.totalItems = response.data.meta.total;
    } catch (error) {
      console.error("Error fetching blog data:", error);
      this.blogData = null; // Reset blogData on error
    }
  },
  methods: {
    async fetchPage(page) {
      console.log("Fetching page", page);
      try {
        const { data } = await this.$axios.get(
          `/api/data?s=news&page=${page}&limit=${this.limit}`
        );
        this.blogData = data.data;
        this.currentPage = data.meta.current_page;
        this.limit = data.meta.per_page;
        this.totalPages = data.meta.total_pages;
        this.totalItems = data.meta.total;
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    },
  },
};
</script>
