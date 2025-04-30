<script setup>
import { defineProps } from 'vue';

const {boxName, boxNo}=defineProps(['boxName', 'boxNo']);
</script>

<template>
    <div class="landing-page-overview-box-text-ctn">
        <p class="number">{{ boxNo }}</p>
        <p class="name">{{ boxName }}</p>
    </div>
</template>