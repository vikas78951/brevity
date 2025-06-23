import React from 'react';
import Wrapper from '@/components/ui/wrapper';
import { Button } from '@/components/ui/button';

const Atf = () => {
  return (
    <section className='relaitive'>
      <Wrapper className='z-10 flex min-h-screen w-full flex-col items-center justify-center p-4 py-18 sm:p-6 sm:py-24 md:p-6 md:py-28 lg:p-8 lg:py-34'>
        <div className='absolute top-3/12 left-1/12 -z-10 h-100 w-100 bg-blue-50'></div>
        <div className='absolute top-3/12 right-1/12 -z-10 h-100 w-100 bg-yellow-50'></div>

        <h1 className='w-full text-center text-5xl font-medium tracking-tighter md:text-7xl lg:text-8xl xl:text-9xl'>
          Building bold brands with
          <span className='text-foreground/80 dark:text-foreground/60 font-normal italic'>
            thoughtful design
          </span>
        </h1>
        <p className='text-foreground/70 dark:text-foreground/60 mx-auto mt-4 mb-5 max-w-2xl text-center'>
          At Awake, we help small startups tackle the world’s biggest challenges
          with tailored solutions, guiding you from strategy to success in a
          competitive market.
        </p>
        <Button>Get Started</Button>
      </Wrapper>
    </section>
  );
};

export default Atf;
