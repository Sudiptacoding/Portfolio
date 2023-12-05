import React from 'react';

const Section = ({ title, body }) => {
    return (
        <div className='text-center'>
            <h1 className='text-[32px] font-bold text-[#2B2B2B] dark:text-white'>{title}</h1>
            <p className='text-[#767676] leading-6 text-[15px] dark:text-gray-400'>{body}</p>
        </div>
    );
};

export default Section;