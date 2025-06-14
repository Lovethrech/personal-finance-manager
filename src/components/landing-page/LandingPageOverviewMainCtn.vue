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
    background-color: #000000;
    width:90%;
    margin: 10px 3vw;
    padding:20px 30px;
    border:1px solid #000;
    box-shadow: inset 2px 3px 10px 5px #443a3abb,
        inset -2px -2px 10px 5px #443a3abb;
    border-radius: 50px;
    overflow-x: hidden;
}
.landing-page-overview-mini-ctn{
    width:100%;
}
.page-title{
    color:#dad0ce;
    font-size: 26px;
    text-transform: uppercase;
    font-weight:800;
}
@media screen and (max-width:1270px) and (min-width:701px){
    .landing-page-overview-main-ctn{
        width:180vw;
    }
}
@media screen and (max-width:700px) {
    .landing-page-overview-main-ctn{
        width:280vw;
    }
    .page-title{
        font-size:16px;
    }
}
</style>