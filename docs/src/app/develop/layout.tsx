import React from 'react'
import Layout from '@/components/Layout'
import { LeftAsideItems } from '@/types'

const DevelopLayout: React.FC<React.PropsWithChildren> = ({ children }) => {

  const items: LeftAsideItems = [
    { 
      title: '开发指南', 
      children: [
        { text: 'Yike Design', link: '/develop/yike' },
        { text: '快速上手', link: '/develop/grasp' },
        { text: '暗黑模式', link: '/develop/dark' },
        { text: '定制主题', link: '/develop/theme' },
      ]
    }
  ]

  return (
    <Layout items={items}>{children}</Layout>
  )
}

export default DevelopLayout