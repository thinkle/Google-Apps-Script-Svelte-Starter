import "./app.css";
import App from "./App.svelte";
import * as mockApi from "./mock/mockApi";
import { GoogleMock } from "google-apps-script-run-ts-mocks";
if (process.env.NODE_ENV === "development") {
  globalThis.google = new GoogleMock(mockApi);
}
const app = new App({
  target: document.getElementById("app"),
});

export default app;
