import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSideNavColorStore = defineStore('sideNavColor', () => {
    const defaultColor = "#93200B";
    const activeColor = "#000000";

    const dashboardActive = ref({ backgroundColor: activeColor, borderRadius: "0" });
    const inventoryActive = ref({ backgroundColor: defaultColor, borderRadius: "0 100px 0 0" });
    const orderActive = ref({ backgroundColor: defaultColor, borderRadius: "0" });
    const purchaseActive = ref({ backgroundColor: defaultColor, borderRadius: "0" });
    const reportingActive = ref({ backgroundColor: defaultColor, borderRadius: "0" });
    const supportActive = ref({ backgroundColor: defaultColor, borderRadius: "0" });
    const settingActive = ref({ backgroundColor: defaultColor, borderRadius: "0" });
    const profileBorderStyle=ref("0 0 100px 0");
    const loginBorderStyle=ref("0");

    const resetColors = () => {
        dashboardActive.value.backgroundColor = defaultColor;
        dashboardActive.value.borderRadius = "0";
        inventoryActive.value.backgroundColor = defaultColor;
        inventoryActive.value.borderRadius = "0";
        orderActive.value.backgroundColor = defaultColor;
        orderActive.value.borderRadius = "0";
        purchaseActive.value.backgroundColor = defaultColor;
        purchaseActive.value.borderRadius = "0";
        reportingActive.value.backgroundColor = defaultColor;
        reportingActive.value.borderRadius = "0";
        supportActive.value.backgroundColor = defaultColor;
        supportActive.value.borderRadius = "0";
        settingActive.value.backgroundColor = defaultColor;
        settingActive.value.borderRadius = "0";
    };

    const sideNavDashboardClick = () => {
        resetColors();
        dashboardActive.value.backgroundColor = activeColor;
        dashboardActive.value.borderRadius = "0";
        inventoryActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value="0 0 100px 0";
        loginBorderStyle.value="0";
    };

    const sideNavInventoryClick = () => {
        resetColors();
        inventoryActive.value.backgroundColor = activeColor;
        inventoryActive.value.borderRadius = "0";
        dashboardActive.value.borderRadius = "0 0 100px 0";
        orderActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value="0";
        loginBorderStyle.value="0";
    };

    const sideNavOrderClick = () => {
        resetColors();
        orderActive.value.backgroundColor = activeColor;
        orderActive.value.borderRadius = "0";
        inventoryActive.value.borderRadius = "0 0 100px 0";
        purchaseActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value="0";
        loginBorderStyle.value="0";
    };

    const sideNavPurchaseClick = () => {
        resetColors();
        purchaseActive.value.backgroundColor = activeColor;
        purchaseActive.value.borderRadius = "0";
        orderActive.value.borderRadius = "0 0 100px 0";
        reportingActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value="0";
        loginBorderStyle.value="0";
    };

    const sideNavReportingClick = () => {
        resetColors();
        reportingActive.value.backgroundColor = activeColor;
        reportingActive.value.borderRadius = "0";
        purchaseActive.value.borderRadius = "0 0 100px 0";
        supportActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value="0";
        loginBorderStyle.value="0";
    };

    const sideNavSupportClick = () => {
        resetColors();
        supportActive.value.backgroundColor = activeColor;
        supportActive.value.borderRadius = "0";
        reportingActive.value.borderRadius = "0 0 100px 0";
        settingActive.value.borderRadius = "0 100px 0 0";
    };

    const sideNavSettingClick = () => {
        resetColors();
        settingActive.value.backgroundColor = activeColor;
        settingActive.value.borderRadius = "0";
        supportActive.value.borderRadius = "0 0 100px 0";
    };

    return {dashboardActive, inventoryActive, orderActive, purchaseActive, reportingActive, supportActive, settingActive, profileBorderStyle, loginBorderStyle, sideNavDashboardClick, sideNavInventoryClick, sideNavOrderClick, sideNavPurchaseClick, sideNavReportingClick, sideNavSupportClick, sideNavSettingClick};
});