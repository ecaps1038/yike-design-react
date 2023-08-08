# Welcome

我们重视每位参与者的贡献，感谢每一行代码的产生

## Run it

要运行组件库，请执行以下步骤：

1. 推荐先 fork 项目并基于此仓库进行操作
2. 克隆 fork 后的项目到本地 `git clone https://github.com/xxxxxx/yike-design-react.git`
3. 切换至 dev 分支 `git checkout dev`
4. 安装依赖：`pnpm i`
5. 启动开发服务器：`npm run docs:dev`
6. 在浏览器中访问：`http://localhost:3000`

## 如何贡献？

为了维护组件库代码提交规范性，项目前期(第一版正式发包前)推荐采用以下流程提交代码。

### fork 项目

前往[项目主页](https://github.com/ecaps1038/yike-design-react,"github主页") fork 工程至自己的 git 仓库，并基于此 git 仓库维护代码。

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
git merge upstream/dev
```

### 创建需求分支

对于每次代码提交需求，本地需创建一个新的分支，请尽量避免在同一个分支上处理多个需求。

根据你需要开发的新功能，推荐采用：`${type}/${component}/${feat}` 分支命名规范。

其中，type 表示该分支类型，有以下选项：

- feature：功能分支
- fix：修复分支
- docs：文档修改分支
- refactor：重构分支

component 为你需要修改的组件，如 button、icon、upload 等。若需要修改脚手架能力，此处应为 base。

feat 为你需要具体修改的内容。此处定义根据功能自由命名，命名采用短横线命名法。

以下是具体例子:

- `feature/base/add-markdown-pure`
- `feature/button/add-style`
- `fix/icon/alignment-issue`
- `docs/upload/add-picture-demo`
- `refactor/base/refactor-router`

### 创建组件

使用指令 `npm run new component-name [组件名]`。

例如 `npm run new checkbox 复选框` 即可自动创建组件目录及文件。

在编写完代码后，在确保与目标分支不存在冲突的前提下可以将该功能分支提交 PR 到主仓库的对应分支（目前主要的开发分支为 monorepo-dev 分支）。

PR 将由具备权限的贡献者 CR 后进行 merge，若提交的功能影响面较广，CR 人员应当及时同其他成员共同参与讨论和检验。

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
|- docs/                   # 组件库文档工程
|  |- package.json         # package.json 文件
|  |- tsconfig.json        # TypeScript 配置文件
|  |- next.config.mjs      # NextJS 配置文件
|  |- public/              # 公共文件夹
|  |- src/
|     |- app/              # 路由目录(app)
|        |- page.tsx       # 首页
|        |- design/        # 设计页面文件夹
|        |- develop/       # 开发页面文件夹
|        |- module/        # 组件页面文件夹
|          |- button
|            |- page.md(x) # 文档
|          ...
|- packages/              
|  |- yike-design/
|     |- src/
|        |- components/    # 组件目录
|        |- index.ts       # 组件库入口文件
|     |- package.json      # 组件库 package.json 文件
|  |- remark-demo-plugin/  # remark插件，用于处理md文档中的demo代码块
|- package.json            # 根目录下的 package.json 文件
|- README.md               # 根目录下的 README.md 文件
|- tsconfig.json           # 根目录下的 TypeScript 配置文件
|- ...
```

## 组件开发

### 目录结构

```
- components
  |- button                 # Button 组件目录
  |  |-style
       |- index.scss
  |    |- Button.scss         # Button 样式文件
  |    |- ButtonGroup.scss    # ButtonGroup 样式文件
  |  |- Button.tsx          # Button 代码文件
  |  |- ButtonGroup.tsx     # ButtonGroup 代码文件
  |  `- index.tsx            # 组件入口文件
  |- ...
```

## 文档编写

所有的文档都在 `docs/src/app/module` 目录下对应的组件名文件夹下的 `page.md(x)` 

当然也可以完全使用 `tsx` 来书写，推荐使用 markdown 书写

### 代码块

`docs` 是一个 NextJS 工程并且使用了 mdx，我们编写了一个 `remark` 插件用于将普通的 markdown 代码块进行预览渲染

书写方式和你怎么用一模一样（和 dumi 的写法相同），默认导出的组件会被渲染在预览区内，例如：

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

如果遇到 NextJS 提示错误，可以 `rm -rf docs/.next` 和 `rm -rf docs/node_modules/yike` 并且重启服务

### 组件文档.md

组件文档应当提供关于组件的说明、用法、API 等相关信息。以下是一个组件文档的基本结构示例：

````md
# yk-button 按钮  （文档首页标题）


## 按钮类型 type

按钮有三种类型：`主按钮` 、`次按钮` 、`线框按钮` 。主按钮在同一个操作区域建议最多出现一次。

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

...其他用法

## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：type -> size -> shape -> status -> disabled。

|参数       | 描述      | 类型       | 可选值                               | 默认值     |
| -------- | -------- | ---------- | ----------------------------------- | --------- |
| type     | 按钮的类型 | string    | `primary`、`secondary`、`outline`   | `primary` |
````

