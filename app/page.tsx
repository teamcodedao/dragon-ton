'use client';

import {useCallback} from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import Social from './social';

import background from './background.png';
import dragon1Img from './dragon-1.png';
import dragon2Img from './dragon-2.png';

export default function Home() {
  const headingRef = useCallback<(node: unknown) => void>(node => {
    if (node instanceof HTMLElement) {
      (async () => {
        const {TxtAnime} = await import('txtanime.js');
        new TxtAnime(node, {
          effect: 'txt-an-2',
        });
      })();
    }
  }, []);

  return (
    <div className='relative'>
      <Image
        src={background}
        quality={100}
        priority
        alt=''
        className='min-h-screen w-screen object-cover object-right-bottom'
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
          <h1
            ref={headingRef}
            className='z-10 text-8xl text-white drop-shadow-normal lg:text-9xl'
          >
            Dragon Ton
          </h1>
          <span className='btn text-4xl max-sm:multi-[`px-6;py-4`] lg:text-5xl'>
            Supply: 100,000,000
          </span>
        </div>
        <div className={clsx('relative mt-14 pb-10 sm:mt-10 lg:-mt-10')}>
          <div
            className={clsx(
              'absolute right-1/4 flex flex-col items-center',
              'max-[725px]:multi-[`static`]'
            )}
          >
            <Image
              src={dragon2Img}
              quality={100}
              priority
              alt=''
              className='-mb-5 w-[306px]'
            />
            <a
              href={process.env.NEXT_PUBLIC_COIN_URL}
              target='_buy'
              className={clsx(
                'btn px-20 py-0 text-[64px]',
                'max-[725px]:multi-[`px-14;py-3;text-6xl`]'
              )}
            >
              Buy $Draton
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
