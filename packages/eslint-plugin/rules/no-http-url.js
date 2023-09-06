/**
 * 建议使用 https，而不是 http
 * type: 'suggestion'
 */

const RULE_NAME = "no-http-url";

module.exports = {
  name: RULE_NAME,
  meta: {
    // 规则的类型problem|suggestion|layout
    // problem: 这条规则识别的代码可能会导致错误或让人迷惑。应该优先解决这个问题
    // suggestion: 这条规则识别的代码不会导致错误，但是建议用更好的方式
    // layout: 表示这条规则主要关心像空格、分号等这种问题
    type: "suggestion",
    fixable: null,
    messages: {
      noHttpUrl: `Recommended "{{url}}" switch to HTTPS`,
    },
  },

  // create 是和ast相关的方法，context表示这条规则上下文信息
  create(context) {
    // 返回一个对象，这个对象就是visitor访问者对象
    return {
      // Literal是ast的节点类型，当遇到函数调用的时候会调用此方法，并把节点传入
      Literal: function handleRequires(node) {
        if (
          node.value &&
          typeof node.value === "string" &&
          node.value.indexOf("http:") === 0
        ) {
          // report：校验不通过时返回信息
          context.report({
            node,
            // id和上面的message中key对应
            messageId: "noHttpUrl",
            data: {
              url: node.value,
            },
          });
        }
      },
    };
  },
};
