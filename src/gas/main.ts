export {
  serveSvelte,
  doGet,
  showDialog,
  showDocDialog,
  showSlidesDialog,
  showSpreadsheetDialog,
} from "./serve";
export * from "./api";

function hello() {
  console.log("Hello world!");
}

function world() {
  console.log("Hello wrold without export???");
}
