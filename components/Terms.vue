<template>
    <!-- Terms of Use Section Start -->
    <div class="container flex items-center space-x-4 flex-col lg:flex-row">
        <div class="w-full mb-10 lg:mb-0">
            <div class="terms_title lg:mb-6 mb-4">
                <h5
                    class="text-primary text-xl uppercase font-bold pl-24 lg:mb-6 mb-4 relative before:absolute before:content-[''] before:left-0 before:top-1/2 before:-translate-y-1/2 before:transform before:h-1 before:bg-primary before:w-16"
                >
                    Terms of Use
                </h5>
            </div>
            <div class="terms_desc mb-10">
                <p>
                    Please review these Terms of Use carefully, as they set forth the legally binding terms governing your access to and use of our services. By accessing our services, you agree to comply with these terms.
                </p>
                
                <div class="xl:mb-2 sm:mb-2 mt-6 mb-2">
                    <h3 class="xl:text-2xl text-xl text-white uppercase font-bold leading-8">
                        1. User Conduct
                    </h3>
                </div>
                <ul class="list-disc ml-6 mb-4">
                    <li>You must be at least 13 years of age to use our services, or the age of legal majority in your jurisdiction if higher.</li>
                    <li>Your use of our services should be for legitimate, lawful purposes only, and you agree not to engage in any behavior that may harm, harass, or defraud other users or third parties.</li>
                    <li>Users are prohibited from posting or sharing any content that is abusive, harassing, defamatory, discriminatory, or otherwise violates the rights of others. This includes, but is not limited to, content that promotes hate speech, violence, or discrimination based on race, gender, religion, or sexual orientation.</li>
                </ul>

                <div class="xl:mb-2 sm:mb-2 mt-6 mb-2">
                    <h3 class="xl:text-2xl text-xl text-white uppercase font-bold leading-8">
                        2. Content
                    </h3>
                </div>
                <ul class="list-disc ml-6 mb-4">
                    <li>You retain full ownership of the content you create and share on our platform, such as images, text, or any other submissions, and are responsible for ensuring it complies with all applicable laws.</li>
                    <li>By posting content, you grant us a worldwide, non-exclusive license to use, display, and distribute your content solely in connection with providing and promoting our services. This license does not affect your ownership of the content.</li>
                    <li>We reserve the right to review, edit, or remove any content that, in our judgment, violates these terms, infringes on the rights of others, or breaches our community guidelines.</li>
                </ul>

                <div class="xl:mb-2 sm:mb-2 mt-6 mb-2">
                    <h3 class="xl:text-2xl text-xl text-white uppercase font-bold leading-8">
                        3. Intellectual Property
                    </h3>
                </div>
                <ul class="list-disc ml-6 mb-4">
                    <li>Our services and all related content, including trademarks, logos, and branding, are the exclusive property of our company. You may not use, reproduce, or distribute any of our intellectual property without our express written permission.</li>
                    <li>You agree not to engage in any activity that infringes on the intellectual property rights of others, including unauthorized use or reproduction of content owned by third parties.</li>
                </ul>

                <div class="xl:mb-2 sm:mb-2 mt-6 mb-2">
                    <h3 class="xl:text-2xl text-xl text-white uppercase font-bold leading-8">
                        4. Disclaimers
                    </h3>
                </div>
                <ul class="list-disc ml-6 mb-4">
                    <li>Our services are provided "as is" and without warranties of any kind, express or implied. We do not guarantee the accuracy, reliability, or availability of our services at all times.</li>
                    <li>We are not liable for any damages, losses, or claims resulting from your use of or reliance on our services. This limitation of liability applies to all types of damages, including indirect, consequential, or incidental damages.</li>
                    <li>We reserve the right to modify, suspend, or terminate any part of our services at our discretion and without prior notice to you. These actions may be taken for reasons including maintenance, legal compliance, or changes in business strategy.</li>
                </ul>

                <div class="xl:mb-2 sm:mb-2 mt-6 mb-2">
                    <h3 class="xl:text-2xl text-xl text-white uppercase font-bold leading-8">
                        5. Governing Law
                    </h3>
                </div>
                <ul class="list-disc ml-6 mb-4">
                  <li>These terms are governed by the laws of the jurisdiction in which you reside, without regard to its conflict of law provisions. Any disputes arising from these terms or your use of our services will be resolved in the appropriate courts within that jurisdiction.</li>
               
                  <li> For additional information regarding these Terms of Use or if you have any specific questions, please feel free to contact our support team.</li> 
            </ul>
            </div>
        </div>
    </div>
    <!-- Terms of Use Section End -->
</template>

<script>
export default {
    name: 'Terms',
};
</script>

<style scoped>
.terms_title h5 {
    font-size: 1.25rem;
}

.terms_desc p {
    font-size: 1rem;
    line-height: 1.6;
    color: #d1d5db;
}

.terms_desc h3 {
    font-size: 1.125rem;
    color: #ffffff;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
}

.terms_desc ul {
    margin-left: 20px;
    list-style-type: disc;
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
