import React from 'react';

const Language = ({ text, value }) => {
    console.log(value)
    return (
        <div>
            <div className='mb-5'>
                <div class="mb-2 flex justify-between items-center">
                    <h3 class="text-[15px] font-semibold text-[#767676] dark:text-white">{text}</h3>
                    <span class="text-sm text-gray-800 dark:text-white">{value}</span>
                </div>
                <div class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div class={`flex flex-col justify-center rounded-full overflow-hidden bg-[#FFB400] text-xs text-white text-center whitespace-nowrap transition duration-500`} style={{ width: `${value}` }}></div>
                </div>
            </div>
        </div>
    );
};

export default Language;