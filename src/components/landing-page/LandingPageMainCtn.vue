<script setup>
import SideNavMainCtn from '@/components/side-nav/SideNavMainCtn.vue';
import MainTopNav from './MainTopNav.vue';
import LandingPageMainSectionMainCtn from './LandingPageMainSectionMainCtn.vue';
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
</style>

<template>
    <section class="landing-page-main-ctn-main-ctn">
        <div class="landing-page-main-ctn-mini-ctn">
            <SideNavMainCtn></SideNavMainCtn>
            <main>
                <MainTopNav></MainTopNav>
                <LandingPageMainSectionMainCtn></LandingPageMainSectionMainCtn>
            </main>
        </div>
    </section>
</template>