<template>

    <div class="bg-cover bg-gray-800" style="background-image:url(/images/bg/body-bg2.webp);">
        
        <HeaderSection/>

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
        
        <Breadcrumb :BreadcrumbTitle="BreadcrumbTitle" :BreadcrumbSubTitle="BreadcrumbSubTitle"/>

        <div class="container">
            <div class="grid grid-cols-1">
                <div class="team-mid-details-area flex flex-col md:flex-row align-center">
                    <div class="team-top-area mt-5 min-w-sm mx-auto text-center">
                        <img :src="battleData.battleimage" alt="">
                        <h2 class="mt-5 font-metal text-[55px] text-shadow">{{battleData.battlename}}</h2>
                        <div class="team-socials-area mt-8">
                            <span class="ml-3 font-bold">Follow:</span>
                            <a href="https://www.facebook.com" class="ml-2"><i class="icofont-facebook"></i></a>
                            <a href="https://dribbble.com" class="ml-2"><i class="icofont-dribbble"></i></a>
                            <a href="https://www.youtube.com" class="ml-2"><i class="icofont-youtube-play"></i></a>
                            <a href="https://www.twitter.com" class="ml-2"><i class="icofont-twitter"></i></a>
                        </div>
                    </div>
                    <div class="about-the-team-area mt-5 md:ml-15">
                        <h3 class="text-primary uppercase font-bold text-[25px]">About Team</h3>
                        <div class="about-description mt-5 max-w-3xl"><p class="leading-7">Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Sapiente, consequatur quae pariatur aut deserunt nemo provident, possimus iste dolor dicta sint porro ut. Eveniet libero voluptatum architecto adipisicing elit. Sapiente, consequatur quae pariatur aut deserunt nemo provident, possimus iste dolor dicta sint porro ut. Eveniet libero voluptatum architecto ratione corrupti cupiditate!</p></div>
                        <div class="play-game-history mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 p-5 rounded-md bg-secondary-90">
                            <div class="text-center bg-secondary-80 p-4 rounded-md">
                                <h4 class="block font-semibold">10</h4>
                                <h5 class="mt-2">Game Play</h5>
                            </div>
                            <div class="text-center bg-secondary-80 p-5 rounded-md">
                                <h4 class="block font-semibold">04</h4>
                                <h5 class="mt-2">Game Wins</h5>
                            </div>
                            <div class="text-center bg-secondary-80 p-5 rounded-md">
                                <h4 class="block font-semibold">06</h4>
                                <h5 class="mt-2">Game Loses</h5>
                            </div>
                            <div class="text-center bg-secondary-80 p-5 rounded-md">
                                <h4 class="block font-semibold">00</h4>
                                <h5 class="mt-2">Game Draws</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-the-team-area mt-16">
                    <h2 class="text-primary uppercase font-bold text-[25px] mb-8">Team Player's</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                        <div class="text-center" v-for="(member, index) in battleData.teamplayers" :key="index">
                            <div class="block overflow-hidden">
                                <img class="w-full" :src="member.teamImage" alt="Team-image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <ContactBanner :paddingTop="paddingTop"/>

        <Footer/>

    </div>

</template>

<script>
    import battleData from '@/data/battleteamdata.json'
export default {
    components: {
        HeaderSection: () => import('@/components/HeaderSection'),
        OffCanvasMobileMenu: () => import('@/components/Header/OffCanvasMobileMenu'),
        Breadcrumb: () => import('@/components/Breadcrumb'),
        ContactBanner: () => import('@/components/ContactBanner'),
        Footer: () => import('@/components/Footer')
    },
    data() {
        return {
            navOpen: false,
            BreadcrumbTitle: "Single Battle",
            BreadcrumbSubTitle: "Single Battle",
            paddingTop: "pt-32",
            battleData,
            slug: this.$route.params.slug
        }
    },
    mounted () {
        this.battleData = battleData.find(member => this.slugify(member.battlename) == this.$route.params.slug);
    },
    methods: {
        slugify(text) {
            return text
            .toString()
            .toLowerCase()
            .replace(/\s+/g, "-") // Replace spaces with -
            .replace(/[^\w-]+/g, "") // Remove all non-word chars
            .replace(/--+/g, "-") // Replace multiple - with single -
            .replace(/^-+/, "") // Trim - from start of text
            .replace(/-+$/, ""); // Trim - from end of text
        }
    }
}
</script>