import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSideNavColorStore = defineStore('sideNavColor', () => {
    const dashboardActive=ref({
        backgroundColor:"#000000",
        borderRadius: "0"
    });
    const inventoryActive=ref({
        backgroundColor:"transparent",
        borderRadius: "0 100px 0 0"
    });
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

    return { dashboardActive, inventoryActive, orderActiveBgColor, orderActiveBorderRadius, purchaseActiveBgColor, purchaseActiveBorderRadius, reportingActiveBgColor, reportingActiveBorderRadius, supportActiveBgColor, supportActiveBorderRadius, settingActiveBgColor, settingActiveBorderRadius }
})
