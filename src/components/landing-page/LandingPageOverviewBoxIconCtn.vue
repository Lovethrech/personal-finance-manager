<script setup>
import { defineProps } from 'vue';

const {boxIcon}=defineProps(['boxIcon']);
</script>

<template>
    <div class="landing-page-overview-box-icon-ctn">
        <div class="landing-page-overview-box-icon-ctn-main-ctn"></div>
    </div>
</template>

<style scoped>
.landing-page-overview-box-icon-ctn{
    width:50%;
    height:50px;
}
.landing-page-overview-box-icon-ctn-main-ctn{
    background-color: #ffffffe8;
}
</style>