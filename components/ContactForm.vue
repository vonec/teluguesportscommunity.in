<template>
  <!-- Contact Form Section Start -->
  <div class="container">
    <!-- Title Section Start -->
    <TitleSection :title="title" :text="text" />
    <!-- Title Section End -->

    <form
      id="contact-form"
      class="grid sm:gap-x-8 gap-x-4 grid-cols-2"
      @submit.prevent="submitForm"
    >
      <div>
        <input
          v-model="formData.name"
          type="text"
          class="px-6 h-14 mb-6 text-white border-secondary-80 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
          placeholder="Name"
          required
        />
      </div>
      <div>
        <input
          v-model="formData.organization"
          type="text"
          class="px-6 h-14 mb-6 text-white border-secondary-80 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
          placeholder="Organization"
        />
      </div>
      <div>
        <input
          v-model="formData.email"
          type="email"
          class="px-6 h-14 mb-6 text-white border-secondary-80 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
          placeholder="E-mail"
          required
        />
      </div>
      <div>
        <input
          v-model="formData.phone"
          type="text"
          class="px-6 h-14 mb-6 text-white border-secondary-80 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
          placeholder="Contact Number"
          required
        />
      </div>
      <div>
        <select
          v-model="formData.purpose"
          class="px-6 h-14 mb-6 text-white border-secondary-80 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
          required
        >
          <option value="">Select Purpose</option>
          <option value="Unite">Unite - Connect and collaborate</option>
          <option value="Nurture">Nurture - Seek guidance and growth</option>
          <option value="Promote">Promote - Showcase talent</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <select
          v-model="formData.role"
          class="px-6 h-14 mb-6 text-white border-secondary-80 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
          required
        >
          <option value="">Select Role</option>
          <option value="Player">Player</option>
          <option value="Coach">Coach</option>
          <option value="Manager">Manager</option>
          <option value="Sponsor">Sponsor</option>
          <option value="Graphic Designer">Graphic Designer</option>
          <option value="Content Creator">
            Content Creator ( eg Youtuber / Other)
          </option>
          <option value="Production Team">Production Team</option>
          <option value="Promoter">Promoter</option>
          <option value="Organizer">Organizer</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div class="col-span-2">
        <textarea
          v-model="formData.message"
          class="px-6 pt-4 h-40 md:h-60 lg:h-72 mb-6 text-white border-secondary-80 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
          type="text"
          placeholder="Write from here"
          spellcheck="false"
          data-gramm="false"
          required
        ></textarea>

        <div class="form-btn-wrap flex justify-center w-full mt-16">
          <button
            type="submit"
            value="submit"
            name="submit"
            class="form-btn group primary-btn opacity-100 transition-all uppercase"
            style="background-image: url(/images/others/btn-bg.png)"
          >
            {{ btnName }}
            <img
              src="/images/icon/arrrow-icon.webp"
              alt="Arrow Icon"
              class="ml-3 w-5 h-5 group-hover:ml-4 transition-all"
            />
          </button>
        </div>
        <div class="col-span-2 text-center">
          <p v-if="successMessage" class="success-message">
            {{ successMessage }}
          </p>
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </div>
      </div>
    </form>
  </div>
  <!-- Contact Form Section End -->
</template>

<script>
export default {
  components: {
    TitleSection: () => import("@/components/Title/TitleSection"),
  },
  data() {
    return {
      title: "Get in Touch",
      text: "",
      btnName: "Submit",
      formData: {
        name: "ganesha",
        organization: "ganesha",
        role: "Player",
        purpose: "Unite",
        email: "ganesha@ganesha.com",
        phone: "ganesha",
        message: "ganesha",
      },
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        // Replace this URL with your actual backend API endpoint
        const response = await this.$axios.post(
          "/api/submitForm",
          this.formData
        );

        if (response.status === 200) {
          this.successMessage =
            "Thank you for contacting us!, we will get back to you soon.";
          this.errorMessage = "";
          // Clear the form after successful submission
          this.clearForm();
        }
      } catch (error) {
        this.successMessage = "";
        this.errorMessage = "An error occurred. Please try again later.";
      }
    },
    clearForm() {
      this.formData = {
        name: "",
        organization: "",
        role: "",
        purpose: "",
        email: "",
        phone: "",
        message: "",
      };
    },
  },
};
</script>
