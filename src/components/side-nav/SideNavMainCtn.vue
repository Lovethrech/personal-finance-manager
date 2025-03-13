<script setup>
import SideNavIcon from '@/components/side-nav/SideNavIcon.vue';
import SideNavIcons from "@/data/side-nav.json";
</script>

<template>
    <section class="side-nav-main-ctn-main-ctn">
        <div class="side-nav-main-ctn-mini-ctn">
            <!-- <div class="user"></div> -->
            <section>
                <SideNavIcon
                    :name="SideNavIcons[1].name"
                    :icon="SideNavIcons[1].icon"
                    :link="SideNavIcons[1].link"
                >
                </SideNavIcon>
            </section>
        </div>
    </section>
</template>