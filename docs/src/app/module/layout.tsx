import type React from 'react';
import Layout from '@/components/Layout';
import type { LeftAsideItems } from '@/types';

const ComponentsLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const items: LeftAsideItems = [
    {
      title: '通用',
      children: [
        { text: 'Button 按钮', link: '/module/button' },
        { text: 'Icon 图标', link: '/module/icon' },
        { text: 'Typography 排版', link: '/module/typography' },
      ],
    },
    {
      title: '布局',
      children: [{ text: 'Space 间距', link: '/module/space' }],
    },
    {
      title: '导航',
      children: [
        { text: 'Breadcrumb 面包屑', link: '/module/breadcrumb' },
        { text: 'Dropdown 下拉菜单', link: '/module/dropdown' },
        { text: 'Menu 导航菜单', link: '/module/menu' },
        { text: 'Pagination 分页', link: '/module/pagination' },
      ],
    },
    {
      title: '数据输入',
      children: [
        { text: 'Checkbox 复选框', link: '/module/checkbox' },
        { text: 'Input 输入框', link: '/module/input' },
        { text: 'InputNumber 数字输入框', link: '/module/inputnumber' },
        { text: 'InputTag 标签输入框', link: '/module/inputtag' },
        { text: 'Radio 单选框', link: '/module/radio' },
        { text: 'Rate 评分', link: '/module/rate' },
        { text: 'Stepper 步进器', link: '/module/stepper' },
        { text: 'Switch 开关', link: '/module/switch' },
        { text: 'Textarea 文本域', link: '/module/textarea' },
      ],
    },
    {
      title: '数据展示',
      children: [
        { text: 'Avatar 头像', link: '/module/avatar' },
        { text: 'Badge 徽标', link: '/module/badge' },
      ],
    },
  ];

  return <Layout items={items}>{children}</Layout>;
};

export default ComponentsLayout;
