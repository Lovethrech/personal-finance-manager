import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSideNavColorStore = defineStore('sideNavColor', () => {
    const dashboardActiveBgColor=ref("#000000");
    const dashboardActiveBorderRadius=ref("0");
    const inventoryActiveBgColor=ref("#000000");
    const inventoryActiveBorderRadius=ref("0");
    const orderActiveBgColor=ref("#000000");
    const orderActiveBorderRadius=ref("0");

    return { count, doubleCount, increment }
})
