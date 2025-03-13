<script setup>
import {defineProps} from "vue";

const {name, icon, link}=defineProps(['name','icon', 'link']);
</script>


<template>
    <div class="side-nav-user-main-ctn">
        <RouterLink :to="link">
            <div class="side-nav-user-mini-ctn">
                <div class="side-nav-user-mini-ctn-icon-ctn">

                </div>
                <p class="side-nav-user-mini-ctn-user-desc">
                    {{name}}
                </p>
            </div>
        </RouterLink>
    </div>
</template>