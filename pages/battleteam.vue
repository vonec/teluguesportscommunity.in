<template>
  <div class="bg-cover bg-gray-800" style="background-image:url(/images/bg/body-bg2.webp);">
    
    <HeaderSection/>

    <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
    
    <Breadcrumb :BreadcrumbTitle="BreadcrumbTitle" :BreadcrumbSubTitle="BreadcrumbSubTitle"/>

    <div class="container">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <n-link :to="`/battle/${slugify(member.battlename)}`" class="text-center py-14 px-8 rounded-2xl border-2 border-solid border-light-blue-500 bg-secondary-100" v-for="(member, index) in battleData.slice(0, 6)" :key="index">
                <div class="block overflow-hidden">
                    <img :src="member.battleimage" alt="Team-image">
                </div>
                <h3 class="font-semibold text-[25px] mt-10">{{member.battlename}}</h3>
            </n-link>
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
            BreadcrumbTitle: "All Battle Teams",
            BreadcrumbSubTitle: "Battle Teams",
            paddingTop: "pt-32",
            battleData
        }
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