import React from 'react';

const AboutMe = ({ text, value }) => {
    return (
        <div className='flex items-center justify-between mb-5'>
            <h1 className='bg-[#FFB400] text-[#2B2B2B] text-[15px] px-2 rounded-sm font-medium'>{text}</h1>
            <h2 className='text-[#2B2B2B] text-[15px] font-medium dark:text-gray-400'>{value}</h2>
        </div>
    );
};

export default AboutMe;