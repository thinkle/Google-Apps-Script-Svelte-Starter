import { DEFAULT_CONTEXT } from "../context";

export type AddOnContext = {
  addOn: "Slides" | "Docs" | "Sheets" | "Unknown";
  container: "dialog" | "sidebar";
  mode?: "modal" | "modeless";
  localTesting?: boolean;
  params?: string[];
};

export function parseContext(context): AddOnContext {
  if (context[0] == "<") {
    return DEFAULT_CONTEXT;
  }
  let [addOn, container, ...rest] = context.split(".");
  let returnValue: AddOnContext = {
    addOn,
    container,
  };
  if (rest.length) {
    returnValue.mode = rest[0];
  }
  if (rest.length > 1) {
    returnValue.params = rest.slice(1);
  }
  return returnValue;
}
