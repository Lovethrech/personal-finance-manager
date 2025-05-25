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
                        <!--  -->
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

<style scoped>
.main-top-nav-main-ctn{
    padding:10px 3vw;
    width:100%;
}
.main-top-nav-mini-ctn{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
.user-welcome-msg{
    color:#fff;
    text-transform: capitalize;
}
.main-top-nav-main-nav-ctn{
    color:#fff;
    display:flex;
    flex-direction: row;
    gap:20px;
}
.search-box-ctn{
    width:400px;
    border-radius:100px;
    display:flex;
    flex-direction: row;
}
.search-box-ctn input{
    background-color: ;
    width:100%;
    border-radius:100px 0 0 100px;
    padding:5px 10px;
    font-size:16px;
}
.search-icon-ctn{
    background-color: #93200B;
    color:#fff;
    padding: 6px 20px;
    border-radius: 0 100px 100px 0;
}
.notication-content-ctn{
    display:flex;
    flex-direction:row;
}
.notification-icon-ctn{

}
.notification-red-dot{
    width:5px;
    height:5px;
    background-color: red;
    border-radius:50%;
    margin-left:-2px
}
.search-icon-ctn-general, .notication-content-ctn{
    margin:auto 0;
    font-size:20px;
}
@media screen and (max-width:870px) {
    .search-box-ctn{
        width:70%;
        position:absolute;
        top:35px;
        left:170px;
        margin-right:20px;
    }
}
@media screen and (max-width:700px) {
    .search-box-ctn{
        width:80%;
        right:0;
        left:50px;
    }
    .user-welcome-msg, .search-icon-ctn, .notification-icon-ctn{
        font-size: 14px;
    }
}
</style>