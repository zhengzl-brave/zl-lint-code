lerna + pnpm 多包管理

wrokspace: packages/*  工作区

lerna version 一致问题 & 单独发布问题

npmClient: pnpm

command: 命令选项编码(限制) => 比如说当前包发布的过程是什么
    publish: npm客户端 npmClient: npm（云构建走npm）
             发布的message  message: "chore: publish %s" (可以写个模板，后面%s字符串格式指的是我们的版本号)
             registry: 发布包的地址 npmjs.org （看你要发私服还是npm）
    packages: packages/*   我们当前要发布的时候发哪些包



package.json

publishConfig: {
    access: public
    registry: 发布地址 npmjs.org / 私服地址
}
怎么样定义scripts

preinstall : npx only-allow pnpm 指定我们用pnpm

prepare(发布前用)： husky install => 一般这里关注我们husky,关联git的hooks

clean: lerna clean && rm -rf node_modules  移除包依赖，删除子包依赖移除根目录node_modules

test: lerna run test  => 会执行子包中包含test的指令的那个包

docs:dev: vuepress dev doc 运行文档

deploy: base deploy.sh => 运行deploy脚本

publish: lerna publish => 发包

lint & changelog 注意要写安装对应的cli才可以



vuepress

docs => .vuepress => config => 放了基本配置，标题，导航等，注意base配置，作为二级

logo => 会抹平public 直接/img...

searchMaxSuggerstion 搜索最大条数

plugins: 用了图片的放大和复制

markdownlint   => vscode插件：Markdonw all line one

指定工作区域 pnpm.workspace

commitlint: conventionalcommits

git action 将我们站点静态资源发布上去github 云构建，需要写一套发布脚本

deploy.sh

```sh
distpath = 'docs\.vupress\dist' # 当前打包的内容
push_btanch = gh-pages  # github.io

npm run docs:build # 生成静态资源站点


cd distpath # cd进入我们定义好的变量

git init

git add .

git push -f $push_addr HEAD:$push_branch  # 提交到远端仓库 的 push_branch分支

cd - # 回到根路径

rm -rf $dist_path 移除这一部分代码

```

执行deploy发布

通过git actions发布

github  -> 个人的setting -> Deverloper settings -> Person AccessTokens -> Tokens

放到security => Actions => Acionts token 编辑，注意，这个指令一定要保存好，之后会清除掉的

在github -> settings -> 左侧栏pages -> 指定分支gh-pages 站点名称docs

项目下github/wrokflows(工作流) on push branches: master 代表分支

jobs: 代表分支下的工作流，就是一个git action





lerna init 

配置lerna.json

配置package.json

lerna create + name 创建子包内容

