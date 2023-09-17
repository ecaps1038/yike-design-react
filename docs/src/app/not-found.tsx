import Link from 'next/link';
import Image from 'next/image';
import sign from '@/assets/sign.svg';
import logo from '@/assets/logo-bg.svg';
import { Space, Button } from '@yike-design/react';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center relative">
      <div className="-mt-[200px] text-center font-semibold h-[220px] relative">
        <Image
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
          src={logo}
          alt="logo"
        />
        <p className="tracking-title text-8xl pt-[42px] pl-5 pb-4">404</p>
        <p className="text-base">包容万物，从源头出发，一切从简</p>
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
        <Image
          src={sign}
          alt="sign"
        />
      </div>
    </div>
  );
};

export default NotFound;
