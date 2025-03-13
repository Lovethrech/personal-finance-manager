<script setup>
import SideNavIcons from "@/data/side-nav.json";
</script>

<template>
    <RouterLink to="/" class="link">
        <span class="side-nav-icon"></span>
        <span class="side-nav-icon-desc" :v-html="SideNavIcons[1].name"></span>
    </RouterLink>
</template>