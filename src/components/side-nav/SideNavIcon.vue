<script setup>
import {defineProps} from "vue";

const {name, icon, link}=defineProps(['name','icon', 'link']);
</script>

<style scoped>
.link{
    display:flex;
    flex-direction:row;
    gap:10px;
    padding:20px 10px;
}
.side-nav-icon{
    font-size: 20px;
}
.side-nav-icon-desc-ctn{
    color:white;
}
.side-nav-icon-desc{
    text-transform: capitalize;
}
@media screen and (max-width:600px) {
    .side-nav-icon-desc{
        display:none;
    }
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