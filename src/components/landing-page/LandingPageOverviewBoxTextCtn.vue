<script setup>
import { defineProps } from 'vue';

const {boxName, boxNo}=defineProps(['boxName', 'boxNo']);
</script>

<template>
    <div class="landing-page-overview-box-text-ctn">
        <p class="number">{{ boxNo }}</p>
        <p class="name">{{ boxName }}</p>
    </div>
</template>

<style scoped>
.landing-page-overview-box-text-ctn{
    color:#fff;
    width: 50%;
    margin: auto 0;
}
.landing-page-overview-box-text-ctn .number{
    font-size: 20px;
    font-weight:300;
}
.landing-page-overview-box-text-ctn .name{
    font-size:16px;
    font-weight:500;
}

@media screen and (max-width: 750px) {
    .landing-page-overview-box-text-ctn{
        width:70%;
    }
    .landing-page-overview-box-text-ctn .number{
        font-size: 16px;
    }
    .landing-page-overview-box-text-ctn .name{
        font-size:12px;
    }
}
</style>