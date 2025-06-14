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
    font-size: 2vh;
    font-weight:300;
}
.landing-page-overview-box-text-ctn .name{
    font-size:1.6vh;
    font-weight:500;
}
</style>