<script setup>
import dashboardOverviewData from '@/data/dashboard-overview-data.json';
import LandingPageOverviewBox from './LandingPageOverviewBox.vue';
</script>

<template>
    <div class="landing-page-overview-box-main-ctn">
        <div class="landing-page-overview-box-mini-ctn">
            <LandingPageOverviewBox
                class="landing-page-over"
                :boxIcon="dashboardOverviewData[0].boxIcon"
                :boxName="dashboardOverviewData[0].boxName"
                :boxNo="dashboardOverviewData[0].boxNo"
            >
            </LandingPageOverviewBox>
            <LandingPageOverviewBox
                class="landing-page-over"
                :boxIcon="dashboardOverviewData[1].boxIcon"
                :boxName="dashboardOverviewData[1].boxName"
                :boxNo="dashboardOverviewData[1].boxNo"
            >
            </LandingPageOverviewBox>
            <LandingPageOverviewBox
                class="landing-page-over"
                :boxIcon="dashboardOverviewData[2].boxIcon"
                :boxName="dashboardOverviewData[2].boxName"
                :boxNo="dashboardOverviewData[2].boxNo"
            >
            </LandingPageOverviewBox>
            <LandingPageOverviewBox
                class="landing-page-over"
                :boxIcon="dashboardOverviewData[3].boxIcon"
                :boxName="dashboardOverviewData[3].boxName"
                :boxNo="dashboardOverviewData[3].boxNo"
            >
            </LandingPageOverviewBox>
            <LandingPageOverviewBox
                class="landing-page-over"
                :boxIcon="dashboardOverviewData[4].boxIcon"
                :boxName="dashboardOverviewData[4].boxName"
                :boxNo="dashboardOverviewData[4].boxNo"
            >
            </LandingPageOverviewBox>
        </div>
    </div>
</template>

<style scoped>
.landing-page-overview-box-mini-ctn{
    display:flex;
    flex-direction:row;
    gap:20px;
}
@media screen and (max-width:1120px){
    .landing-page-overview-box-mini-ctn{
        flex-wrap:wrap;
        justify-content: center;
        place-items: center;
    }
    .landing-page-over:nth-child(5){
        display:none;
    }
}
@media screen and (max-width:1120px){
    .landing-page-over:nth-child(2), .landing-page-over:nth-child(3), .landing-page-over:nth-child(4){
        display:none;
    }
}
</style>