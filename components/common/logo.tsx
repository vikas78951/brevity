import React from 'react';
import Link from 'next/link';
import { APPLICATION } from '@/lib/enum';
import { LandPlot } from 'lucide-react';

const Logo = () => {
  return (
    <Link href='/' className='flex items-center'>
      <div className='flex items-center gap-2'>
        <LandPlot />

        <span className='text-2xl font-bold capitalize'>
          {APPLICATION.name}
        </span>
      </div>
    </Link>
  );
};

export default Logo;
