import Image from 'next/image';
import clsx from 'clsx';

import Social from './social';

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
        className='min-h-screen w-screen object-cover object-left-bottom'
      />
      <main className='absolute inset-0'>
        <Image
          src={dragon1Img}
          quality={100}
          priority
          alt=''
          className={clsx(
            'absolute rotate-[160deg] -scale-x-100',
            '-top-8 right-[30%] lg:-top-14',
            'w-[150px] sm:w-[200px] lg:w-[317px]'
          )}
        />
        <div
          className={clsx(
            'flex w-fit flex-col items-center',
            'ml-28 mt-28 gap-y-20',
            'max-[725px]:multi-[`ml-0;w-full;mt-40;gap-y-14`]'
          )}
        >
          <div className='flex gap-x-5'>
            <Social>
              <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target='_twitter'>
                <img src='/twitter.svg' alt='' />
              </a>
            </Social>
            <Social>
              <a href={process.env.NEXT_PUBLIC_TELEGRAM_URL} target='_telegram'>
                <img src='/telegram.svg' alt='' />
              </a>
            </Social>
          </div>
          <h1 className='text-8xl text-white drop-shadow-normal lg:text-9xl'>
            Dragon Ton
          </h1>
          <span className='btn text-4xl max-sm:multi-[`px-6;py-4`] lg:text-5xl'>
            Supply: 100,000,000
          </span>
        </div>
      </main>
    </div>
  );
}
