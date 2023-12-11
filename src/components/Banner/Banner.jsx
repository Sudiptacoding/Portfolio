import React from 'react';
import { FaDownload } from "react-icons/fa6";


const Banner = () => {

    return (
        <header className=" xl:px-[60px] bg-white banner-bg  dark:bg-gray-900 xl:pb-0">
            <div class="px-10 py-0" >
                <div class="xl:container mx-auto">
                    <div class="flex flex-col sm:flex-row items-center -mx-4">

                        <div className='pt-10 text-center md:text-left md:pt-0'>
                            <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl 2xl:text-6xl lg:text-5xl lg:leading-tight dark:text-white">I’m Sudipta Biswas , <br /> <span class="text-blue-600">Front-end</span> Developer</h1>
                            <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">I’m a quick learner. I believe in hard work
                                and efficiency. I always like to learn new
                                things and have experience with new stuff</p>
                            <div class="mt-7 grid gap-3 w-full sm:inline-flex">
                                <a class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/public/MERN-STACK developer  resume of Sudipta Biswas.pdf" download='MERN-STACK developer  resume of Sudipta Biswas.pdf'>
                                    Download Resume
                                    <FaDownload />
                                </a>
                            </div>
                        </div>
                        <div class="hidden px-4 lg:block lg:w-1/12"></div>
                        <div class="w-full px-4 lg:w-6/12">
                            <div class="lg:ml-auto lg:text-right">
                                <div class="relative z-10 inline-block pt-11 lg:pt-0">
                                    <img
                                        src="https://i.postimg.cc/wTChkGn8/Untitled-design-removebg-preview-3-transformed-removebg-preview.png"
                                        alt="hero"
                                        class="max-w-full lg:ml-auto mb-[-6px]"
                                    />
                                    <span class="absolute -left-8 -bottom-0 z-[-1]">
                                        <svg
                                            width="93"
                                            height="93"
                                            viewBox="0 0 93 93"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </header>
    );
};

export default Banner;