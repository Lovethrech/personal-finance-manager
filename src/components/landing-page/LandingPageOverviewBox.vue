<script setup>
import LandingPageOverviewBoxIconCtn from './LandingPageOverviewBoxIconCtn.vue';
import LandingPageOverviewBoxTextCtn from './LandingPageOverviewBoxTextCtn.vue';
</script>

<template>
    <div class="landing-page-overview-box">
        <LandingPageOverviewBoxIconCtn></LandingPageOverviewBoxIconCtn>
        <LandingPageOverviewBoxTextCtn></LandingPageOverviewBoxTextCtn>
    </div>
</template>

<style scoped>
.landing-page-overview-box{
    background-color: #000;
    width:200px;
    height:90px;
    border:2px solid #93200B;
    border-radius: 20px;
}
</style>