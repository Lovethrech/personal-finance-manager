import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSideNavColorStore = defineStore('sideNavColor', () => {
    const defaultBgColor = "#93200B";
    const activeBgColor = "#461911";
    const defaultColor="#FFFFFF";
    const activeColor="#93200B";

    const dashboardActive = ref({ backgroundColor: activeBgColor, borderRadius: "0", color: activeColor });
    const inventoryActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0", color: defaultColor });
    const orderActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0", color: defaultColor });
    const purchaseActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0", color: defaultColor });
    const reportingActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0", color: defaultColor });
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
        dashboardActive.value.backgroundColor = activeBgColor;
        dashboardActive.value.borderRadius = "0";
        inventoryActive.value.borderRadius = "0 100px 0 0";
    };

    const sideNavInventoryClick = () => {
        resetColors();
        inventoryActive.value.backgroundColor = activeBgColor;
        inventoryActive.value.borderRadius = "0";
        dashboardActive.value.borderRadius = "0 0 100px 0";
        orderActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value.borderRadius="0";
    };

    const sideNavOrderClick = () => {
        resetColors();
        orderActive.value.backgroundColor = activeBgColor;
        orderActive.value.borderRadius = "0";
        inventoryActive.value.borderRadius = "0 0 100px 0";
        purchaseActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value.borderRadius="0";
    };

    const sideNavPurchaseClick = () => {
        resetColors();
        purchaseActive.value.backgroundColor = activeBgColor;
        purchaseActive.value.borderRadius = "0";
        orderActive.value.borderRadius = "0 0 100px 0";
        reportingActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value.borderRadius="0";
    };

    const sideNavReportingClick = () => {
        resetColors();
        reportingActive.value.backgroundColor = activeBgColor;
        reportingActive.value.borderRadius = "0";
        purchaseActive.value.borderRadius = "0 0 100px 0";
        supportActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value.borderRadius="0";
    };

    const sideNavSupportClick = () => {
        resetColors();
        supportActive.value.backgroundColor = activeBgColor;
        supportActive.value.borderRadius = "0";
        reportingActive.value.borderRadius = "0 0 100px 0";
        settingActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value.borderRadius="0";
    };

    const sideNavSettingClick = () => {
        resetColors();
        settingActive.value.backgroundColor = activeBgColor;
        settingActive.value.borderRadius = "0";
        supportActive.value.borderRadius = "0 0 100px 0";
        profileBorderStyle.value.borderRadius="0";
        loginBorderStyle.value.borderRadius="0 100px 0 0";
    };

    return {dashboardActive, inventoryActive, orderActive, purchaseActive, reportingActive, supportActive, settingActive, profileBorderStyle, loginBorderStyle, sideNavDashboardClick, sideNavInventoryClick, sideNavOrderClick, sideNavPurchaseClick, sideNavReportingClick, sideNavSupportClick, sideNavSettingClick};
});