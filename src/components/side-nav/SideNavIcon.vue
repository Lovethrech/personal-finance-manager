<script setup>
import {defineProps} from "vue";

const {name, icon, link}=defineProps(['name','icon', 'link']);
</script>

<style scoped>
.link{
    display:flex;
    flex-direction:row;
    gap:20px;
}
.side-nav-icon{

}
.side-nav-icon-desc-ctn{
    color:white;
}
</style>

<template>
    <RouterLink :to="link" class="link">
        <span class="side-nav-icon" v-html="icon"></span>
        <span class="side-nav-icon-desc-ctn">
            <p class="side-nav-icon-desc">
                {{name}}
            </p>
        </span>
        <!-- #93200B -->
        <!-- #C93005 -->
    </RouterLink>
</template>