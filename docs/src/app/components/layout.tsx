import type React from 'react';
import Layout from '@/components/Layout';
import type { LeftAsideItems } from '@/types';

const ComponentsLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const items: LeftAsideItems = [
    {
      title: '通用',
      children: [
        { text: 'Button 按钮', link: '/components/button' },
        { text: 'Icon 图标', link: '/components/icon' },
        { text: 'Typegraphy 排版', link: '/components/typegraphy' },
      ],
    },
    {
      title: '布局',
      children: [{ text: 'Space 间距', link: '/components/space' }],
    },
    {
      title: '导航',
      children: [
        { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb' },
        { text: 'Dropdown 下拉菜单', link: '/components/dropdown' },
        { text: 'Menu 导航菜单', link: '/components/menu' },
        { text: 'Pagination 分页', link: '/components/pagination' },
      ],
    },
    {
      title: '数据输入',
      children: [
        { text: 'Checkbox 复选框', link: '/components/checkbox' },
        { text: 'Input 输入框', link: '/components/input' },
        { text: 'InputNumber 数字输入框', link: '/components/inputnumber' },
        { text: 'InputTag 标签输入框', link: '/components/inputtag' },
        { text: 'Radio 单选框', link: '/components/radio' },
        { text: 'Rate 评分', link: '/components/rate' },
        { text: 'Stepper 步进器', link: '/components/stepper' },
        { text: 'Switch 开关', link: '/components/switch' },
        { text: 'Textarea 文本域', link: '/components/textarea' },
      ],
    },
    {
      title: '数据展示',
      children: [
        { text: 'Avatar 头像', link: '/components/avatar' },
        { text: 'Badge 徽标', link: '/components/badge' },
      ],
    },
  ];

  return <Layout items={items}>{children}</Layout>;
};

export default ComponentsLayout;
