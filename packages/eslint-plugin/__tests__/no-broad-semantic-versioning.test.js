const rule = require("../rules/no-broad-semantic-versioning");
const { RuleTester } = require("eslint");

const ruleTester = new RuleTester();

/**
 * ruleTester.run(命名，rule规则，校验);校验：valid: [] => 代表有效的校验, invalid: [] => 代表无效的校验
 *
 * valid中可以有的配置：
 * code：表示符合规则的代码字符串。
 * filename：表示符合规则的代码所在的文件名，可以是绝对路径或相对路径。
 * options：表示符合规则的代码的配置选项，是一个数组或对象。
 * parserOptions：表示符合规则的代码的解析选项，是一个对象。
 * output：表示符合规则的代码应该输出的结果，是一个字符串。
 * errors：表示符合规则的代码应该产生的错误，是一个数组，数组中的每个元素都是一个对象，表示一个错误信息。
 * 每个错误信息对象可以包含以下属性：
 *  message：表示错误信息的字符串。
 *  line：表示错误发生的行数。
 *  column：表示错误发生的列数。
 */
ruleTester.run("no-broad-semantic-versioning", rule, {
  valid: [
    {
      filename: "package.json",
      code: `module.exports = ${JSON.stringify({
        devDependencies: { "zl-eslint-plugin": "^0.0.5" },
      })}`,
    },
    {
      filename: "package.js",
      code: "var t = 1",
    },
  ],

  invalid: [
    {
      filename: "package.json",
      code: `module.exports = ${JSON.stringify({
        devDependencies: { "zl-eslint-plugin": "*" },
      })}`,
      errors: [
        {
          message: 'The "zl-eslint-plugin" is not recommended to use "*"',
        },
      ],
    },
  ],
});
