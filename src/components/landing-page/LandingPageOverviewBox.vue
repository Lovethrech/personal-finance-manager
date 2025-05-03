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
    padding:20px 0;
    width:350px;
    place-items:center;
    background-color: #000;
    border:2px solid #93200B;
    border-radius: 20px;
}
.landing-page-mini-overview-box{
    width:100%;
    flex-direction: row;
    justify-content: space-between;
}
@media screen and (max-width:1299px){
    .landing-page-overview-box{
        width:4000px;
    }
}
</style>