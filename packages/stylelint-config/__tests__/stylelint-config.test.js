// assert is used to test your code is ok
const assert = require("assert");
const stylelint = require("stylelint");
const path = require("path");

// describe first parameter is the name of the test
describe("test/stylelint-config", () => {
  it("Validate default", async () => {
    const filePaths = [path.join(__dirname, "./fixtures/index.css")];

    // configFile is your stylelint config; files is the list of fixtures; fix is whether to fix
    const result = await stylelint.lint({
      configFile: path.join(__dirname, "../index.js"),
      files: filePaths,
      fix: false,
    });

    // the serverity of the result is errored
    if (result && result.errored) {
      const fileResults = JSON.parse(result.output || "[]") || [];
      fileResults.forEach((fileRes) => {
        console.log(`---${filePaths}--->`, fileRes.warnings);
      });
      assert.ok(fileResults.length !== 0);
    }
  });

  // test scss
  it("Validate scss", async () => {
    const filePaths = [path.join(__dirname, "./fixtures/sass-test.scss")];
    const result = await stylelint.lint({
      configFile: path.join(__dirname, "../index.js"),
      files: filePaths,
      fix: false,
    });

    if (result && result.errored) {
      const fileResults = JSON.parse(result.output || "[]") || [];
      fileResults.forEach((fileRes) => {
        console.log(`---${filePaths}--->`, fileRes.warnings);
      });
      assert.ok(fileResults.length !== 0);
    }
  });

  // test less
  it("Validate less", async () => {
    const filePaths = [path.join(__dirname, "./fixtures/less-test.less")];
    const result = await stylelint.lint({
      configFile: path.join(__dirname, "../index.js"),
      files: filePaths,
      fix: false,
    });

    if (result && result.errored) {
      const fileResults = JSON.parse(result.output || "[]") || [];
      fileResults.forEach((fileRes) => {
        console.log(`---${filePaths}--->`, fileRes.warnings);
      });
      assert.ok(fileResults.length !== 0);
    }
  });

  // you can test other config like above
});
