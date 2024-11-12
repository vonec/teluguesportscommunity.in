<template>
    <!-- Privacy Policy Section Start -->
    <div class="container flex items-center space-x-4 flex-col lg:flex-row">
      <div class="w-full mb-10 lg:mb-0">
        <div class="privacy_policy_title lg:mb-6 mb-4">
          <h5
            class="text-primary text-xl uppercase font-bold pl-24 lg:mb-6 mb-4 relative before:absolute before:content-[''] before:left-0 before:top-1/2 before:-translate-y-1/2 before:transform before:h-1 before:bg-primary before:w-16"
          >
            Privacy Policy
          </h5>
        </div>
        <div class="privacy_policy_desc mb-10">
          <p>
            At TEC, we respect your privacy and are committed to protecting your personal information. This privacy policy outlines how we collect, use, share, and secure your data when you engage with our services. Our practices adhere to applicable data protection laws and industry standards to ensure a secure and trustworthy experience.
          </p>
          
          <div class="xl:mb-2 sm:mb-2 mt-6 mb-2">
            <h3 class="xl:text-2xl text-xl text-white uppercase font-bold leading-8">
              Data Collection
            </h3>
          </div>
          <p>
            We collect personal data to provide and enhance our services. This may include information you provide directly, such as name, email address, and payment information when creating an account, subscribing to our services, or participating in events. Additionally, we gather data from your interactions with our website or app, including device information, usage patterns, and preferences, using cookies and similar tracking technologies.
          </p>
  
          <div class="xl:mb-2 sm:mb-2 mt-6 mb-2">
            <h3 class="xl:text-2xl text-xl text-white uppercase font-bold leading-8">
              Data Usage
            </h3>
          </div>
          <p>
            The data we collect serves to improve your experience, optimize our services, and tailor content to suit user preferences. We may use your information to send updates, communicate important notifications, conduct research, and manage user accounts. Additionally, data analytics help us understand user behavior, enabling us to make informed improvements to our offerings and ensure an engaging, personalized experience for all users.
          </p>
  
          <div class="xl:mb-2 sm:mb-2 mt-6 mb-2">
            <h3 class="xl:text-2xl text-xl text-white uppercase font-bold leading-8">
              Data Sharing
            </h3>
          </div>
          <p>
            We do not share personal information with third parties without explicit consent, except in specific circumstances where required by law, such as legal investigations or regulatory requirements. In some cases, we may share anonymized data with partners to enhance our services, ensuring that no personally identifiable information is disclosed.
          </p>
  
          <div class="xl:mb-2 sm:mb-2 mt-6 mb-2">
            <h3 class="xl:text-2xl text-xl text-white uppercase font-bold leading-8">
              Data Security
            </h3>
          </div>
          <p>
            We are committed to safeguarding your information. Our security measures include encryption, regular system audits, and secure data storage. We employ robust protocols to protect data against unauthorized access, alteration, and misuse. However, while we strive to ensure data security, it is important to understand that no method of transmission or storage is completely infallible, and we encourage users to take appropriate precautions as well.
          </p>
          
          <div class="xl:mb-2 sm:mb-2 mt-6 mb-2">
            <h3 class="xl:text-2xl text-xl text-white uppercase font-bold leading-8">
              User Rights
            </h3>
          </div>
          <p>
            Users have the right to access, correct, or delete their personal information, subject to applicable laws and regulations. You may also choose to limit the use of certain data or withdraw consent where processing relies on it. To exercise these rights, please contact our support team. We will endeavor to respond promptly and provide the necessary support.
          </p>

          <div class="xl:mb-2 sm:mb-2 mt-6 mb-2">
            <h3 class="xl:text-2xl text-xl text-white uppercase font-bold leading-8">
              Policy Updates
            </h3>
          </div>
          <p>
            Our privacy policy may be updated periodically to reflect changes in laws, regulations, or our practices. We will notify users of significant updates and encourage regular review of this policy to remain informed. Your continued use of our services constitutes acceptance of the latest terms.
          </p>
        </div>
      </div>
    </div>
    <!-- Privacy Policy Section End -->
  </template>
  
  <script>
  export default {
    name: 'PrivacyPolicy',
  };
  </script>
  
  <style scoped>
  .privacy_policy_title h5 {
    font-size: 1.25rem;
  }
  
  .privacy_policy_desc p {
    font-size: 1rem;
    line-height: 1.6;
    color: #d1d5db;
  }
  
  .privacy_policy_desc h3 {
    font-size: 1.125rem;
    color: #ffffff;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  
  .container {
    padding: 2rem;
  }
  
  @media (min-width: 1024px) {
    .container {
      max-width: 900px;
    }
  }
  
  .text-primary {
    color: #0d6efd;
  }
  </style>
