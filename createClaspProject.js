import { execSync } from "child_process";
import { writeFileSync, readFileSync } from "fs";

const claspJSON = {
  scriptId: "",
  rootDir: "dist/",
};

try {
  // Read package.json and get the project name
  const packageJSON = JSON.parse(readFileSync("package.json", "utf-8"));
  const projectName = packageJSON.name || "Unnamed Project";

  // Run clasp create and capture the script ID
  const output = execSync(
    `mkdir dist && npx clasp create --title "${projectName}" --type standalone --rootDir dist/`,
    { encoding: "utf-8" }
  );
} catch (err) {
  console.log("Oops ", err);
}
