<script setup>
import { useSideNavColorStore } from "@/stores/sideNavColor";

import SideNavIcons from "@/data/side-nav.json";
import SideNavIcon from '@/components/side-nav/SideNavIcon.vue';
import SideNavUser from "@/components/side-nav/SideNavUser.vue";
import SideNavLogin from "@/components/side-nav/SideNavLogin.vue";

const {dashboardActive, inventoryActive, orderActive, purchaseActive, reportingActive, supportActive, settingActive, sideNavDashboardClick, sideNavInventoryClick, sideNavOrderClick, sideNavPurchaseClick, sideNavReportingClick, sideNavSupportClick,sideNavSettingClick }= useSideNavColorStore();
// const dashboardActive=ref({
//     backgroundColor:"#000000",
//     borderRadius: "0"
// });
// const inventoryActive=ref({
//     backgroundColor:"#93200B",
//     borderRadius: "0 100px 0 0"
// });
// const orderActive=ref({
//     backgroundColor:"#93200B",
//     borderRadius: "0"
// });
// const purchaseActive=ref({
//     backgroundColor:"#93200B",
//     borderRadius: "0"
// });
// const reportingActive=ref({
//     backgroundColor:"#93200B",
//     borderRadius: "0"
// });
// const supportActive=ref({
//     backgroundColor:"#93200B",
//     borderRadius: "0"
// });
// const settingActive=ref({
//     backgroundColor:"#93200B",
//     borderRadius: "0"
// });

// const sideNavDashboardClick=()=>{
//     if(((inventoryActive.value.backgroundColor)==="#000000") / ((orderActive.value.backgroundColor)==="#000000") / ((purchaseActive.value.backgroundColor)==="#000000") / ((reportingActive.value.backgroundColor)==="#000000") / ((supportActive.value.backgroundColor)==="#000000") / ((settingActive.value.backgroundColor)==="#000000")){
//         dashboardActive.value.backgroundColor="#000000";
//         dashboardActive.value.borderRadius="0";
//         inventoryActive.value.backgroundColor="#93200B";
//         inventoryActive.value.borderRadius="0 100px 0 0";
//         orderActive.value.backgroundColor="#000000";
//         orderActive.value.borderRadius="0";
//     }
// };
// const sideNavInventoryClick=()=>{
//     if(((dashboardActive.value.backgroundColor)==="#000000") / ((orderActive.value.backgroundColor)==="#000000") / ((purchaseActive.value.backgroundColor)==="#000000") / ((reportingActive.value.backgroundColor)==="#000000") / ((supportActive.value.backgroundColor)==="#000000") / ((settingActive.value.backgroundColor)==="#000000")){
//         dashboardActive.value.backgroundColor="#93200B";
//         dashboardActive.value.borderRadius="0 0 100px 0";
//         inventoryActive.value.backgroundColor="#000000";
//         inventoryActive.value.borderRadius="0";
//         orderActive.value.borderRadius="0 100px 0 0";
//     }
// };
// const sideNavOrderClick=()=>{
//     if(((dashboardActive.value.backgroundColor)==="#000000") / ((inventoryActive.value.backgroundColor)==="#000000") / ((purchaseActive.value.backgroundColor)==="#000000") / ((reportingActive.value.backgroundColor)==="#000000") / ((supportActive.value.backgroundColor)==="#000000") / ((settingActive.value.backgroundColor)==="#000000")){
//         dashboardActive.value.backgroundColor="#93200B";
//         inventoryActive.value.backgroundColor="#93200B";
//         inventoryActive.value.borderRadius="0 0 100px 0";
//         orderActive.value.backgroundColor="#000000"
//         orderActive.value.borderRadius="0";
//         purchaseActive.value.borderRadius="0 100px 0 0"
//     }
// };
// const sideNavPurchaseClick=()=>{
//     if(((dashboardActive.value.backgroundColor)==="#000000") / ((inventoryActive.value.backgroundColor)==="#000000") / ((orderActive.value.backgroundColor)==="#000000") / ((reportingActive.value.backgroundColor)==="#000000") / ((supportActive.value.backgroundColor)==="#000000") / ((settingActive.value.backgroundColor)==="#000000")){
//         dashboardActive.value.backgroundColor="#93200B";
//         orderActive.value.backgroundColor="#93200B";
//         orderActive.value.borderRadius="0 0 100px 0";
//         purchaseActive.value.backgroundColor="#000000"
//         purchaseActive.value.borderRadius="0";
//         reportingActive.value.borderRadius="0 100px 0 0"
//     }
// };
// const sideNavReportingClick=()=>{
//     if(((dashboardActive.value.backgroundColor)==="#000000") / ((inventoryActive.value.backgroundColor)==="#000000") / ((orderActive.value.backgroundColor)==="#000000") / ((purchaseActive.value.backgroundColor)==="#000000") / ((supportActive.value.backgroundColor)==="#000000") / ((settingActive.value.backgroundColor)==="#000000")){
//         dashboardActive.value.backgroundColor="#93200B";
//         purchaseActive.value.backgroundColor="#93200B";
//         purchaseActive.value.borderRadius="0 0 100px 0";
//         reportingActive.value.backgroundColor="#000000"
//         reportingActive.value.borderRadius="0";
//         supportActive.value.borderRadius="0 100px 0 0"
//     }
// };
// const sideNavSupportClick=()=>{
//     if(((dashboardActive.value.backgroundColor)==="#000000") / ((inventoryActive.value.backgroundColor)==="#000000") / ((orderActive.value.backgroundColor)==="#000000") / ((reportingActive.value.backgroundColor)==="#000000") / ((purchaseActive.value.backgroundColor)==="#000000") / ((settingActive.value.backgroundColor)==="#000000")){
//         dashboardActive.value.backgroundColor="#93200B";
//         reportingActive.value.backgroundColor="#93200B";
//         reportingActive.value.borderRadius="0 0 100px 0";
//         supportActive.value.backgroundColor="#000000"
//         supportActive.value.borderRadius="0";
//         settingActive.value.borderRadius="0 100px 0 0"
//     }
// };
// const sideNavSettingClick=()=>{
//     if(((dashboardActive.value.backgroundColor)==="#000000") / ((inventoryActive.value.backgroundColor)==="#000000") / ((orderActive.value.backgroundColor)==="#000000") / ((reportingActive.value.backgroundColor)==="#000000") / ((supportActive.value.backgroundColor)==="#000000") / ((purchaseActive.value.backgroundColor)==="#000000")){
//         dashboardActive.value.backgroundColor="#93200B";
//         supportActive.value.backgroundColor="#93200B";
//         supportActive.value.borderRadius="0 0 100px 0";
//         settingActive.value.backgroundColor="#000000"
//         settingActive.value.borderRadius="0";
//     }
// };
</script>

<style scoped>
.side-nav-main-ctn-main-ctn{
    width:200px;
    height:100vh;
    background-color: #93200B;
    overflow-y:hidden;
    display:flex;
}
.side-nav-main-ctn-mini-ctn, section{
    display:flex;
    flex-direction:column;
}
.side-nav-icon-section{
    background-color:rgb(0, 0, 0);
}
.login{
    position: absolute;
    bottom: 10px;
    display:flex;
    margin:0 50px;
}
</style>

<template>
    <section class="side-nav-main-ctn-main-ctn">
        <div class="side-nav-main-ctn-mini-ctn">
            <div class="user">
                <SideNavUser
                    :name="SideNavIcons[0].name"
                    :icon="SideNavIcons[0].icon"
                    :link="SideNavIcons[0].link"
                >
                </SideNavUser>
            </div>
            <br/>
            <section class="side-nav-icon-section">
                <SideNavIcon
                    :name="SideNavIcons[1].name"
                    :icon="SideNavIcons[1].icon"
                    :link="SideNavIcons[1].link"
                    :style="[dashboardActive]"
                    :onClick="sideNavDashboardClick"
                >
                </SideNavIcon>

                <SideNavIcon
                    :name="SideNavIcons[2].name"
                    :icon="SideNavIcons[2].icon"
                    :link="SideNavIcons[2].link"
                    :style="[inventoryActive]"
                    :onClick="sideNavInventoryClick"
                >
                </SideNavIcon>

                <SideNavIcon
                    :name="SideNavIcons[3].name"
                    :icon="SideNavIcons[3].icon"
                    :link="SideNavIcons[3].link"
                    :style="[orderActive]"
                    :onClick="sideNavOrderClick"
                >
                </SideNavIcon>

                <SideNavIcon
                    :name="SideNavIcons[4].name"
                    :icon="SideNavIcons[4].icon"
                    :link="SideNavIcons[4].link"
                    :style="[purchaseActive]"
                    :onClick="sideNavPurchaseClick"
                >
                </SideNavIcon>

                <SideNavIcon
                    :name="SideNavIcons[5].name"
                    :icon="SideNavIcons[5].icon"
                    :link="SideNavIcons[5].link"
                    :style="[reportingActive]"
                    :onClick="sideNavReportingClick"
                >
                </SideNavIcon>

                <SideNavIcon
                    :name="SideNavIcons[6].name"
                    :icon="SideNavIcons[6].icon"
                    :link="SideNavIcons[6].link"
                    :style="[supportActive]"
                    :onClick="sideNavSupportClick"
                >
                </SideNavIcon>

                <SideNavIcon
                    :name="SideNavIcons[7].name"
                    :icon="SideNavIcons[7].icon"
                    :link="SideNavIcons[7].link"
                    :style="[settingActive]"
                    :onClick="sideNavSettingClick"
                >
                </SideNavIcon>
            </section>
            <br/>
            <div class="login">
                <SideNavLogin
                    :name="SideNavIcons[10].name"
                    :icon="SideNavIcons[10].icon"
                    :link="SideNavIcons[10].link"
                >
                </SideNavLogin>
            </div>
        </div>
    </section>
</template>