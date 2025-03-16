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

    // const sideNavDashboardClick=()=>{
        
    // };

    // dashboard 
    // inventory 
    // order 
    // purchase 
    // reporting 
    // support 
    // setting 


    const sideNavClick=()=>{
        if(((dashboardActive.value.backgroundColor)==="#000000") / ((orderActive.value.backgroundColor)==="#000000") / ((purchaseActive.value.backgroundColor)==="#000000") / ((reportingActive.value.backgroundColor)==="#000000") / ((supportActive.value.backgroundColor)==="#000000") / ((settingActive.value.backgroundColor)==="#000000")){
            dashboardActive.value.backgroundColor="#93200B";
            dashboardActive.value.borderRadius="0 0 100px 0";
            inventoryActive.value.backgroundColor="#000000";
            inventoryActive.value.borderRadius="0";
            orderActive.value.backgroundColor="93200B";
            orderActive.value.borderRadius="0 100px 0 0"; 
            purchaseActive.value.backgroundColor="93200B";
            purchaseActive.value.borderRadius="0";
            reportingActive.value.backgroundColor="93200B";
            reportingActive.value.borderRadius="0";
            supportActive.value.backgroundColor="93200B";
            supportActive.value.borderRadius="0";
            settingActive.value.backgroundColor="93200B";
            settingActive.value.borderRadius="0";
        }
        else if(((dashboardActive.value.backgroundColor)==="#000000") / ((orderActive.value.backgroundColor)==="#000000") / ((purchaseActive.value.backgroundColor)==="#000000") / ((reportingActive.value.backgroundColor)==="#000000") / ((supportActive.value.backgroundColor)==="#000000") / ((settingActive.value.backgroundColor)==="#000000")){
            dashboardActive.value.backgroundColor="#93200B";
            dashboardActive.value.borderRadius="0 0 100px 0";
            inventoryActive.value.backgroundColor="#000000";
            inventoryActive.value.borderRadius="0";
            orderActive.value.backgroundColor="93200B";
            orderActive.value.borderRadius="0 100px 0 0"; 
            purchaseActive.value.backgroundColor="93200B";
            purchaseActive.value.borderRadius="0";
            reportingActive.value.backgroundColor="93200B";
            reportingActive.value.borderRadius="0";
            supportActive.value.backgroundColor="93200B";
            supportActive.value.borderRadius="0";
            settingActive.value.backgroundColor="93200B";
            settingActive.value.borderRadius="0";
        }
        
    };
    // cons=()=>{
    //     if(((dashboardActive.value.backgroundColor)==="#000000") / ((inventoryActive.value.backgroundColor)==="#000000") / ((purchaseActive.value.backgroundColor)==="#000000") / ((reportingActive.value.backgroundColor)==="#000000") / ((supportActive.value.backgroundColor)==="#000000") / ((settingActive.value.backgroundColor)==="#000000")){
    //         dashboardActive.value.backgroundColor="#93200B";
    //         inventoryActive.value.backgroundColor="#93200B";
    //         inventoryActive.value.borderRadius="0 0 100px 0";
    //         orderActive.value.backgroundColor="#000000"
    //         orderActive.value.borderRadius="0";
    //         purchaseActive.value.borderRadius="0 100px 0 0";
    //     }
    // };
    // cons=()=>{
    //     if(((dashboardActive.value.backgroundColor)==="#000000") / ((inventoryActive.value.backgroundColor)==="#000000") / ((orderActive.value.backgroundColor)==="#000000") / ((reportingActive.value.backgroundColor)==="#000000") / ((supportActive.value.backgroundColor)==="#000000") / ((settingActive.value.backgroundColor)==="#000000")){
    //         dashboardActive.value.backgroundColor="#93200B";
    //         orderActive.value.backgroundColor="#93200B";
    //         orderActive.value.borderRadius="0 0 100px 0";
    //         purchaseActive.value.backgroundColor="#000000"
    //         purchaseActive.value.borderRadius="0";
    //         reportingActive.value.borderRadius="0 100px 0 0"
    //     }
    // };
    // cons=()=>{
    //     if(((dashboardActive.value.backgroundColor)==="#000000") / ((inventoryActive.value.backgroundColor)==="#000000") / ((orderActive.value.backgroundColor)==="#000000") / ((purchaseActive.value.backgroundColor)==="#000000") / ((supportActive.value.backgroundColor)==="#000000") / ((settingActive.value.backgroundColor)==="#000000")){
    //         dashboardActive.value.backgroundColor="#93200B";
    //         purchaseActive.value.backgroundColor="#93200B";
    //         purchaseActive.value.borderRadius="0 0 100px 0";
    //         reportingActive.value.backgroundColor="#000000"
    //         reportingActive.value.borderRadius="0";
    //         supportActive.value.borderRadius="0 100px 0 0"
    //     }
    // };
    // cons=()=>{
    //     if(((dashboardActive.value.backgroundColor)==="#000000") / ((inventoryActive.value.backgroundColor)==="#000000") / ((orderActive.value.backgroundColor)==="#000000") / ((reportingActive.value.backgroundColor)==="#000000") / ((purchaseActive.value.backgroundColor)==="#000000") / ((settingActive.value.backgroundColor)==="#000000")){
    //         dashboardActive.value.backgroundColor="#93200B";
    //         reportingActive.value.backgroundColor="#93200B";
    //         reportingActive.value.borderRadius="0 0 100px 0";
    //         supportActive.value.backgroundColor="#000000"
    //         supportActive.value.borderRadius="0";
    //         settingActive.value.borderRadius="0 100px 0 0"
    //     }
    // };
    // cons=()=>{
    //     if(((dashboardActive.value.backgroundColor)==="#000000") / ((inventoryActive.value.backgroundColor)==="#000000") / ((orderActive.value.backgroundColor)==="#000000") / ((reportingActive.value.backgroundColor)==="#000000") / ((supportActive.value.backgroundColor)==="#000000") / ((purchaseActive.value.backgroundColor)==="#000000")){
    //         dashboardActive.value.backgroundColor="#93200B";
    //         supportActive.value.backgroundColor="#93200B";
    //         supportActive.value.borderRadius="0 0 100px 0";
    //         settingActive.value.backgroundColor="#000000"
    //         settingActive.value.borderRadius="0";
    //     }
    // };

    return { dashboardActive, inventoryActive, orderActive, purchaseActive, reportingActive, supportActive, settingActive, sideNavClick }
})
