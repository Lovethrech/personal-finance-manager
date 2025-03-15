<script setup>
import {defineProps} from "vue";

const {name, icon, link}=defineProps(['name','icon', 'link']);
</script>

<style scoped>
.side-nav-user-main-ctn{
    background-color:#000000;
    width:100%;
    height:220px;
    display:flex;
    justify-content: center;
}
.side-nav-main-ctn-mini-ctn{
    width:100%;
    height:100%;
    padding:10px 20px;
}
.side-nav-user-mini-ctn-icon-ctn{
    width:100%;
    display:flex;
    justify-content:center;
    place-items: center;
    font-size: 10vh;
    background-color:#000989;
    border-radius:20px;
}
</style>

<template>
    <div class="side-nav-user-main-ctn">
        <RouterLink :to="link" class="link">
            <div class="side-nav-user-mini-ctn">
                <div class="side-nav-user-mini-ctn-icon-ctn" v-html="icon"></div>
                <p class="side-nav-user-mini-ctn-user-desc">
                    {{name}}
                </p>
            </div>
        </RouterLink>
    </div>
</template>