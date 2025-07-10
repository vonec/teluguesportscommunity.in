<template>
  <!-- Sponsorship Section Start -->
  <section id="sponsorship" class="bg-gray-950 py-20 text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl lg:text-5xl font-blackOps uppercase mb-12">
        Our Sponsors
      </h2>

      <!-- Sponsor Logos Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center mb-16">
        <!-- Replace these with actual sponsor logos -->
        <img src="/sponsors/logo1.png" alt="Sponsor 1" class="h-16 object-contain" />
        <img src="/sponsors/logo2.png" alt="Sponsor 2" class="h-16 object-contain" />
        <img src="/sponsors/logo3.png" alt="Sponsor 3" class="h-16 object-contain" />
        <img src="/sponsors/logo4.png" alt="Sponsor 4" class="h-16 object-contain" />
        <!-- Add more logos as needed -->
      </div>

      <!-- Call-to-Action Button -->
      <div>
        <a
          href="https://your-sponsor-form-link.com"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg rounded-full transition-all duration-300"
        >
          Become a Sponsor
        </a>
      </div>
    </div>
  </section>
  <!-- Sponsorship Section End -->
</template>

<script>
export default {
  name: "SponsorSection",
};
</script>

<style scoped>
/* You can customize the height or style of logos here if needed */
</style>
