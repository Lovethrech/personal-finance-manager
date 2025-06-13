<script setup>
import { useSideNavColorStore } from "@/stores/sideNavColor";

import SideNavIcons from "@/data/side-nav.json";
import SideNavIcon from '@/components/side-nav/SideNavIcon.vue';
import SideNavUser from "@/components/side-nav/SideNavUser.vue";
import SideNavLogin from "@/components/side-nav/SideNavLogin.vue";

const {dashboardActive, inventoryActive, orderActive, purchaseActive, reportingActive, supportActive, settingActive, profileBorderStyle, loginBorderStyle, sideNavDashboardClick, sideNavInventoryClick, sideNavOrderClick, sideNavPurchaseClick, sideNavReportingClick, sideNavSupportClick, sideNavSettingClick }= useSideNavColorStore();
</script>

<style scoped>
.side-nav-main-ctn-main-ctn{
    width:60vw;
    height:100vh;
    overflow-y:hidden;
    display:flex;
}
.side-nav-main-ctn-mini-ctn, section{
    display:flex;
    flex-direction:column;
}
.side-nav-main-ctn-mini-ctn .user{
    margin-bottom:-20px;
}
.side-nav-main-ctn-mini-ctn .user, .side-nav-main-ctn-mini-ctn .login{
    background-color: #93200B;
}
.side-nav-icon-section{
    background-color:#93200B;
}
.login{
    margin-top:-20px;
    height: 800px;
    display:flex;
    justify-content: baseline;
    padding:0 40px;
}
@media screen and (max-width:700px) {
    .side-nav-main-ctn-main-ctn{
        width:50px;
    }
    .login{
        background-color: #ffa500;
        position: relative;
        width:50px;
        height:1000px;
        padding:0 14px;
    }
}
</style>

<template>
    <section class="side-nav-main-ctn-main-ctn">
        <div class="side-nav-main-ctn-mini-ctn">
            <div class="user" :style="[profileBorderStyle]">
                <SideNavUser
                    :name="SideNavIcons[0].name"
                    :icon="SideNavIcons[0].icon"
                    :link="SideNavIcons[0].link"
                    :profileBorderStyle="profileBorderStyle"
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
            <div class="login" :style="[loginBorderStyle]">
                <SideNavLogin
                    :name="SideNavIcons[10].name"
                    :icon="SideNavIcons[10].icon"
                    :link="SideNavIcons[10].link"
                    :loginBorderStyle="loginBorderStyle"
                >
                </SideNavLogin>
            </div>
        </div>
    </section>
</template>