<script setup>
import {defineProps} from "vue";

const {name, icon, link}=defineProps(['name','icon', 'link']);
</script>

<style scoped>
.side-nav-main-ctn-mini-ctn{
    
}
</style>

<template>
    <div class="side-nav-user-main-ctn">
        <RouterLink :to="link" class="link">
            <div class="side-nav-user-mini-ctn">
                <div class="side-nav-user-mini-ctn-icon-ctn" :v-html="icon"></div>
                <p class="side-nav-user-mini-ctn-user-desc">
                    {{name}}
                </p>
            </div>
        </RouterLink>
    </div>
</template>