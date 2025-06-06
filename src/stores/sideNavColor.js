import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSideNavColorStore = defineStore('sideNavColor', () => {
    const defaultBgColor = "#93200B";
    const activeBgColor = "#bd776b";
    const defaultColor="#FFFFFF";
    const activeColor="#93200B";
    const activeFontWeight= "900";
    const defaultFontWeight="200";

    const dashboardActive = ref({ backgroundColor: activeBgColor, borderRadius: "0", color: activeColor, fontWeight:activeFontWeight });
    const inventoryActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0 100px 0 0", color: defaultColor, fontWeight:defaultFontWeight });
    const orderActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0", color: defaultColor, fontWeight:defaultFontWeight });
    const purchaseActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0", color: defaultColor, fontWeight:defaultFontWeight });
    const reportingActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0", color: defaultColor, fontWeight:defaultFontWeight });
    const supportActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0", color: defaultColor, fontWeight:defaultFontWeight });
    const settingActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0", color: defaultColor, fontWeight:defaultFontWeight });
    const profileBorderStyle=ref({borderRadius: "0 0 100px 0", borderRight: "9px outset #723a3052", borderBottom: "5px outset #723a3052"});
    const loginBorderStyle=ref({borderRadius: "0", borderRight: "9px outset #723a3052", borderBottom:"0"});

    const resetColors = () => {
        dashboardActive.value.backgroundColor = defaultBgColor;
        dashboardActive.value.borderRadius = "0";
        dashboardActive.value.color = defaultColor;
        dashboardActive.value.fontWeight=defaultFontWeight;
        inventoryActive.value.backgroundColor = defaultBgColor;
        inventoryActive.value.borderRadius = "0";
        inventoryActive.value.color = defaultColor;
        inventoryActive.value.fontWeight=defaultFontWeight;
        orderActive.value.backgroundColor = defaultBgColor;
        orderActive.value.borderRadius = "0";
        orderActive.value.color = defaultColor;
        orderActive.value.fontWeight=defaultFontWeight;
        purchaseActive.value.backgroundColor = defaultBgColor;
        purchaseActive.value.borderRadius = "0";
        purchaseActive.value.color = defaultColor;
        purchaseActive.value.fontWeight=defaultFontWeight;
        reportingActive.value.backgroundColor = defaultBgColor;
        reportingActive.value.borderRadius = "0";
        reportingActive.value.color = defaultColor;
        reportingActive.value.fontWeight=defaultFontWeight;
        supportActive.value.backgroundColor = defaultBgColor;
        supportActive.value.borderRadius = "0";
        supportActive.value.color = defaultColor;
        supportActive.value.fontWeight=defaultFontWeight;
        settingActive.value.backgroundColor = defaultBgColor;
        settingActive.value.borderRadius = "0";
        settingActive.value.color = defaultColor;
        settingActive.value.fontWeight=defaultFontWeight;
        profileBorderStyle.value.borderRadius= "0 0 100px 0";
        loginBorderStyle.value.borderRadius= "0";
    };

    const sideNavDashboardClick = () => {
        resetColors();
        dashboardActive.value.backgroundColor = activeBgColor;
        dashboardActive.value.borderRadius = "0";
        dashboardActive.value.color = activeColor;
        dashboardActive.value.fontWeight=activeFontWeight;
        inventoryActive.value.borderRadius = "0 100px 0 0";
    };

    const sideNavInventoryClick = () => {
        resetColors();
        inventoryActive.value.backgroundColor = activeBgColor;
        inventoryActive.value.borderRadius = "0";
        inventoryActive.value.color = activeColor;
        inventoryActive.value.fontWeight=activeFontWeight;
        dashboardActive.value.borderRadius = "0 0 100px 0";
        orderActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value.borderRadius="0";
    };

    const sideNavOrderClick = () => {
        resetColors();
        orderActive.value.backgroundColor = activeBgColor;
        orderActive.value.borderRadius = "0";
        orderActive.value.color = activeColor;
        orderActive.value.fontWeight=activeFontWeight;
        inventoryActive.value.borderRadius = "0 0 100px 0";
        purchaseActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value.borderRadius="0";
    };

    const sideNavPurchaseClick = () => {
        resetColors();
        purchaseActive.value.backgroundColor = activeBgColor;
        purchaseActive.value.borderRadius = "0";
        purchaseActive.value.color = activeColor;
        purchaseActive.value.fontWeight=activeFontWeight;
        orderActive.value.borderRadius = "0 0 100px 0";
        reportingActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value.borderRadius="0";
    };

    const sideNavReportingClick = () => {
        resetColors();
        reportingActive.value.backgroundColor = activeBgColor;
        reportingActive.value.borderRadius = "0";
        reportingActive.value.color = activeColor;
        reportingActive.value.fontWeight=activeFontWeight;
        purchaseActive.value.borderRadius = "0 0 100px 0";
        supportActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value.borderRadius="0";
    };

    const sideNavSupportClick = () => {
        resetColors();
        supportActive.value.backgroundColor = activeBgColor;
        supportActive.value.borderRadius = "0";
        supportActive.value.color = activeColor;
        supportActive.value.fontWeight=activeFontWeight;
        reportingActive.value.borderRadius = "0 0 100px 0";
        settingActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value.borderRadius="0";
    };

    const sideNavSettingClick = () => {
        resetColors();
        settingActive.value.backgroundColor = activeBgColor;
        settingActive.value.borderRadius = "0";
        settingActive.value.color = activeColor;
        settingActive.value.fontWeight=activeFontWeight;
        supportActive.value.borderRadius = "0 0 100px 0";
        profileBorderStyle.value.borderRadius="0";
        loginBorderStyle.value.borderRadius="0 100px 0 0";
    };

    return {dashboardActive, inventoryActive, orderActive, purchaseActive, reportingActive, supportActive, settingActive, profileBorderStyle, loginBorderStyle, sideNavDashboardClick, sideNavInventoryClick, sideNavOrderClick, sideNavPurchaseClick, sideNavReportingClick, sideNavSupportClick, sideNavSettingClick};
});