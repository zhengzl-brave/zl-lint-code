(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{307:function(e,t,s){"use strict";s.r(t);var a=s(14),_=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"git-规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-规范"}},[e._v("#")]),e._v(" Git 规范")]),e._v(" "),t("h2",{attrs:{id:"_1-git-提交日志格式规约"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-git-提交日志格式规约"}},[e._v("#")]),e._v(" 1. Git 提交日志格式规约")]),e._v(" "),t("h3",{attrs:{id:"_1-1-前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-前言"}},[e._v("#")]),e._v(" 1.1. 前言")]),e._v(" "),t("p",[e._v("为什么要对 "),t("code",[e._v("Git")]),e._v(" 提交日志（"),t("code",[e._v("message")]),e._v("）的格式进行规约约束？")]),e._v(" "),t("ol",[t("li",[e._v("更方便、快捷地浏览和了解项目的历史信息。")]),e._v(" "),t("li",[e._v("有利于保证提交内容的独立性，避免把所有改动都放在一个提交里面。")]),e._v(" "),t("li",[e._v("便于通过脚本自动化生成 "),t("code",[e._v("CHANGELOG")]),e._v("。")])]),e._v(" "),t("h3",{attrs:{id:"_1-2-基本的-message-格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-基本的-message-格式"}},[e._v("#")]),e._v(" 1.2. 基本的 "),t("code",[e._v("message")]),e._v(" 格式")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<type>[optional scope]: <subject>\n\n[optional body]\n\n[optional footer(s)]\n")])])]),t("p",[e._v("其中 "),t("code",[e._v("message header")]),e._v("（即首行）必选，scope、body 和 footer 可选。")]),e._v(" "),t("h4",{attrs:{id:"_1-2-1-字数限制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-字数限制"}},[e._v("#")]),e._v(" 1.2.1. 字数限制")]),e._v(" "),t("ul",[t("li",[e._v("header（首行）：只有一行，不超过 50 个字符")]),e._v(" "),t("li",[e._v("body：每行不超过 72 个字符")]),e._v(" "),t("li",[e._v("footer：每行不超过 72 个字符")])]),e._v(" "),t("blockquote",[t("p",[e._v("为什么要有字数限制？")]),e._v(" "),t("ul",[t("li",[e._v("header： 像 Linux、Git 这样的开源项目，是以邮件列表作为代码评审的平台，header 要作为邮件的标题，而邮件标题本身就有长度的限制，并且标题太长也不利于浏览和信息获取。")]),e._v(" "),t("li",[e._v("body 和 footer：源于大部分编程语言的编码规范，最初源于打字机宽度等物理设备的限制，后来慢慢成为默认遵守的规范。")])])]),e._v(" "),t("h4",{attrs:{id:"_1-2-2-语言选择"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-语言选择"}},[e._v("#")]),e._v(" 1.2.2. 语言选择")]),e._v(" "),t("p",[t("strong",[e._v("在开源项目中")]),e._v("：推荐使用英文，因为项目的开发者和参与者可能来自世界各地，使用英文可以更广泛的传递信息。")]),e._v(" "),t("p",[t("strong",[e._v("在内部项目（并且短时间内也不涉及开源）中")]),e._v("：应该选择内部人员普遍能够熟练表达的语言。")]),e._v(" "),t("p",[e._v("例如在国内的团队中，可以使用中文。")]),e._v(" "),t("blockquote",[t("p",[e._v("关于使用中文可能会出现乱码的问题：处理字符集和字符编码的问题应该是每个程序员的必修课。")]),e._v(" "),t("p",[e._v("关于使用英文天然正确性的问题：因地制宜，适合的才是最好的。")])]),e._v(" "),t("h3",{attrs:{id:"_1-3-message-header"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-message-header"}},[e._v("#")]),e._v(" 1.3. message header")]),e._v(" "),t("h4",{attrs:{id:"_1-3-1-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-type"}},[e._v("#")]),e._v(" 1.3.1. type")]),e._v(" "),t("p",[t("code",[e._v("type")]),e._v(" 用来描述本次提交的改动类型，可选值及对应含义如下：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("feat")]),e._v(": 新增功能")]),e._v(" "),t("li",[t("code",[e._v("fix")]),e._v(": 修复 bug")]),e._v(" "),t("li",[t("code",[e._v("docs")]),e._v(": 文档相关的改动")]),e._v(" "),t("li",[t("code",[e._v("style")]),e._v(": 对代码的格式化改动，代码逻辑并未产生任何变化(例如代码缩进，分号的移除和添加)")]),e._v(" "),t("li",[t("code",[e._v("test")]),e._v(": 新增或修改测试用例")]),e._v(" "),t("li",[t("code",[e._v("refactor")]),e._v(": 重构代码或其他优化举措")]),e._v(" "),t("li",[t("code",[e._v("chore")]),e._v(": 项目工程方面的改动，代码逻辑并未产生任何变化")]),e._v(" "),t("li",[t("code",[e._v("revert")]),e._v(": 恢复之前的提交")])]),e._v(" "),t("blockquote",[t("p",[e._v("注意：")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("commit message")]),e._v(" 的 "),t("code",[e._v("type")]),e._v(" 和 "),t("code",[e._v("changelog")]),e._v(" 的 "),t("code",[e._v("type")]),e._v(" 存在紧密联系，然而它们两者之间并非一一对应，比如在 "),t("code",[e._v("changelog")]),e._v(" 中一般不会指出文档 "),t("code",[e._v("docs")]),e._v(" 或测试用例 "),t("code",[e._v("test")]),e._v(" 等方面发生的变化")]),e._v(" "),t("li",[t("code",[e._v("css")]),e._v(" 样式文件的修改一般属于 "),t("code",[e._v("feat")]),e._v(" 或者 "),t("code",[e._v("fix")]),e._v("，并不是 "),t("code",[e._v("style")])])])]),e._v(" "),t("h4",{attrs:{id:"_1-3-2-scope"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-scope"}},[e._v("#")]),e._v(" 1.3.2. scope")]),e._v(" "),t("p",[t("code",[e._v("scope")]),e._v(" 用来描述本次提交所涉及到的改动范围（例如模块、功能或其他任何限定的范围）。")]),e._v(" "),t("p",[t("code",[e._v("scope")]),e._v(" 的具体取值视项目而定。以淘宝详情页为例，取值可以是："),t("code",[e._v("header")]),e._v(", "),t("code",[e._v("footer")]),e._v(", "),t("code",[e._v("favorite")]),e._v(", "),t("code",[e._v("sku")]),e._v(", etc...")]),e._v(" "),t("p",[e._v("如果是 "),t("code",[e._v("monorepo")]),e._v(" 的项目，"),t("code",[e._v("scope")]),e._v(" 取值可以是 "),t("code",[e._v("subpackage")]),e._v(" 的名称。例如 "),t("code",[e._v("babel")]),e._v(" 项目中对某个 "),t("code",[e._v("package")]),e._v(" 的修改：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("chore(babel-helper-plugin-utils): add npmignore\n")])])]),t("h4",{attrs:{id:"_1-3-3-subject"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-subject"}},[e._v("#")]),e._v(" 1.3.3. subject")]),e._v(" "),t("p",[e._v("subject 用来概括和描述本次提交的改动内容，需注意以下几点：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("时态方面使用一般现在时，不要使用过去时。虽然查看 "),t("code",[e._v("message")]),e._v(" 时，"),t("code",[e._v("message")]),e._v(" 内容本身都发生在过去，然而对于主题来说，使用现在时的时态更简洁明确，并且更易达成一致性：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// good\ndocs: delete redundant docs\n\n// bad\ndocs: deleted redundant docs\n")])])])]),e._v(" "),t("li",[t("p",[e._v("句式使用祈使句。即一般情况不要增加主语。因为在绝大情况下，主语都是作者『我』：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// good\ndocs: delete redundant docs\n\n// bad\ndocs: i delete redundant docs\n")])])])]),e._v(" "),t("li",[t("p",[e._v("句首无需大写，句尾无需结束标点。因为主题（或标题）本身不用形成完整的句子：")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  // good\n  docs: delete redundant docs\n\n  // bad\n  docs: Delete redundant docs.\n  ```\n\n### 1.4. message body\n\n日志的内容主体 body 用来描述详细的提交内容，可写可不写，需注意以下几点：\n\n1. 时态方面使用一般现在时，不要用过去时态。\n2. 句式视情况而定，一般使用祈使句式。\n3. 标点方面遵循一般的文档格式规约。\n\n### 1.5. message footer\n\nfooter 通常用于代码评审过程记录、作者签名等。例如：\n\n```markdown\nReported-by: User1 <user1@example.com>\nHelped-by: User2 <user2@example.com>\nReviewed-by: User3 <user3@example.com>\nSigned-off-by: Author <author@example.com>\n")])])]),t("blockquote",[t("p",[e._v("为什么要有签名区？")]),e._v(" "),t("p",[e._v("因为一个提交的元信息中只有作者（author）、提交者（committer）两个字段，而一段代码的诞生，参与的人往往不止于此，还可能有问题报告者（Reported-by）、代码评审者（Reviewed-by）、上游 Committer 的签名（Signed-off-by）。为此一些开源项目（如 Git、Linux）的一个约定俗成的习惯，是在提交的最后加上签名，每个贡献者一行，从上到下可以看到这段代码诞生的过程。")])]),e._v(" "),t("p",[e._v("还可以添加其他元信息，例如：")]),e._v(" "),t("h4",{attrs:{id:"引用-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用-issues"}},[e._v("#")]),e._v(" 引用 "),t("code",[e._v("Issues")])]),e._v(" "),t("p",[e._v("可以在 "),t("code",[e._v("commit")]),e._v(" 信息里使用关键字 + "),t("code",[e._v("Issue ID")]),e._v("（"),t("code",[e._v("Gitlab")]),e._v(" / "),t("code",[e._v("Github")]),e._v(" 或其他平台的），来表明该提交解决了某个 "),t("code",[e._v("Issue")]),e._v("。推荐使用的关键字有：")]),e._v(" "),t("div",{staticClass:"language-markdown extra-class"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[e._v("close\ncloses\nclosed\nfix\nfixes\nfixed\nresolve\nresolves\nresolved\n")])])]),t("p",[e._v("关键字的选用可以根据当前语义、关联的 "),t("code",[e._v("Issue")]),e._v(" 是否在当前仓库下，甚至是 commit 消息的长度限制来决定。")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("close")]),e._v(": 关闭当前仓库的 "),t("code",[e._v("Issue")])]),e._v(" "),t("li",[t("code",[e._v("fix")]),e._v(": 关闭当前或其他仓库的 "),t("code",[e._v("Issue")]),e._v(", 一般指 Bug 修复")]),e._v(" "),t("li",[t("code",[e._v("resolve")]),e._v(": 关闭当前或其他仓库的 "),t("code",[e._v("Issue")])])]),e._v(" "),t("p",[e._v("关闭多个 "),t("code",[e._v("Issues")]),e._v(" 使用如下格式:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Close #1, #2, #3\nClose #1, close #2, close #3\n\nFix #1, #2, #3\nFix #1, close #2, close #3\n\nResolve #1, #2, #3\nResolve #1, close #2, close #3\n")])])]),t("h4",{attrs:{id:"破坏性变动-breaking-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#破坏性变动-breaking-changes"}},[e._v("#")]),e._v(" 破坏性变动（"),t("code",[e._v("Breaking changes")]),e._v("）")]),e._v(" "),t("p",[e._v("如果本次提交的改动是破坏性的，需要在这里声明：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('BREAKING CHANGE: 为了组件 API 规范的统一，本次升级将 size 属性的 value 值从 `s|m|l` 替换为 `small|medium|large`。\n\n请按照如下方式升级：\n\n<Button size="s">提交</Button>\n--\x3e\n<Button size="small">提交</Button>\n\n继续使用 size="m" 可能会导致样式错误。\n')])])]),t("h2",{attrs:{id:"_2-git-分支命名规约"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-git-分支命名规约"}},[e._v("#")]),e._v(" 2. Git 分支命名规约")]),e._v(" "),t("h3",{attrs:{id:"_2-1-分支模型选择的说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-分支模型选择的说明"}},[e._v("#")]),e._v(" 2.1. 分支模型选择的说明")]),e._v(" "),t("p",[e._v("目前互联网和社区中流传最广泛的一个分支模型 "),t("a",{attrs:{href:"https://github.com/nvie/gitflow",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git Flow"),t("OutboundLink")],1),e._v(" 出自 "),t("a",{attrs:{href:"https://nvie.com/posts/a-successful-git-branching-model/",target:"_blank",rel:"noopener noreferrer"}},[e._v("a-successful-git-branching-model"),t("OutboundLink")],1),e._v(" 这篇十年前的文章，文章作者 Vincent Driessen 在 2020 年三月份的时候已经公开表示，该分支模型已经不适用于现如今持续交付的软件工程方式，推荐在持续交付的软件工程中使用更简单的 "),t("a",{attrs:{href:"https://guides.github.com/introduction/flow/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github Flow"),t("OutboundLink")],1),e._v(" 模型。")]),e._v(" "),t("h3",{attrs:{id:"_2-2-分支命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-分支命名"}},[e._v("#")]),e._v(" 2.2. 分支命名")]),e._v(" "),t("p",[e._v("新建分支的命名格式为："),t("code",[e._v("{type}-{issue id}-the-thing-you-do")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("type")]),e._v("：和上文 1.3.1 章节中的 type 保持一致")]),e._v(" "),t("li",[t("code",[e._v("issue id")]),e._v("：与分支内容相关的 issue id，如果无关，则可以忽略")])]),e._v(" "),t("p",[e._v("比如以下格式都满足规范：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("feat-ssr-prefetch")]),e._v("：新增 ssr prefetch 功能")]),e._v(" "),t("li",[t("code",[e._v("fix-1379-component-insert-order")]),e._v("：修复 issue 1379 中提到的组件插入顺序 bug")]),e._v(" "),t("li",[t("code",[e._v("revert-14218-memory-leak-on-unmount")]),e._v("：回退版本解决 issue 14218 提到的组件卸载时内存泄露的问题")])]),e._v(" "),t("blockquote",[t("p",[e._v("注：该命名规约只针对新建的临时分支，不包括如 master、develop 等常驻分支")])]),e._v(" "),t("h3",{attrs:{id:"_2-3-多版本分支命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-多版本分支命名"}},[e._v("#")]),e._v(" 2.3. 多版本分支命名")]),e._v(" "),t("p",[e._v("在需要同时维护多个版本的项目中，只使用 master 作为主干分支显然是无法满足需求的，但是又不想使用 Git Flow 这种复杂、繁琐的分支结构，那么就可以每发布一个新的版本就单独拉一个新的分支，例如：")]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("code",[e._v("1.0.0-stable")])]),e._v(" "),t("li",[t("code",[e._v("2.0.0-stable")])])])]),e._v(" "),t("p",[e._v("其他开发过程中的分支命名参考上节 2.2 的分支命名规约。")]),e._v(" "),t("h2",{attrs:{id:"_3-git-tag-命名规约"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-git-tag-命名规约"}},[e._v("#")]),e._v(" 3. Git tag 命名规约")]),e._v(" "),t("p",[t("code",[e._v("Git tag")]),e._v(" 就是通过语义化的名称来给仓库标注一个个具体的节点。与此同时还可以根据标签名称来大致了解当前项目的兼容性和迭代情况。")]),e._v(" "),t("p",[e._v("命名格式为 "),t("code",[e._v("v{semver}")]),e._v("，"),t("code",[e._v("semver")]),e._v(" 是遵循 "),t("a",{attrs:{href:"https://semver.org/lang/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[e._v("semantic version"),t("OutboundLink")],1),e._v(" 的版本号，例如 "),t("code",[e._v("v1.2.3")]),e._v("。")]),e._v(" "),t("p",[e._v("相比于使用例如 "),t("code",[e._v("git tag v1.2.3")]),e._v(" 这种「轻量标签」，更推荐使用如下命令生成「附注标签」：")]),e._v(" "),t("p",[t("code",[e._v('git tag -a v1.2.3 -m "发布经销商管理模块"')])]),e._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("AngularJS 代码贡献指南"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.j8e4paqkfz0q",target:"_blank",rel:"noopener noreferrer"}},[e._v("AngularJS Git Commit Message Conventions"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://karma-runner.github.io/0.13/dev/git-commit-msg.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Karma 的 Git 日志规约"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://stackoverflow.com/questions/3580013/should-i-use-past-or-present-tense-in-git-commit-messages",target:"_blank",rel:"noopener noreferrer"}},[e._v("StackOverflow - 在 Git 日志中我该用过去时态还是现在时态？"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://nvie.com/posts/a-successful-git-branching-model/",target:"_blank",rel:"noopener noreferrer"}},[e._v("一个成功的 Git 分支模型"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%89%93%E6%A0%87%E7%AD%BE",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git 基础打标签"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Characters_per_line",target:"_blank",rel:"noopener noreferrer"}},[e._v("每行字符数"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.conventionalcommits.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Conventional Commits"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=_.exports}}]);