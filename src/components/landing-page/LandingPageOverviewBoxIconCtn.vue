<script setup>
import { defineProps } from 'vue';

const {boxIcon}=defineProps(['boxIcon']);
</script>

<template>
    <div class="landing-page-overview-box-icon-ctn">
        <div class="landing-page-overview-box-icon-ctn-main-ctn" v-html="boxIcon"></div>
<!-- @media screen and (max-width:750px)  and (min-width:551px){
    .landing-page-overview-box-icon-ctn-main-ctn{
        width:50px;
        height:100%;
        font-size:26px;
    }
    .landing-page-overview-box-icon-ctn{
        width:50%;
        height:40px;
    }
}
@media screen and (max-width: 550px) {
    .landing-page-overview-box-icon-ctn-main-ctn{
        width:30px;
        height:100%;
        font-size:20px;
    }
    .landing-page-overview-box-icon-ctn{
        width:30%;
        height:30px;
    }
} -->

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
    font-size:30px;
    border-radius:50%;
}


</style>