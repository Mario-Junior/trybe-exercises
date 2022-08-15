module.exports = {
  "extends": "@istanbuljs/nyc-config-typescript",
  "include": [
    "src/models",
    "src/services",
    "src/controllers"
  ],
  "reporter": [
    "text",
    "text-summary",
    "json-summary",
    "html",
    "lcov"
  ],
}
