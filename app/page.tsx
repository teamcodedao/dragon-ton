import Image from 'next/image';
import clsx from 'clsx';

import background from './background.png';
import dragon1Img from './dragon-1.png';

export default function Home() {
  return (
    <div className='relative'>
      <Image
        src={background}
        quality={100}
        priority
        alt=''
        className='min-h-screen w-screen object-cover object-bottom'
      />
      <main className='absolute inset-0'>
        <Image
          src={dragon1Img}
          quality={100}
          priority
          alt=''
          className={clsx(
            'absolute -top-14 right-[30%] rotate-[160deg] -scale-x-100',
            'w-[200px] lg:w-[317px]'
          )}
        />
      </main>
    </div>
  );
}
