import { Project } from "ts-morph";
import fs from "fs";
import path from "path";

const project = new Project();
const apiFilePath = path.join(process.cwd(), "src", "gas", "api.ts");
const outputFilePath = path.join(
  process.cwd(),
  "src",
  "svelte",
  "types",
  "google.script.run.d.ts"
);
const sourceFile = project.addSourceFileAtPath(apiFilePath);
const exports = sourceFile.getExportedDeclarations();

let exportedFunctions = [];

exports.forEach((nodes, name) => {
  nodes.forEach((node) => {
    if (node.getKindName() === "FunctionDeclaration") {
      const functionDecl = node;
      const parameters = functionDecl.getParameters();
      const parameterStrings = parameters.map((param) => {
        return `${param.getName()}: ${param.getType().getText()}`;
      });

      const args = parameterStrings.join(", ");

      exportedFunctions.push(`${name}(${args}): GoogleScriptRun`);
    }
  });
});

const outputContent = `
declare namespace google.script {  
  interface GoogleScriptRun {
      withFailureHandler(callback: (error: Error, object?: any) => void): this;
      withSuccessHandler(callback: (value: any, object?: any) => void): this;
      withUserObject(object: Object): this;
      ${exportedFunctions.join(";\n  ")}
  }
  const run : GoogleScriptRun;
}
`;

fs.writeFileSync(outputFilePath, outputContent);
console.log(`Type definitions written to ${outputFilePath}`);
