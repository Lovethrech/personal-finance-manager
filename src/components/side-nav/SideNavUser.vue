<script setup>
import {defineProps} from "vue";

const {name, icon, link}=defineProps(['name','icon', 'link']);
</script>

<style scoped>
.side-nav-user-main-ctn{
    width:100%;
    height:220px;
    display:flex;
    justify-content: center;
}
.side-nav-main-ctn-mini-ctn{
    width:100%;
    height:100%;
    padding:10px;
}
.side-nav-user-mini-ctn-icon-ctn{
    background-color:#000000;
    width:100%;
    display:flex;
    justify-content:center;
    place-items: center;
    border-radius: 50%;
    font-size: 10vh;
}
.side-nav-user-mini-ctn-user-desc{
    text-align: center;
    text-transform:uppercase;
}
@media screen and (max-width:550px) {
    .side-nav-user-mini-ctn-user-desc{
        display:none;
    }
}
</style>

<template>
    <div class="side-nav-user-main-ctn">
        <RouterLink :to="link" class="link">
            <div class="side-nav-user-mini-ctn">
                <div class="side-nav-user-mini-ctn-icon-ctn" v-html="icon"></div>
                <br/>
                <p class="side-nav-user-mini-ctn-user-desc">
                    {{name}}
                </p>
            </div>
        </RouterLink>
    </div>
</template>