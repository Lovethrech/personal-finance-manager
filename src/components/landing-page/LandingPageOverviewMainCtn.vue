<script setup>
import LandingPageOverviewBoxMainCtn from './LandingPageOverviewBoxMainCtn.vue';
</script>

<template>
    <section class="landing-page-overview-main-ctn">
        <div class="landing-page-overview-mini-ctn">
            <h3 class="page-title">Overview</h3>
            <br/>
            <LandingPageOverviewBoxMainCtn></LandingPageOverviewBoxMainCtn>
        </div>
    </section>
    
</template>

<style scoped>
.landing-page-overview-main-ctn{
    background-color: #161616;
    width:90%;
    height:200px;
    margin: 10px 3vw;
    padding:20px;
    overflow-x: hidden;
}
.landing-page-overview-mini-ctn{
    width:100%;
}
.page-title{
    color:#fff;
    font-size: 26px;
    text-transform: uppercase;
    font-weight:800;
}
@media screen and (max-width:1270px){
    .landing-page-overview-main-ctn{
        width:180vw;
    }
}
@media screen and (max-width:700px) {
    .page-title{
        font-size:20px;
    }
}
</style>