<script setup>
import {defineProps} from "vue";
import SideNavIcons from "@/data/side-nav.json";

const {"name", "icon", "link"}=defineProps(['name','icon', 'link']);
</script>

<style scoped>
.side-nav-icon{

}
.side-nav-icon-desc-ctn{
    color:white;
}
</style>

<template>
    <RouterLink :to="SideNavIcons[1].link" class="link">
        <span class="side-nav-icon" :v-html="SideNavIcons[1].icon"></span>
        <span class="side-nav-icon-desc-ctn">
            <p class="side-nav-icon-desc">
                {{SideNavIcons[1].name}}
            </p>
        </span>
        <!-- #93200B -->
        <!-- #C93005 -->
    </RouterLink>
</template>