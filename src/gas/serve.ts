const IDX = "index.html"; // file name for svelte output
const APPNAME = `My App`;

import { getAddOnEnvironment } from "./addOn";

export function doGet(e) {
  return HtmlService.createHtmlOutputFromFile(IDX);
}

export function showSidebar() {
  let template = HtmlService.createTemplateFromFile(IDX);
  let addOn = getAddOnEnvironment();
  template.context = `${addOn}.sidebar`;
  let html = template.evaluate();
  let app = getAppForAddOn(addOn);
  if (app) {
    app.getUi().showSidebar(html);
  }
}

export function getAppForAddOn(
  addOn: "Slides" | "Docs" | "Sheets" | "Unknown"
) {
  if (addOn == "Slides") {
    return SlidesApp;
  } else if (addOn == "Docs") {
    return DocumentApp;
  } else if (addOn == "Sheets") {
    return SpreadsheetApp;
  }
  throw new Error(`Unknown addOn ${addOn}`);
}

export function showDialog(title: string = APPNAME, modal = true) {
  let addOn = getAddOnEnvironment();
  let template = HtmlService.createTemplateFromFile(IDX);
  let context = `${addOn}.dialog.${modal ? "modal" : "modeless"}`;
  template.context = template;
  let app = getAppForAddOn(addOn);
  let html = template.evaluate();
  if (modal) {
    app.getUi().showModalDialog(html, title);
  } else {
    app.getUi().showModelessDialog(html, title);
  }
}
