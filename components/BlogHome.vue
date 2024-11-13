<template>
  <!-- Blog Post Section Start -->
  <div class="container pt-32">
    <!-- Title Section Start -->
    <TitleSection :title="title" :text="text" />
    <!-- Title Section End -->

    <div
      class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 sm:gap-12 px-0 sm:px-10"
    >
      <div v-for="(blog, index) in blogData.slice(0, 4)" :key="index">
        <div class="flex sm:items-center flex-col sm:flex-row">
          <div
            class="lg:w-40 xl:w-52 2xl:w-52 md:w-44 sm:w-37 w-32 mb-7 sm:mb-0 flex-shrink-0"
          >
            <a :href="blog.link" target="_blank">
              <img :src="blog.imgSrc" :alt="blog.alt" />
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

    <h2>News</h2>
    <div v-for="(item, index) in newsData" :key="index">
      <h3>{{ item.title }}</h3>
      <p>{{ item.date }}</p>
      <p>{{ item.content }}</p>
    </div>

    <h2>Events</h2>
    <div v-for="(event, index) in eventsData" :key="index">
      <h3>{{ event.name }}</h3>
      <p>{{ event.date }}</p>
      <p>{{ event.location }}</p>
    </div>
  </div>
  <!-- Blog Post Section End -->
</template>

<script>
import blogData from "@/data/blog.json";
export default {
  components: {
    TitleSection: () => import("@/components/Title/TitleSection"),
  },
  data() {
    return {
      blogData,
      title: "Latest News",
      text: "",
      newsData: [],
      eventsData: [],
    };
  },
  async mounted() {
    await this.loadData();
  },
  methods: {
    async fetchSheetData(sheet, limit = null, sortByDate = false) {
      try {
        const params = {
          sheet,
          ...(limit && { limit }),
          ...(sortByDate && { sortByDate: "true" }),
        };

        // Call the server-side proxy endpoint
        const response = await axios.get("/api/google-sheet", { params });
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        return [];
      }
    },
    async loadData() {
      try {
        // Fetch "news" data, limited to 5 records, sorted by date
        this.newsData = await this.fetchSheetData("news", 5, true);

        // Fetch "events" data without limit or sorting
        this.eventsData = await this.fetchSheetData("events");
      } catch (error) {
        console.error("Error loading data:", error);
      }
    },
  },
};
</script>
