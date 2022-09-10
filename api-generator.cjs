const { generateApi } = require("swagger-typescript-api");
const path = require("path");
const OUTPUT_FILE_DIRECTORY = path.resolve(__dirname, "src/api/__generated__");
const INPUT_FILE = path.resolve(__dirname, "swagger.json");
console.log(INPUT_FILE);
generateApi({
  name: "api.ts",
  input: INPUT_FILE,
  // url: getSwaggerFileUrl('api/api.swagger.yaml'),
  output: OUTPUT_FILE_DIRECTORY,
  httpClientType: "axios", // or "fetch"
  generateClient: true,
  generateRouteTypes: false,
});
