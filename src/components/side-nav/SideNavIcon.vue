<script setup>
import SideNavIcons from "@/data/side-nav.json";
</script>

<style scoped>

</style>

<template>
    <RouterLink to="/" class="link">
        <span class="side-nav-icon"></span>
        <span class="side-nav-icon-desc" :v-html="SideNavIcons[1].name"></span>
        <!-- #93200B -->
        <!-- #C93005 -->
    </RouterLink>
</template>