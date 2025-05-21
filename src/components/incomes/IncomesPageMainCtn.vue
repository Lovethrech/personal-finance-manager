<script setup>
import SideNavMainCtn from '@/components/side-nav/SideNavMainCtn.vue';
import MainTopNav from '@/components/landing-page/MainTopNav.vue';
</script>

<style scoped>
.incomes-page-main-ctn-main-ctn, .incomes-page-main-ctn-mini-ctn{
    width:100%;
    height:100%;
}
.incomes-page-main-ctn-mini-ctn{
    display:flex;
    flex-direction: row;
}
main{
    width:88%;
}
@media screen and (max-width:1060px) {
    main{
        width:80vw;
    }
}
</style>

<template>
    <section class="incomes-page-main-ctn-main-ctn">
        <div class="incomes-page-main-ctn-mini-ctn">
            <SideNavMainCtn></SideNavMainCtn>
            <main>
                <MainTopNav></MainTopNav>
            </main>
        </div>
    </section>
</template>