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
    padding:20px 10px;
    width:350px;
    place-items:center;
    background-color: #93200B;
    border:1px solid #93200B;
    box-shadow: inset 2px 3px 10px 5px #5e261c,
        inset -2px -2px 10px 5px #443a3abb;
    border-radius: 50px;
}
.landing-page-overview-box:hover{
    cursor: pointer;
    transform: scale(0.98);
    transition: all 1.6s;
    border:1px solid hsl(9, 86%, 49%);
}
.landing-page-mini-overview-box{
    width:100%;
    flex-direction: row;
    justify-content: space-between;
}
@media screen and (max-width: 1120px){
    .landing-page-overview-box{
        width: 45%;
        padding:4px 2px;
    }
}
@media screen and (max-width: 550px){
    .landing-page-overview-box{
        width: 90%;
    }
}
</style>