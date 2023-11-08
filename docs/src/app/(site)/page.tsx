import Link from 'next/link';
import { Space, Button } from '@yike-design/react';
import { Yike1Outlined } from '@yike-design/react-icons';

export default function Home() {
  return (
    <div className="h-aside flex flex-col justify-center relative">
      <div className="-mt-[200px] text-center h-[220px] relative">
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 w-[380px] text-yike-bg-2">
          <svg viewBox="0 0 380 220">
            <g fill="currentColor">
              <path d="M127.253 0H230L102.928 220H0zM267.13.002C329.468.002 380 49.25 380 110 380 170.75 329.467 220 267.13 220H138.405c-2.831 0-5.638-.102-8.417-.301l53.943-90.608h83.2c10.82 0 19.59-8.547 19.59-19.09 0-10.544-8.77-19.09-19.59-19.09l-60.469-.001L260.785.001h6.346ZM50.088 90 100 0H0z" />
            </g>
          </svg>
        </div>
        <p className="tracking-title text-[68px] pt-[42px] pl-5 pb-4 font-semibold">YIKE DESIGN</p>
        <p className="text-base font-semibold">包容万物，从源头出发，一切从简</p>
      </div>
      <div className="flex justify-center mt-10">
        <Space>
          <Link href="/develop/yike">
            <Button>开始使用</Button>
          </Link>
          <Link href="/design/yike">
            <Button type="secondary">设计资源</Button>
          </Link>
        </Space>
      </div>
      <div className="flex justify-center absolute bottom-14 left-1/2 -translate-x-1/2">
        <Yike1Outlined className="text-6xl" />
      </div>
    </div>
  );
}
