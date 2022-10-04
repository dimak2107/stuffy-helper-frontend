const { generateApi } = require("swagger-typescript-api");
const path = require("path");
const OUTPUT_FILE_DIRECTORY = path.resolve(__dirname, "src/api/__generated__");
const INPUT_FILE = path.resolve(__dirname, "swagger.json");
console.log(INPUT_FILE);
generateApi({
  name: "api.ts",
  // input: INPUT_FILE,
  url: "http://194.67.110.244:7777/swagger/v1/swagger.json",
  output: OUTPUT_FILE_DIRECTORY,
  httpClientType: "axios", // or "fetch"
  generateClient: true,
  generateRouteTypes: false,
});
