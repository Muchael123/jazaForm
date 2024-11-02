import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'

function Header() {
  return (
    <div className="md:p-3 p-2 border shadow-sm">
      <div className='justify-between flex items-center'>
        <div className="flex flex-row gap-0 md:gap-2 text-xl md:text-2xl items-center">
          <Image src={"/logo.svg"} width={80} height={80} alt="Logo" />
          <span className="text-blue-500 font-semibold">
            <span>Jaza</span>
            <span className="font-light text-green-500">Form</span>
          </span>
        </div>
        <Button>Get started</Button>
      </div>
    </div>
  );
}

export default Header