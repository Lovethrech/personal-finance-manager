<script setup>
import { defineProps } from 'vue';

const {boxIcon}=defineProps(['boxIcon']);
</script>

<template>
    <div class="landing-page-overview-box-icon-ctn">
        <div class="landing-page-overview-box-icon-ctn-main-ctn" v-html="boxIcon"></div>
    </div>
</template>

<style scoped>
.landing-page-overview-box-icon-ctn, .landing-page-overview-box-icon-ctn-main-ctn{
    display:flex;
    place-items: center;
    justify-content:center;
}
.landing-page-overview-box-icon-ctn{
    width:50%;
    height:50px;
}
.landing-page-overview-box-icon-ctn-main-ctn{
    width:70px;
    height:100%;
    background-color: transparent;
    color:#fff;
    font-size:3vh;
    border-radius:50%;
}
</style>