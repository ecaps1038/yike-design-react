<h1 align="center">@yike-design/react</h1>

## 用法

```tsx
import '@yike-design/react/style';
import { Button } from '@yike-design/react';

export default () => {
  return <Button>button</Button>;
};
```

ps：该示例不可避免引入全部样式文件。

## 按需引入

为了避免在上述用法中引入不必要的样式文件，可以使用 `babel-plugin-import` 插件来引入对应组件。

```js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: '@yike-design/react',
        libraryDirectory: 'dist/es', // dist/cjs | dist/es
        camel2DashComponentName: false,
      },
    ],
  ],
};
```

ps: 该方式暂未测试。
