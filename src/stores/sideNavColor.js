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
    const assetActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0 100px 0 0", color: defaultColor, fontWeight:defaultFontWeight, borderRight: "9px outset #723a3052", borderBottom:"0", borderTop: "5px outset #723a3052" });
    const incomeActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0", color: defaultColor, fontWeight:defaultFontWeight, borderRight: "9px outset #723a3052", borderBottom:"0", borderTop: "0" });
    const expenseActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0", color: defaultColor, fontWeight:defaultFontWeight, borderRight: "9px outset #723a3052", borderBottom:"0", borderTop: "0" });
    const savingActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0", color: defaultColor, fontWeight:defaultFontWeight, borderRight: "9px outset #723a3052", borderBottom:"0", borderTop: "0" });
    const investmentActive = ref({ backgroundColor: defaultBgColor, borderRadius: "0", color: defaultColor, fontWeight:defaultFontWeight, borderRight: "9px outset #723a3052", borderBottom:"0", borderTop: "0" });
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
        assetActive.value.backgroundColor = defaultBgColor;
        assetActive.value.borderRadius = "0";
        assetActive.value.color = defaultColor;
        assetActive.value.fontWeight=defaultFontWeight;
        assetActive.value.borderRight="9px outset #723a3052";
        assetActive.value.borderTop="0";
        assetActive.value.borderBottom="0";
        incomeActive.value.backgroundColor = defaultBgColor;
        incomeActive.value.borderRadius = "0";
        incomeActive.value.color = defaultColor;
        incomeActive.value.fontWeight=defaultFontWeight;
        incomeActive.value.borderRight="9px outset #723a3052";
        incomeActive.value.borderTop="0";
        incomeActive.value.borderBottom="0";
        expenseActive.value.backgroundColor = defaultBgColor;
        expenseActive.value.borderRadius = "0";
        expenseActive.value.color = defaultColor;
        expenseActive.value.fontWeight=defaultFontWeight;
        expenseActive.value.borderRight="9px outset #723a3052";
        expenseActive.value.borderTop="0";
        expenseActive.value.borderBottom="0";
        savingActive.value.backgroundColor = defaultBgColor;
        savingActive.value.borderRadius = "0";
        savingActive.value.color = defaultColor;
        savingActive.value.fontWeight=defaultFontWeight;
        savingActive.value.borderRight="9px outset #723a3052";
        savingActive.value.borderTop="0";
        savingActive.value.borderBottom="0";
        investmentActive.value.backgroundColor = defaultBgColor;
        investmentActive.value.borderRadius = "0";
        investmentActive.value.color = defaultColor;
        investmentActive.value.fontWeight=defaultFontWeight;
        investmentActive.value.borderRight="9px outset #723a3052";
        investmentActive.value.borderTop="0";
        investmentActive.value.borderBottom="0";
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
        assetActive.value.borderRadius = "0 100px 0 0";
    };

    const sideNavassetClick = () => {
        resetColors();
        assetActive.value.backgroundColor = activeBgColor;
        assetActive.value.borderRadius = "0";
        assetActive.value.color = activeColor;
        assetActive.value.fontWeight=activeFontWeight;
        dashboardActive.value.borderBottom="5px outset #723a3052";
        incomeActive.value.borderTop="5px outset #723a3052";
        dashboardActive.value.borderRadius = "0 0 100px 0";
        incomeActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value.borderRadius="0";
        profileBorderStyle.value.borderBottom="0";
    };

    const sideNavOrderClick = () => {
        resetColors();
        incomeActive.value.backgroundColor = activeBgColor;
        incomeActive.value.borderRadius = "0";
        incomeActive.value.color = activeColor;
        incomeActive.value.fontWeight=activeFontWeight;
        assetActive.value.borderRadius = "0 0 100px 0";
        assetActive.value.borderBottom="5px outset #723a3052";
        expenseActive.value.borderTop="5px outset #723a3052";
        expenseActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value.borderRadius="0";
        profileBorderStyle.value.borderBottom="0";
    };

    const sideNavPurchaseClick = () => {
        resetColors();
        expenseActive.value.backgroundColor = activeBgColor;
        expenseActive.value.borderRadius = "0";
        expenseActive.value.color = activeColor;
        expenseActive.value.fontWeight=activeFontWeight;
        incomeActive.value.borderRadius = "0 0 100px 0";
        incomeActive.value.borderBottom="5px outset #723a3052";
        savingActive.value.borderTop="5px outset #723a3052";
        savingActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value.borderRadius="0";
        profileBorderStyle.value.borderBottom="0";
    };

    const sideNavReportingClick = () => {
        resetColors();
        savingActive.value.backgroundColor = activeBgColor;
        savingActive.value.borderRadius = "0";
        savingActive.value.color = activeColor;
        savingActive.value.fontWeight=activeFontWeight;
        expenseActive.value.borderRadius = "0 0 100px 0";
        investmentActive.value.borderRadius = "0 100px 0 0";
        profileBorderStyle.value.borderRadius="0";
        profileBorderStyle.value.borderBottom="0";
    };

    const sideNavSupportClick = () => {
        resetColors();
        investmentActive.value.backgroundColor = activeBgColor;
        investmentActive.value.borderRadius = "0";
        investmentActive.value.color = activeColor;
        investmentActive.value.fontWeight=activeFontWeight;
        savingActive.value.borderRadius = "0 0 100px 0";
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
        investmentActive.value.borderRadius = "0 0 100px 0";
        profileBorderStyle.value.borderRadius="0";
        profileBorderStyle.value.borderBottom="0";
        loginBorderStyle.value.borderRadius="0 100px 0 0";
        loginBorderStyle.value.borderTop="5px outset #723a3052";
    };

    return {dashboardActive, assetActive, incomeActive, expenseActive, savingActive, investmentActive, settingActive, profileBorderStyle, loginBorderStyle, sideNavDashboardClick, sideNavassetClick, sideNavOrderClick, sideNavPurchaseClick, sideNavReportingClick, sideNavSupportClick, sideNavSettingClick};
});