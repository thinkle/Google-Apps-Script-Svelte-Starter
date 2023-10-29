import "./app.css";
import App from "./App.svelte";
import google from "./mock/mockGoogle";

if (process.env.NODE_ENV === "development") {
  globalThis.google = google;
}
const app = new App({
  target: document.getElementById("app"),
});

export default app;
