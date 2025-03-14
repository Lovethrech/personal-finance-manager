<script setup>
import SideNavIcons from "@/data/side-nav.json";
import SideNavIcon from '@/components/side-nav/SideNavIcon.vue';
import SideNavUser from "@/components/side-nav/SideNavUser.vue";

</script>

<style scoped>
.side-nav-main-ctn-main-ctn{
    width:15%;
    height:100vh;
    background-color: #93200B;
    overflow-y:hidden;
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
            <section>
                <SideNavIcon
                    :name="SideNavIcons[1].name"
                    :icon="SideNavIcons[1].icon"
                    :link="SideNavIcons[1].link"
                >
                </SideNavIcon>

                <SideNavIcon
                    :name="SideNavIcons[2].name"
                    :icon="SideNavIcons[2].icon"
                    :link="SideNavIcons[2].link"
                >
                </SideNavIcon>

                <SideNavIcon
                    :name="SideNavIcons[3].name"
                    :icon="SideNavIcons[3].icon"
                    :link="SideNavIcons[3].link"
                >
                </SideNavIcon>

                <SideNavIcon
                    :name="SideNavIcons[4].name"
                    :icon="SideNavIcons[4].icon"
                    :link="SideNavIcons[4].link"
                >
                </SideNavIcon>

                <SideNavIcon
                    :name="SideNavIcons[5].name"
                    :icon="SideNavIcons[5].icon"
                    :link="SideNavIcons[5].link"
                >
                </SideNavIcon>

                <SideNavIcon
                    :name="SideNavIcons[6].name"
                    :icon="SideNavIcons[6].icon"
                    :link="SideNavIcons[6].link"
                >
                </SideNavIcon>

                <SideNavIcon
                    :name="SideNavIcons[7].name"
                    :icon="SideNavIcons[7].icon"
                    :link="SideNavIcons[7].link"
                >
                </SideNavIcon>
            </section>
        </div>
    </section>
</template>