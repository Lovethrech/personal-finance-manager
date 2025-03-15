<script setup>
import {defineProps} from "vue";

const {name, icon, link}=defineProps(['name','icon', 'link']);
</script>

<style scoped>
.side-nav-user-main-ctn{
    background-color:#000000;
    width:100%;
    height:220px;
}
.side-nav-main-ctn-mini-ctn{
    width:100%;
    height:70%;
}
.side-nav-user-mini-ctn-icon-ctn{
    font-size: 30px;
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