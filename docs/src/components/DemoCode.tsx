'use client'
import clsx from 'clsx'
import React, { useState } from 'react'

interface DemoCodeProps {
  lang: string
  code: string
}

// TODO: 代码高亮

const DemoCode = ({ code } : DemoCodeProps) => {
  
  const [showCode, setShowCode] = useState<boolean>(false)

  return (
    <div>
      <div className='flex justify-end gap-4'>
        {/* TODO: copy */}
        <button className={clsx({'hidden': !showCode})}>Copy</button>
        <button onClick={() => setShowCode(!showCode)}>Code</button>
      </div>
      <pre className={clsx({'hidden': !showCode})}>
        {code}
      </pre>
    </div>
  )
}

export default DemoCode