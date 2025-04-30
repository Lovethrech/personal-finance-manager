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
.landing-page-overview-box{
    display:flex;
    flex-direction: row;
    background-color: #000;
    width:200px;
    height:90px;
    border:2px solid #93200B;
    border-radius: 20px;
}
</style>