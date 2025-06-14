<script setup>
import dashboardOverviewData from '@/data/dashboard-overview-data.json';
import LandingPageOverviewBox from './LandingPageOverviewBox.vue';
</script>

<template>
    <div class="landing-page-overview-box-main-ctn">
        <div class="landing-page-overview-box-mini-ctn">
            <LandingPageOverviewBox
                :boxIcon="dashboardOverviewData[0].boxIcon"
                :boxName="dashboardOverviewData[0].boxName"
                :boxNo="dashboardOverviewData[0].boxNo"
            >
            </LandingPageOverviewBox>
            <LandingPageOverviewBox
                :boxIcon="dashboardOverviewData[1].boxIcon"
                :boxName="dashboardOverviewData[1].boxName"
                :boxNo="dashboardOverviewData[1].boxNo"
            >
            </LandingPageOverviewBox>
            <LandingPageOverviewBox
                :boxIcon="dashboardOverviewData[2].boxIcon"
                :boxName="dashboardOverviewData[2].boxName"
                :boxNo="dashboardOverviewData[2].boxNo"
            >
            </LandingPageOverviewBox>
            <LandingPageOverviewBox
                :boxIcon="dashboardOverviewData[3].boxIcon"
                :boxName="dashboardOverviewData[3].boxName"
                :boxNo="dashboardOverviewData[3].boxNo"
            >
            </LandingPageOverviewBox>
            <LandingPageOverviewBox
                :boxIcon="dashboardOverviewData[4].boxIcon"
                :boxName="dashboardOverviewData[4].boxName"
                :boxNo="dashboardOverviewData[4].boxNo"
            >
            </LandingPageOverviewBox>
        </div>
    </div>
</template>

<style scoped>
.landing-page-overview-box-main-ctn{

}
.landing-page-overview-box-mini-ctn{
    display:flex;
    flex-direction:row;
    gap:20px;
}

@media screen and (max-width:970px){
    .landing-page-overview-box-mini-ctn{
        flex-wrap:wrap;
    }
    .landing-page-overview-box-mini-ctn:nth-child(5){
        display:none;
    }
}
</style>