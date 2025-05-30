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
    background-color: #000;
    border:1px solid #93200B;
    border-radius: 20px;
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

@media screen and (max-width:1150px){
    
}
@media screen and (max-width: 700px) {
    .landing-page-overview-box{
        width:170px;
    }
}
</style>