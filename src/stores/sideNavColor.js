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

    const sideNavDashboardClick=()=>{
        if(((inventoryActive.value.backgroundColor)==="#000000") / ((orderActive.value.backgroundColor)==="#000000") / ((purchaseActive.value.backgroundColor)==="#000000") / ((reportingActive.value.backgroundColor)==="#000000") / ((supportActive.value.backgroundColor)==="#000000") / ((settingActive.value.backgroundColor)==="#000000")){
            dashboardActive.value.backgroundColor="#000000";
            dashboardActive.value.borderRadius="0";
            inventoryActive.value.backgroundColor="#93200B";
            inventoryActive.value.borderRadius="0 100px 0 0";
        }
    };
    const sideNavInventoryClick=()=>{
        if(((dashboardActive.value.backgroundColor)==="#000000") / ((orderActive.value.backgroundColor)==="#000000") / ((purchaseActive.value.backgroundColor)==="#000000") / ((reportingActive.value.backgroundColor)==="#000000") / ((supportActive.value.backgroundColor)==="#000000") / ((settingActive.value.backgroundColor)==="#000000")){
            dashboardActive.value.backgroundColor="#93200B";
            dashboardActive.value.borderRadius="0 0 100px 0";
            inventoryActive.value.backgroundColor="#000000";
            inventoryActive.value.borderRadius="0";
            orderActive.value.borderRadius="0 100px 0 0";
        }
    };
    const sideNavOrderClick=()=>{
        if(((dashboardActive.value.backgroundColor)==="#000000") / ((inventoryActive.value.backgroundColor)==="#000000") / ((purchaseActive.value.backgroundColor)==="#000000") / ((reportingActive.value.backgroundColor)==="#000000") / ((supportActive.value.backgroundColor)==="#000000") / ((settingActive.value.backgroundColor)==="#000000")){
            dashboardActive.value.backgroundColor="#93200B";
            dashboardActive.value.borderRadius="0";
            inventoryActive.value.backgroundColor="#93200B";
            inventoryActive.value.borderRadius="0 0 100px 0";
            orderActive.value.backgroundColor="#000000"
            orderActive.value.borderRadius="0";
            purchaseActive.value.borderRadius="0 100px 0 0"
        }
    };

    return { dashboardActive, inventoryActive, orderActive, purchaseActive, reportingActive, supportActive, settingActive, sideNavDashboardClick, sideNavInventoryClick, sideNavOrderClick, sideNavPurchaseClick, sideNavReportingClick, sideNavSupportClick,sideNavSettingClick }
})
