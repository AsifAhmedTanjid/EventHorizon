import Categories from '@/components/Categories';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Newsletter from '@/components/Newsletter';
import Testimonials from '@/components/Testimonials';
import UpcomingEvents from '@/components/UpcomingEvents';
import React from 'react';

const page = () => {
    return (
        <div className='min-h-screen'>
            <Hero></Hero>
            <UpcomingEvents></UpcomingEvents>
            <HowItWorks></HowItWorks>
            <Categories></Categories>
            <Testimonials></Testimonials>
            <Newsletter></Newsletter>
        </div>
    );
};

export default page;