import Link from 'next/link';
import Image from 'next/image';
import sign from '@/assets/sign.svg';
import logo from '@/assets/logo-bg.svg';

const NotFound = () => {
  return (
    <div className="h-full flex flex-col justify-center relative">
      <div className="-mt-[200px] text-center font-semibold h-[220px] relative">
        <Image
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
          src={logo}
          alt="logo"
        />
        <p className="tracking-title text-8xl pt-[42px] pl-5 pb-4">404</p>
        <p className="text-base">包容万物，从源头出发，一切从简</p>
      </div>
      <div className="flex justify-center gap-4 mt-10">
        {/* TODO: use yike button */}
        <Link href="/develop/yike">
          <button className="yike-doc-button bg-[#2B5AED] text-white">开始使用</button>
        </Link>
        <Link href="/design/yike">
          <button className="yike-doc-button bg-[#1e20250f]">设计资源</button>
        </Link>
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
