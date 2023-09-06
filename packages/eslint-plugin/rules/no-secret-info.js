/**
 * 对于想secret等涉及安全信息不要将key对应的值直接填写对应秘钥
 * type: 'problem'
 */

const RULE_NAME = "no-secret-info";

const DEFAULT_DANGEROUTS_KEYS = ["secret", "password", "token"];

module.exports = {
  name: RULE_NAME,
  meta: {
    type: "problem",
    fixable: null,
    messages: {
      noSecretInfo:
        'Detect that the "{{secret}}" might be a secret token, Please check!',
    },
  },
  create(context) {
    const ruleOptions = context.options[0] || {};
    let { dangerousKeys = [], autoMerge = true } = ruleOptions;
    if (dangerousKeys.length === 0) {
      dangerousKeys = DEFAULT_DANGEROUTS_KEYS;
    } else if (autoMerge) {
      dangerousKeys = [
        ...new Set([...DEFAULT_DANGEROUTS_KEYS, ...dangerousKeys]),
      ];
    }

    const reg = new RegExp(dangerousKeys.join("|"));

    return {
      Literal: function handleRequires(node) {
        if (
          node.value &&
          node.parent &&
          ((node.parent.type === "VariableDeclarator" &&
            node.parent.id &&
            node.parent.id.name &&
            reg.test(node.parent.id.name.toLocaleLowerCase())) ||
            (node.parent.type === "Property" &&
              node.parent.key.name &&
              reg.test(node.parent.key.name.toLocaleLowerCase())))
        ) {
          context.report({
            node,
            messageId: "noSecretInfo",
            data: {
              secret: node.value,
            },
          });
        }
      },
    };
  },
};
