// require.resolve 用来获取文件的绝对路径，因此这里extends后的数组最终拿到的是所有文件的绝对路径

module.exports = {
  extends: ["./index", "./rules/node"].map(require.resolve),
};
