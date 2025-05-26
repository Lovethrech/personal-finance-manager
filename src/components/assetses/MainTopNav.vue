<script setup>
import {ref} from "vue";

const displaySearchBox=ref({display:"none", transition:"all 2s"});
const defaultSearchIcon=ref("<i class='bx bx-search' ></i>");

const viewSearchBox=()=>{
    if (defaultSearchIcon.value=== "<i class='bx bx-search' ></i>"){
        defaultSearchIcon.value="<i class='bx bx-search-alt' ></i>";
        displaySearchBox.value.display="flex";
    }
    else{
        defaultSearchIcon.value="<i class='bx bx-search' ></i>";
        displaySearchBox.value.display="none";
    }
}
</script>

<template>
    <section class="main-top-nav-main-ctn">
        <div class="main-top-nav-mini-ctn">
            <h1 class="user-welcome-msg">
                Assets are safe here
            </h1>
            <section class="main-top-nav-main-nav-ctn">
                <div class="search-box-ctn" :style="displaySearchBox">
                    <input type="text" class="search-box" placeholder="Search...">
                    <div class="search-icon-ctn">
                        <i class='bx bx-search' ></i>
                    </div>
                </div>
                <div class="search-icon-ctn-general" v-html="defaultSearchIcon" :onClick="viewSearchBox"></div>
                <div class="notication-content-ctn">
                    <div class="notification-icon-ctn">
                        <i class='bx bxs-bell' ></i>
                    </div>
                    <div class="notification-red-dot"></div>
                </div>
            </section>
        </div>
    </section>
</template>