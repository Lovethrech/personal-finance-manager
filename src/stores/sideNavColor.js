import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSideNavColorStore = defineStore('sideNavColor', () => {
    const defaultBgColor = "#93200B";
    const activeColor = "#461911";

    const dashboardActive = ref({ backgroundColor: activeColor, borderRadius: "0" });
    const inventoryActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0", color:"" });
    const orderActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0" });
    const purchaseActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0" });
    const reportingActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0" });
    const supportActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0" });
    const settingActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0" });
    const profileBorderStyle=ref({borderRadius: "0 0 100px 0"});
    const loginBorderStyle=ref({borderRadius: "0"});

    const resetColors = () => {
        dashboardActive.value.backgroundColor = defaultBgColor;
        dashboardActive.value.borderRadius = "0";
        inventoryActive.value.backgroundColor = defaultBgColor;
        inventoryActive.value.borderRadius = "0";
        orderActive.value.backgroundColor = defaultBgColor;
        orderActive.value.borderRadius = "0";
        purchaseActive.value.backgroundColor = defaultBgColor;
        purchaseActive.value.borderRadius = "0";
        reportingActive.value.backgroundColor = defaultBgColor;
        reportingActive.value.borderRadius = "0";
        supportActive.value.backgroundColor = defaultBgColor;
        supportActive.value.borderRadius = "0";
        settingActive.value.backgroundColor = defaultBgColor;
        settingActive.value.borderRadius = "0";
        profileBorderStyle.value.borderRadius= "0 0 100px 0";
        loginBorderStyle.value.borderRadius= "0";
    };

    const sideNavDashboardClick = () => {
        resetColors();
        dashboardActive.value.backgroundColor = activeColor;
        dashboardActive.value.borderRadius = "0";
        inventoryActive.value.borderRadius = "0 100px 0 0";
    };

    const sideNavInventoryClick = () => {
        resetColors();
        inventoryActive.value.backgroundColor = activeColor;
        inventoryActive.value.borderRadius = "0";
        dashboardActive.value.borderRadius = "0 0 100px 0";
        orderActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value.borderRadius="0";
    };

    const sideNavOrderClick = () => {
        resetColors();
        orderActive.value.backgroundColor = activeColor;
        orderActive.value.borderRadius = "0";
        inventoryActive.value.borderRadius = "0 0 100px 0";
        purchaseActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value.borderRadius="0";
    };

    const sideNavPurchaseClick = () => {
        resetColors();
        purchaseActive.value.backgroundColor = activeColor;
        purchaseActive.value.borderRadius = "0";
        orderActive.value.borderRadius = "0 0 100px 0";
        reportingActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value.borderRadius="0";
    };

    const sideNavReportingClick = () => {
        resetColors();
        reportingActive.value.backgroundColor = activeColor;
        reportingActive.value.borderRadius = "0";
        purchaseActive.value.borderRadius = "0 0 100px 0";
        supportActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value.borderRadius="0";
    };

    const sideNavSupportClick = () => {
        resetColors();
        supportActive.value.backgroundColor = activeColor;
        supportActive.value.borderRadius = "0";
        reportingActive.value.borderRadius = "0 0 100px 0";
        settingActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value.borderRadius="0";
    };

    const sideNavSettingClick = () => {
        resetColors();
        settingActive.value.backgroundColor = activeColor;
        settingActive.value.borderRadius = "0";
        supportActive.value.borderRadius = "0 0 100px 0";
        profileBorderStyle.value.borderRadius="0";
        loginBorderStyle.value.borderRadius="0 100px 0 0";
    };

    return {dashboardActive, inventoryActive, orderActive, purchaseActive, reportingActive, supportActive, settingActive, profileBorderStyle, loginBorderStyle, sideNavDashboardClick, sideNavInventoryClick, sideNavOrderClick, sideNavPurchaseClick, sideNavReportingClick, sideNavSupportClick, sideNavSettingClick};
});