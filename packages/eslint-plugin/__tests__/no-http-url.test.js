"use strict";

const rule = require("../rules/no-http-url");
const { RuleTester } = require("eslint");

const ruleTester = new RuleTester();

ruleTester.run("no-http-url", rule, {
  valid: [
    {
      code: "var test = 'https://zhengzl.com';",
    },
  ],

  invalid: [
    {
      code: "var test = 'http://zhengzl.com';",
      output: "var test = 'http://zhengzl.com';",
      errors: [
        {
          message: 'Recommended "http://zhengzl.com" switch to HTTPS',
        },
      ],
    },
    {
      code: "<img src='http://zhengzl.com' />",
      output: "<img src='http://zhengzl.com' />",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: 'Recommended "http://zhengzl.com" switch to HTTPS',
        },
      ],
    },
  ],
});
