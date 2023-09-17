import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo-bg.svg';
import { Space, Button } from '@yike-design/react';
import { Yike1Outlined } from '@yike-design/react-icons';

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-center relative">
      <div className="-mt-[200px] text-center h-[220px] relative">
        <Image
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
          priority
          src={logo}
          alt="logo"
        />
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
