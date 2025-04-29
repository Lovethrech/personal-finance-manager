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
        </div>
    </div>
</template>