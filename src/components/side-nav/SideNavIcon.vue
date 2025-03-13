<script setup>
import SideNavIcons from "@/data/side-nav.json";
console.log()
</script>

<style scoped>
.side-nav-icon{

}
.side-nav-icon-desc{
    color:white;
}
</style>

<template>
    <RouterLink to="/" class="link">
        <span class="side-nav-icon" :v-html="SideNavIcons[1].icon"></span>
        <span class="side-nav-icon-desc" :v-html="SideNavIcons[1].name"></span>
        <!-- #93200B -->
        <!-- #C93005 -->
    </RouterLink>
</template>