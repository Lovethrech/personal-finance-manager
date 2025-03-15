import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSideNavColorStore = defineStore('sideNavColor', () => {
    const dashboardActive=ref({
        backgroundColor:"#000000",
        borderRadius: "0"
    });
    const inventoryActive=ref({
        backgroundColor:"#93200B",
        borderRadius: "0 100px 0 0"
    });
    const orderActive=ref({
        backgroundColor:"#93200B",
        borderRadius: "0"
    });
    const purchaseActive=ref({
        backgroundColor:"#93200B",
        borderRadius: "0"
    });
    const reportingActive=ref({
        backgroundColor:"#93200B",
        borderRadius: "0"
    });
    const supportActive=ref({
        backgroundColor:"#93200B",
        borderRadius: "0"
    });
    const settingActive=ref({
        backgroundColor:"#93200B",
        borderRadius: "0"
    });

    return { dashboardActive, inventoryActive, orderActive, purchaseActive, reportingActive, supportActive, settingActive }
})
