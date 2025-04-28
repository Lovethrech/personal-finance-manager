<script setup>
import dashboardOverviewData from '@/data/dashboard-overview-data.json';
import LandingPageOverviewBox from './LandingPageOverviewBox.vue';
</script>

<template>
    <div class="landing-page-overview-box-main-ctn">
        <div class="landing-page-overview-box-mini-ctn">
            <LandingPageOverviewBox
                :boxIcon="dashboardOverviewData.boxIcon"
                :boxName="dashboardOverviewData.boxName"
                :boxNo="dashboardOverviewData.boxNo"
            >
            </LandingPageOverviewBox>
        </div>
    </div>
</template>