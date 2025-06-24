import React from 'react';
import Wrapper from '@/components/ui/wrapper';
import { AnimatedLinkButton } from '@/components/ui/animated-button';
import { playfull } from '@/lib/fonts/playfull';
import * as motion from 'motion/react-client';

const Atf = () => {
  return (
    <section className='relaitive'>
      <Wrapper className='flex min-h-screen w-full flex-col items-center justify-center p-4 py-18 sm:p-6 sm:py-24 md:p-6 md:py-28 lg:p-8 lg:py-34'>
        <div className='absolute top-1/12 left-20 -z-10 h-140 w-140 rounded-full bg-linear-to-l from-transparent to-blue-500/20 blur-3xl' />
        <div className='absolute top-1/12 right-20 -z-10 h-140 w-140 rounded-full bg-linear-to-r from-transparent to-yellow-500/20 blur-3xl' />

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='z-10 w-full text-center text-5xl font-medium tracking-tighter md:text-7xl lg:text-8xl xl:text-9xl'
        >
          Building bold brands with
          <span
            className={`text-foreground/80 dark:text-foreground/60 ${playfull.className} ml-2 italic`}
          >
            thoughtful design
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className='text-foreground/70 dark:text-foreground/60 z-10 mx-auto mt-4 mb-5 max-w-2xl text-center'
        >
          At Awake, we help small startups tackle the world’s biggest challenges
          with tailored solutions, guiding you from strategy to success in a
          competitive market.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.5 }}
        >
          <AnimatedLinkButton href='#' size={'lg'} className='max-w-64'>
            get started
          </AnimatedLinkButton>
        </motion.div>
      </Wrapper>
    </section>
  );
};

export default Atf;
