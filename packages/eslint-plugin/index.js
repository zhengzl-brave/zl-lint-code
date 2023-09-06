const path = require("path");
const requireAll = require("require-all");

exports.rules = requireAll({
  dirname: path.resolve(__dirname, "rules"),
});

exports.configs = requireAll({
  dirname: path.resolve(__dirname, "configs"),
});

// 自定义处理器
exports.processors = {
  ".json": {
    preprocess(text) {
      // As Js File
      return [`module.exports = ${text}`];
    },
  },
};
