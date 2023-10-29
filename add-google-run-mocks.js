import { Project } from "ts-morph";
import fs from "fs";
import path from "path";

// Initialize ts-morph Project and add source files
const project = new Project();
const apiFilePath = path.join(process.cwd(), "src", "gas", "api.ts");
const mockApiFilePath = path.join(
  process.cwd(),
  "src",
  "svelte",
  "mock",
  "mockApi.ts"
);
const apiSourceFile = project.addSourceFileAtPath(apiFilePath);
const mockApiSourceFile = project.addSourceFileAtPath(mockApiFilePath);

// Get exported functions from api.ts
const apiExports = apiSourceFile.getExportedDeclarations();
let apiFunctions = {};

apiExports.forEach((nodes, name) => {
  nodes.forEach((node) => {
    if (node.getKindName() === "FunctionDeclaration") {
      const functionDecl = node;
      const parameters = functionDecl.getParameters();
      const parameterStrings = parameters.map((param) => {
        return `${param.getName()}: ${param.getType().getText()}`;
      });

      const args = parameterStrings.join(", ");
      const returnType = functionDecl.getReturnType().getText();

      apiFunctions[name] = { args, returnType };
    }
  });
});

// Get functions from mockApi.ts
const mockApiFunctions = mockApiSourceFile.getFunctions();
let mockFunctionNames = mockApiFunctions.map((f) => f.getName());

// Find missing functions
const missingFunctions = Object.keys(apiFunctions).filter(
  (f) => !mockFunctionNames.includes(f)
);

// Append placeholders for missing functions to mockApi.ts
if (missingFunctions.length > 0) {
  let placeholders = "";
  for (const funcName of missingFunctions) {
    const { args, returnType } = apiFunctions[funcName];
    let returnStatement =
      returnType === "void" ? "" : `return ${getReturnStatement(returnType)}`;
    placeholders += `\n\nexport function ${funcName}(${args}): ${returnType} {\n  ${returnStatement}\n}`;
  }
  fs.appendFileSync(mockApiFilePath, placeholders);
  console.log("Added missing functions to mockApi.ts");
} else {
  console.log("No missing functions.");
}
function getReturnStatement(returnType) {
  switch (returnType) {
    case "string":
      return '"hello"';
    case "number":
      return "17";
    case "boolean":
      return "true";
    // Add more cases as needed
    default:
      return `null; // TODO: Replace with mock return value of type ${returnType}`;
  }
}
