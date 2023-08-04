import React from 'react'
import DemoCode from './DemoCode'

interface YiKeDemoProps {
  lang: string
  id: string
  code: string
}

const YiKeDemo: React.FC<YiKeDemoProps> = async ({ lang, code, id }) => {

  const { default: Demo } = await import(`yike/${id}`)
  
  // TODO: 样式隔离
  return (
    <div className='mt-3'>
      <div className='border p-5 rounded-lg border-yike'>
        <Demo />
      </div>
      <DemoCode lang={lang} code={code} />
    </div>
  )
}

export default YiKeDemo