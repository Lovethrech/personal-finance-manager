<script setup>
import SideNavIcons from "@/data/side-nav.json";
import SideNavIcon from '@/components/side-nav/SideNavIcon.vue';
import SideNavUser from "@/components/side-nav/SideNavUser.vue";
import SideNavLogin from "@/components/side-nav/SideNavLogin.vue";
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
.side-nav-icon{
    background-color: #93200B;
}
.side-nav-icon:nth-child(1){
    background-color:black;
}
.side-nav-icon:nth-child(2){
    background-color: #93200B;
    border-radius: 0 100px 0 0;
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
                    class="side-nav-icon"
                    :name="SideNavIcons[1].name"
                    :icon="SideNavIcons[1].icon"
                    :link="SideNavIcons[1].link"
                >
                </SideNavIcon>

                <SideNavIcon
                    class="side-nav-icon"
                    :name="SideNavIcons[2].name"
                    :icon="SideNavIcons[2].icon"
                    :link="SideNavIcons[2].link"
                >
                </SideNavIcon>

                <SideNavIcon
                    class="side-nav-icon"
                    :name="SideNavIcons[3].name"
                    :icon="SideNavIcons[3].icon"
                    :link="SideNavIcons[3].link"
                >
                </SideNavIcon>

                <SideNavIcon
                    class="side-nav-icon"
                    :name="SideNavIcons[4].name"
                    :icon="SideNavIcons[4].icon"
                    :link="SideNavIcons[4].link"
                >
                </SideNavIcon>

                <SideNavIcon
                    class="side-nav-icon"
                    :name="SideNavIcons[5].name"
                    :icon="SideNavIcons[5].icon"
                    :link="SideNavIcons[5].link"
                >
                </SideNavIcon>

                <SideNavIcon
                    class="side-nav-icon"
                    :name="SideNavIcons[6].name"
                    :icon="SideNavIcons[6].icon"
                    :link="SideNavIcons[6].link"
                >
                </SideNavIcon>

                <SideNavIcon
                    class="side-nav-icon"
                    :name="SideNavIcons[7].name"
                    :icon="SideNavIcons[7].icon"
                    :link="SideNavIcons[7].link"
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