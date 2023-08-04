import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Nav from './Nav'
import logo from '@/assets/logo.svg'

const Header = () => {
  return (
    <header className='h-[60px] px-[30px] flex items-center border-b border-yike flex-shrink-0'>
      <div className='flex'>
        <Image width={32} src={logo} alt='logo' />
        <Link className='text-lg font-bold ml-3' href='/'>
          Yike Design React
        </Link>
      </div>
      <div className='flex ml-auto gap-10'>
        <Nav base='design' href='/design/yike'>设计</Nav>
        <Nav base='develop' href='/develop/yike'>开发</Nav>
        <Nav base='module' href='/module/button'>组件</Nav>
        {/* todo: github theme login */}
      </div>
    </header>
  )
}

export default Header