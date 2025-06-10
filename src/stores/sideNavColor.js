import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSideNavColorStore = defineStore('sideNavColor', () => {
    const defaultBgColor = "#93200B";
    const activeBgColor = "#bd776b";
    const defaultColor="#FFFFFF";
    const activeColor="#93200B";
    const activeFontWeight= "900";
    const defaultFontWeight="200";

    const dashboardActive = ref({ backgroundColor: activeBgColor, borderRadius: "0", color: activeColor, fontWeight:activeFontWeight, borderRight: "0", borderBottom:"0", borderTop: "0" });
    const inventoryActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0 100px 0 0", color: defaultColor, fontWeight:defaultFontWeight, borderRight: "9px outset #723a3052", borderBottom:"0", borderTop: "5px outset #723a3052" });
    const orderActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0", color: defaultColor, fontWeight:defaultFontWeight, borderRight: "9px outset #723a3052", borderBottom:"0", borderTop: "0" });
    const purchaseActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0", color: defaultColor, fontWeight:defaultFontWeight, borderRight: "9px outset #723a3052", borderBottom:"0", borderTop: "0" });
    const reportingActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0", color: defaultColor, fontWeight:defaultFontWeight, borderRight: "9px outset #723a3052", borderBottom:"0", borderTop: "0" });
    const supportActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0", color: defaultColor, fontWeight:defaultFontWeight, borderRight: "9px outset #723a3052", borderBottom:"0", borderTop: "0" });
    const settingActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0", color: defaultColor, fontWeight:defaultFontWeight, borderRight: "9px outset #723a3052", borderBottom:"0", borderTop: "0" });
    const profileBorderStyle=ref({borderRadius: "0 0 100px 0", borderRight: "9px outset #723a3052", borderBottom: "5px outset #723a3052"});
    const loginBorderStyle=ref({borderRadius: "0", borderRight: "9px outset #723a3052", borderTop:"0"});

    const resetColors = () => {
        dashboardActive.value.backgroundColor = defaultBgColor;
        dashboardActive.value.borderRadius = "0";
        dashboardActive.value.color = defaultColor;
        dashboardActive.value.fontWeight=defaultFontWeight;
        dashboardActive.value.borderRight="9px outset #723a3052";
        dashboardActive.value.borderTop="0";
        dashboardActive.value.borderBottom="0";
        // 9px outset #723a3052
        // 5px outset #723a3052
        inventoryActive.value.backgroundColor = defaultBgColor;
        inventoryActive.value.borderRadius = "0";
        inventoryActive.value.color = defaultColor;
        inventoryActive.value.fontWeight=defaultFontWeight;
        inventoryActive.value.borderRight="9px outset #723a3052";
        inventoryActive.value.borderTop="0";
        inventoryActive.value.borderBottom="0";
        orderActive.value.backgroundColor = defaultBgColor;
        orderActive.value.borderRadius = "0";
        orderActive.value.color = defaultColor;
        orderActive.value.fontWeight=defaultFontWeight;
        orderActive.value.borderRight="9px outset #723a3052";
        orderActive.value.borderTop="0";
        orderActive.value.borderBottom="0";
        purchaseActive.value.backgroundColor = defaultBgColor;
        purchaseActive.value.borderRadius = "0";
        purchaseActive.value.color = defaultColor;
        purchaseActive.value.fontWeight=defaultFontWeight;
        purchaseActive.value.borderRight="9px outset #723a3052";
        purchaseActive.value.borderTop="0";
        purchaseActive.value.borderBottom="0";
        reportingActive.value.backgroundColor = defaultBgColor;
        reportingActive.value.borderRadius = "0";
        reportingActive.value.color = defaultColor;
        reportingActive.value.fontWeight=defaultFontWeight;
        reportingActive.value.borderRight="9px outset #723a3052";
        reportingActive.value.borderTop="0";
        reportingActive.value.borderBottom="0";
        supportActive.value.backgroundColor = defaultBgColor;
        supportActive.value.borderRadius = "0";
        supportActive.value.color = defaultColor;
        supportActive.value.fontWeight=defaultFontWeight;
        supportActive.value.borderRight="9px outset #723a3052";
        supportActive.value.borderTop="0";
        supportActive.value.borderBottom="0";
        settingActive.value.backgroundColor = defaultBgColor;
        settingActive.value.borderRadius = "0";
        settingActive.value.color = defaultColor;
        settingActive.value.fontWeight=defaultFontWeight;
        settingActive.value.borderRight="9px outset #723a3052";
        settingActive.value.borderTop="0";
        settingActive.value.borderBottom="0";
        profileBorderStyle.value.borderRadius= "0 0 100px 0";
        profileBorderStyle.value.borderRight="9px outset #723a3052";
        profileBorderStyle.value.borderBottom="5px outset #723a3052";
        loginBorderStyle.value.borderRadius= "0";
        loginBorderStyle.value.borderRight="9px outset #723a3052";
        loginBorderStyle.value.borderTop="0";
    };

    const sideNavDashboardClick = () => {
        resetColors();
        dashboardActive.value.backgroundColor = activeBgColor;
        dashboardActive.value.borderRadius = "0";
        dashboardActive.value.color = activeColor;
        dashboardActive.value.fontWeight=activeFontWeight;
        dashboardActive.value.borderRight="0";
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
        profileBorderStyle.value.borderBottom="0";
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
        profileBorderStyle.value.borderBottom="0";
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
        profileBorderStyle.value.borderBottom="0";
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
        profileBorderStyle.value.borderBottom="0";
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
        profileBorderStyle.value.borderBottom="0";
    };

    const sideNavSettingClick = () => {
        resetColors();
        settingActive.value.backgroundColor = activeBgColor;
        settingActive.value.borderRadius = "0";
        settingActive.value.color = activeColor;
        settingActive.value.fontWeight=activeFontWeight;
        supportActive.value.borderRadius = "0 0 100px 0";
        profileBorderStyle.value.borderRadius="0";
        profileBorderStyle.value.borderBottom="0";
        loginBorderStyle.value.borderRadius="0 100px 0 0";
        loginBorderStyle.value.borderTop="5px outset #723a3052";
    };

    return {dashboardActive, inventoryActive, orderActive, purchaseActive, reportingActive, supportActive, settingActive, profileBorderStyle, loginBorderStyle, sideNavDashboardClick, sideNavInventoryClick, sideNavOrderClick, sideNavPurchaseClick, sideNavReportingClick, sideNavSupportClick, sideNavSettingClick};
});