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
    width:80vw;
    height:200px;
    margin: 10px 3vw;
    padding:20px;
}
.landing-page-overview-mini-ctn{

}
.page-title{
    color:#fff;
    font-size: 26px;
    text-transform: uppercase;
    font-weight:800;
}
@media screen and (max-width:1299px){
    .landing-page-overview-main-ctn{
        width:100%;
    }
}
</style>