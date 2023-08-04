'use client'
import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface LeftAsideLink {
  text: string
  link: string
}

interface LeftAsideItem {
  title: string
  children: LeftAsideLink[]
}

interface LeftAsideProps {
  items: LeftAsideItem[]
}

const LeftAside: React.FC<LeftAsideProps> = ({ items }) => {

  const pathname = usePathname()

  return (
    <div className='w-[268px] border-r h-full border-yike overflow-y-auto py-2 px-4'>
      {items.map((item, index) => (
        <div key={index} className='pt-4'>
          <div className='text-sm font-bold h-10 leading-10'>
            {item.title}
          </div>
          {item.children.map(({ text, link }) => (
            <Link 
              key={link} 
              href={link} 
              className={clsx('block text-sm px-4 h-10 leading-10 rounded-lg transition-colors duration-300', {
                'bg-asideLink font-semibold text-asideLink': pathname === link,
                'text-asideLinkNormal': pathname !== link,
              })}
            >
              {text}
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default LeftAside