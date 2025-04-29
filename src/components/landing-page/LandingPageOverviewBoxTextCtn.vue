<script setup>
import { defineProps } from 'vue';

const {boxName, boxNo}=defineProps(['boxName', 'boxNo']);
</script>

<template>
    <div class="landing-page-overview-box-text-ctn">
        <p class="number"></p>
        <p class="name"></p>
    </div>
</template>