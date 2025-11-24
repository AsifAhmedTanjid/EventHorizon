import Image from 'next/image';
import React from 'react';

const Logo = () => {
    return (
        <div className='flex items-center'>
              <Image src="/logo1.png" alt="brand kogo" width={64} height={64} />
               <h1>Event Horizon</h1>
        </div>
    );
};

export default Logo;