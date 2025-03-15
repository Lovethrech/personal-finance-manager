import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSideNavColorStore = defineStore('sideNavColor', () => {
    const dashboardActiveBgColor=ref("#000000");
    const dashboardActiveBorderRadius=ref("0");
    const inventoryActiveBgColor=ref("transparent");
    const inventoryActiveBorderRadius=ref("0 100px 0 0");
    const orderActiveBgColor=ref("transparent");
    const orderActiveBorderRadius=ref("0");
    const purchaseActiveBgColor=ref("transparent");
    const purchaseActiveBorderRadius=ref("0");
    const reportingActiveBgColor=ref("transparent");
    const reportingActiveBorderRadius=ref("0");
    const supportActiveBgColor=ref("transparent");
    const supportActiveBorderRadius=ref("0");
    const settingActiveBgColor=ref("transparent");
    const settingActiveBorderRadius=ref("0");

    return { dashboardActiveBgColor, dashboardActiveBorderRadius, inventoryActiveBgColor, inventoryActiveBorderRadius, orderActiveBgColor, orderActiveBorderRadius, purchaseActiveBgColor, purchaseActiveBorderRadius, reportingActiveBgColor, reportingActiveBorderRadius, supportActiveBgColor, supportActiveBorderRadius, settingActiveBgColor, settingActiveBorderRadius }
})
