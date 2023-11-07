export interface AddOnInterface {
  initUi: () => GoogleAppsScript.Base.Ui;
  addToMenu: (menu: GoogleAppsScript.Base.Menu) => void;
}

export interface UniversalMenuInterface {
  addToMenu: (menu: GoogleAppsScript.Base.Menu) => void;
}

const universalMenu: UniversalMenuInterface = {
  addToMenu(menu: GoogleAppsScript.Base.Menu) {
    menu.addItem("Show Dialog", "showDialog");
    menu.addItem("Show Sidebar", "showSidebar");
  },
};

export function getAddOnEnvironment():
  | "Slides"
  | "Docs"
  | "Sheets"
  | "Unknown" {
  if (typeof SlidesApp !== "undefined" && SlidesApp.getUi()) {
    return "Slides";
  } else if (typeof DocumentApp !== "undefined" && DocumentApp.getUi()) {
    return "Docs";
  } else if (typeof SpreadsheetApp !== "undefined" && SpreadsheetApp.getUi()) {
    return "Sheets";
  } else {
    return "Unknown";
  }
}

export function onOpen(e: any): void {
  // Call all registered AddOn onOpen methods...
  let ui: GoogleAppsScript.Base.Ui;
  let menu: GoogleAppsScript.Base.Menu;
  let specificAddOn: AddOnInterface;
  let addOnType = getAddOnEnvironment();
  if (addOnType == "Slides") {
    specificAddOn = slidesAddOn;
  }
  if (specificAddOn) {
    ui = specificAddOn.initUi();
    let menu = ui.createAddonMenu();
    specificAddOn.addToMenu(menu);
    universalMenu.addToMenu(menu);
    menu.addToUi();
  }
}

export function onInstall(e) {
  // Call all registered AddOn onInstall methods
}
