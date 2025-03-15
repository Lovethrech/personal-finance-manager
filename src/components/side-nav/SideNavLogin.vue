<script setup>
import {defineProps} from "vue";

const {name, icon, link}=defineProps(['name','icon', 'link']);
</script>

<style scoped>
.side-nav-login-main-ctn{
    width: 100%;
    display:flex;
    justify-content: center;
}
.side-nav-login-mini-ctn{
    display:flex;
    flex-direction:row;
    color: #9e9998;
}
.side-nav-login-icon-ctn{
    font-size:20px;
}
.side-nav-login-icon-desc{
    text-transform:uppercase;
    font-size:20px;
}
</style>

<template>
    <div class="side-nav-login-main-ctn">
        <RouterLink :to="link" class="link">
            <div class="side-nav-login-mini-ctn">
                <div class="side-nav-login-icon-ctn" v-html="icon"></div>
                <p class="side-nav-login-icon-desc">{{name}}</p>
            </div>
        </RouterLink>
    </div>
</template>