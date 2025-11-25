import Categories from '@/components/Categories';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import React from 'react';

const page = () => {
    return (
        <div className='min-h-screen'>
            <Hero></Hero>
            <HowItWorks></HowItWorks>
            <Categories></Categories>
        </div>
    );
};

export default page;