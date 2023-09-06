/**
 * 建议不要在ts项目混入非白名单下的js文件
 * type: 'suggestion'
 */

const path = require("path");

const RULE_NAME = "no-js-in-ts-project";

const JS_REG = /\.jsx?$/;

// 默认白名单
const DEFAULT_WHITE_LIST = [
  "commitlint.config.js",
  "eslintrc.js",
  "prettierrc.js",
  "stylelintrc.js",
];

module.exports = {
  name: RULE_NAME,
  meta: {
    type: "suggestion",
    fixable: null,
    messages: {
      noJsInTsProject: 'The "{{fileName}}" is not recommended in TS project',
    },
  },
  create(context) {
    const fileName = context.getFilename();
    const extName = path.extname(fileName);
    // 规则的配置项
    const ruleOptions = context.options[0] || {};
    // 如果我们配置了whiteList 和 autoMerge， 则获取相应规则的值
    let { whiteList = [], autoMerge = true } = ruleOptions;
    if (whiteList.length === 0) {
      // 默认白名单
      whiteList = DEFAULT_WHITE_LIST;
    } else if (autoMerge) {
      whiteList = [...new Set([...DEFAULT_WHITE_LIST, ...whiteList])];
    }
    const whiteListReg = new RegExp(`(${whiteList.join("|")})$`);

    // 非白名单文件且后缀是js或jsx
    if (!whiteListReg.test(fileName) && JS_REG.test(extName)) {
      context.report({
        loc: {
          start: {
            line: 0,
            column: 0,
          },
          end: {
            line: 0,
            column: 0,
          },
        },
        messageId: "noJsInTsProject",
        data: {
          fileName,
        },
      });
    }

    // create 需返回一个对象，我们这里无需操作ast，所以直接返回空对象
    return {};
  },
};
