<template>
  <!-- Blog Post Section Start -->
  <div class="container pt-32">
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
              <img
                :src="blog.imgSrc"
                :alt="blog.alt"
                @error="handleImageError"
              />
            </a>
          </div>
          <div class="xl:ml-9 lg:ml-6 md:ml-9 ml-3 flex flex-col flex-1">
            <span class="text-sm text-white font-exo font-normal mb-2 sm:mb-5">
              <i class="icofont-calendar text-primary mr-2"></i>
              {{ formatDate(blog.date) }}
            </span>
            <h2
              class="text-white xl:text-2xl lg:text-xl md:text-2xl sm:text-lg font-bold uppercase font-exo hover:text-primary transition-all mb-2 sm:mb-5 leading-9"
            >
              <a :href="blog.link" target="_blank">{{ blog.title }}</a>
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
    <div class="mt-4 flex justify-center">
      <ButtonNewsButton />
    </div>
  </div>
  <!-- Blog Post Section End -->
</template>

<script>
export default {
  components: {
    TitleSection: () => import("@/components/Title/TitleSection"),
  },
  async fetch() {
    // Check the page query parameter in the URL and set to 1 if not present
    this.page = parseInt(this.$route.query.page) || 1;
    this.limit = parseInt(this.$route.query.limit) || 6;

    try {
      // Fetch data from the API using the current page
      const response = await this.$axios.get(
        `/api/data?s=news&page=${this.page}&l=${this.limit}`
      );
      this.blogData = response.data.data; // Set blogData with the API response
    } catch (error) {
      console.error("Error fetching blog data:", error);
      this.blogData = null; // Reset blogData on error
    }
  },
  data() {
    return {
      title: "Latest News",
      text: "",
      blogData: [],
    };
  },
  methods: {
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
