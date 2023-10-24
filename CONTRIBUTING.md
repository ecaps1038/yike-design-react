# Welcome

我们重视每位参与者的贡献，感谢每一行代码的产生

## Run it

要运行组件库，请执行以下步骤：

1. 推荐先 fork 项目并基于此仓库进行操作
2. 克隆 fork 后的项目到本地 `git clone https://github.com/<username>/yike-design-react.git`
3. 切换至 dev 分支 `git checkout dev` 
4. 安装依赖 `pnpm install` 
5. 启动文档开发服务器 `npm run docs:dev` 
6. 浏览器中访问 `http://localhost:3000` 

## 如何贡献？

为了维护组件库代码提交规范性，项目前期(第一版正式发包前)推荐采用以下流程提交代码。

### fork 项目

前往[项目主页](https://github.com/ecaps1038/yike-design-react) fork 工程至自己的 git 仓库，并基于此 git 仓库维护代码。

### 添加主仓库为远程仓库

执行下面 git 命令

```sh
git remote add upstream https://github.com/ecaps1038/yike-design-react.git
```

### 提交 pr

每当你准备开始一个新的功能开发或提交 PR 前，请先从主仓库拉取最新的代码并合并到仓库的对应分支。

```sh
git checkout -b dev
git fetch upstream
git rebase upstream/dev
```

为什么使用 `rebase` ?

`merge` 会重新生成一个 commit 节点，提交 PR 时你 merge 的记录也会被带上去，所以不建议使用

### 创建需求分支

对于每次代码提交需求，本地需创建一个新的分支，请尽量避免在同一个分支上处理多个需求。

根据你需要开发的新功能，推荐采用：`${type}/${component}/${feat}` 分支命名规范。

其中，type 表示该分支类型，推荐以下选项：

- feature：功能分支
- fix：修复分支
- docs：文档修改分支
- refactor：重构分支

component 为你需要修改的组件或者是基建相关的能力

- 对于组件库中的组件来说，可以是 button、icon、upload 等
- 若需要修改脚手架能力，此处应为 cli
- 如果是文档工程的修改，可以是 docs

feat 为你需要具体修改的内容。此处定义根据功能自由命名，命名采用短横线命名法。

以下是具体例子:

- `feature/cli/update-icons-build`
- `feature/button/add-style`
- `fix/icon/alignment-issue`
- `docs/upload/add-picture-demo`
- `refactor/docs/refactor-router` 

## Commit 规范

我们推荐使用以下 commit message 格式。

`${type}(${component}): ${commit-word}`

以下是具体实例，当然，中文的提交说明目前也是可接受的 !

- `feat(button): add styles for button component`
- `fix(icon): resolve alignment issue in icon component`
- `docs(upload): update README file`
- `refactor(base): refactor router module`

更多请阅读：<https://www.conventionalcommits.org/zh-hans/v1.0.0/>

## 目录结构

```plaintext
|- docs/                     # 组件库文档工程
|  |- package.json
|  |- tsconfig.json
|  |- next.config.mjs        # NextJS 配置文件
|  |- public/
|  |- src/
|     |- app/                # 路由目录(app)
|        |- (site)
|          |- page.tsx       # 首页
|          |- design/        # 设计页面文件夹
|          |- develop/       # 开发页面文件夹
|          |- components/    # 组件页面文件夹
|       |- (example)         # deme 对应的单独的页面
|        ...
|    |- content/             # 文档相关内容
|       |- components/       # 文档中需要导入的组件（例如：Icon文档页面的列表）
|       |- demos/            # 文档中的 Demo（外部Demo，比较复杂一点的）
|       |- docs/             # 站点中对应路由的文档
|         |- components      # components 路由对应页面的文件夹
|            |- button.mdx   # /components/button 页面对应的文档内容
|            ...
|         |- design          # design 路由对应页面的文件夹
|           ...
|         |- develop         # develop 路由对应页面的文件夹
|          ...
|- packages/
|  |- cli                   # 脚手架, 处理组件库的打包
|  |- yike-design/
|     |- src/
|        |- components/      # 组件目录
|        |- index.ts         # 组件库入口文件
|     |- package.json
|  |- yike-design-icon       # icon库
|  |- mdx-demo               # 用于处理 mdx 文档中的 demo 代码块
|- package.json
|- README.md
|- tsconfig.json
|- ...
```

## 组件开发

### 创建组件

在项目根目录运行 `pnpm generate` 选择 `component` 或运行 `pnpm generate:component` 即可自动创建组件目录及文件。

编写完代码后在确保与目标分支不存在冲突的前提下可以将该功能分支提交 PR 到主仓库的对应分支（目前主要的开发分支为 dev 分支）。

PR 将由具备权限的贡献者 CR 后进行 merge，若提交的功能影响面较广，CR 人员应当及时同其他成员共同参与讨论和检验。

### 目录结构

```
- components
  |- button                 # Button 组件目录
  |  |-style
       |- index.ts
  |    |- index.scss        # 样式文件
  |    |- ...               # 其他样式文件
  |  |- Button.tsx          # Button 代码文件
  |  |- ButtonGroup.tsx     # ButtonGroup 代码文件
  |  |- index.tsx            # 组件入口文件
  |- ...
```

### "use client"

RSC（React Server Component）当前已经可以上生产，为了对 RSC 做适配，组件库中所有用到了客户端功能的组件，应当在组件文件的顶部加上 `"use client"` 指令（大概率大部分组件都需要）

具体可以参考 [NextJS 文档](https://nextjs.org/docs/getting-started/react-essentials)

## 文档编写

所有的文档都在 `docs/src/content/docs/components` 目录下，文件名为 `[component].mdx`

对于所有的文档页面，应当使用 md(x) 来书写，对于页面中需要自定义的部分导入相关的 react 组件（应当将其定义在 `docs/src/content/components`）

### 文档生成

在项目根目录运行 `pnpm generate` 选择 `document` 或运行 `pnpm generate:document` 即可自动创建文档文件

Todo: 实现 `pnpm generate:document` 

### Demo 渲染

我们开发了 `@yike-design/mdx-demo` 实现 mdx 中的代码块预览渲染

其书写规则为导入你所需要的依赖（只要存在当前工程，包括样式文件），默认导出的组件会被渲染在预览区内

````
```tsx
import { Button } from '@yike-design/react'

export default () => {
  return (
    <div>
      <Button>主要按钮</Button>
      <Button type="secondary">次要按钮</Button>
      <Button type="outline">线框按钮</Button>
    </div>
  )
}
```
````

Demo 的书写方式分为两种: 

- 行内Demo: 即在 mdx 文件书写的 markdown 代码块

- 外部Demo:
  - 代码书写在 `docs/src/content/demos/[component]/[demo].tsx`
  - 在 mdx 文件中通过 `<code src="~demos/[component]/[demo].tsx" />` 声明


注意: 外部Demo的声明中, `src` 属性一定要为 `~demos` 开头（判断时偷懒了）

### 代码块

如果仅仅想渲染代码块，而不进行预览，使用 `pure` 标记：

````
```tsx pure
import { Button } from '@yike-design/react'

export default () => {
  return (
    <div>
      <Button>主要按钮</Button>
      <Button type="secondary">次要按钮</Button>
      <Button type="outline">线框按钮</Button>
    </div>
  )
}
```
````

