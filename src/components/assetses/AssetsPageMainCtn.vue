<script setup>
import SideNavMainCtn from '@/components/side-nav/SideNavMainCtn.vue';
import MainTopNav from '@/components/landing-page/MainTopNav.vue';
import LandingPageOverviewMainCtn from "@/components/landing-page/LandingPageOverviewMainCtn.vue";
</script>

<style scoped>
.landing-page-main-ctn-main-ctn, .landing-page-main-ctn-mini-ctn{
    width:100%;
    height:100%;
}
.landing-page-main-ctn-mini-ctn{
    display:flex;
    flex-direction: row;
}
main{
    width:88%;
}
@media screen and (max-width:1060px) {
    main{
        width:80vw;
    }
}
</style>

<template>
    <section class="landing-page-main-ctn-main-ctn">
        <div class="landing-page-main-ctn-mini-ctn">
            <SideNavMainCtn></SideNavMainCtn>
            <main>
                <MainTopNav></MainTopNav>
                <LandingPageOverviewMainCtn></LandingPageOverviewMainCtn>
            </main>
        </div>
    </section>
</template>