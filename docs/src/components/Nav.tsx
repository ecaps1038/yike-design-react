'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

interface NavProps {
  base: string
  href: string
}

const Nav: React.FC<React.PropsWithChildren<NavProps>> = ({ base, href, children }) => {

  const pathname = usePathname()

  const className = clsx('text-sm', { 
    'text-nav font-semibold': pathname.split('/')[1] === base,
  })

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  )
}

export default Nav