<script setup>
import { defineProps } from 'vue';
import LandingPageOverviewBoxIconCtn from './LandingPageOverviewBoxIconCtn.vue';
import LandingPageOverviewBoxTextCtn from './LandingPageOverviewBoxTextCtn.vue';

const {boxIcon, boxName, boxNo}=defineProps(['boxIcon', 'boxName', 'boxNo']);
</script>

<template>
    <div class="landing-page-overview-box">
        <div class="landing-page-mini-overview-box">
            <LandingPageOverviewBoxIconCtn :boxIcon="boxIcon"></LandingPageOverviewBoxIconCtn>
            <LandingPageOverviewBoxTextCtn :boxNo="boxNo" :boxName="boxName"></LandingPageOverviewBoxTextCtn>
        </div>
    </div>
</template>

<style scoped>
.landing-page-overview-box, .landing-page-mini-overview-box{
    display:flex;
}
.landing-page-overview-box{
    width:300px;
    place-items:center;
    justify-content:center;
    background-color: #000;
    border:2px solid #93200B;
    border-radius: 20px;
}
.landing-page-mini-overview-box{
    flex-direction: row;
}
</style>