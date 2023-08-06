import Layout from '@/components/Layout';
import type { LeftAsideItems } from '@/types';

const DesignLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const items: LeftAsideItems = [
    {
      title: '设计指南',
      children: [
        { text: 'Yike Design', link: '/design/yike' },
        { text: '设计原则', link: '/design/principle' },
      ],
    },
  ];

  return <Layout items={items}>{children}</Layout>;
};

export default DesignLayout;
