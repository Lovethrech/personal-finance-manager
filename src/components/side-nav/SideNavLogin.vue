<script setup>
import {defineProps} from "vue";

const {name, icon, link}=defineProps(['name','icon', 'link']);
</script>

<style scoped>

</style>

<template>
    <div class="side-nav-login-main-ctn">
        <RouterLink :to="link" class="link">
            <div class="side-nav-login-mini-ctn">
                <div class="side-nav-login-icon-ctn" v-html="icon"></div>
                <p class="side-nav-login-icon-ctn">{{name}}</p>
            </div>
        </RouterLink>
    </div>
</template>