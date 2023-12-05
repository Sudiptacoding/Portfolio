import React from 'react';
import Darkmode from '../common/Darkmode';
import Home from '../pages/Home/Home';
import Sidebar from '../pages/Sidebar/Sidebar';

import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import Footer from '../components/Footer/Footer';

const Root = () => {

    return (
        <div className='bg-[#F0F0F6] dark:bg-white'>
            <body class=" ">

                <div class="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 2xl:hidden dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex items-center py-4">

                        <button type="button" class="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
                            <span class="sr-only">Toggle Navigation</span>
                            <svg class="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </button>

                        <ol class="ms-3 flex items-center whitespace-nowrap" aria-label="Breadcrumb">
                            <li class="flex items-center text-sm text-gray-800 dark:text-gray-400">
                                About Me
                                <svg class="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </li>
                        </ol>

                    </div>
                </div>

                <div id="application-sidebar" class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-[305px] bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto 2xl:block 2xl:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700">

                    <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-close>
                        <div className='flex items-center justify-center'>
                            <div class="relative inline-block">
                                <img class="inline-block h-[150px] w-[150px] rounded-full" src="https://i.postimg.cc/PxWmSyb2/Untitled-design-removebg-preview-3-transformed.png" alt="Image Description" />
                                <span class="absolute bottom-0 end-[26px] block h-3.5 w-3.5 rounded-full ring-2 ring-white bg-yellow-500"></span>
                            </div>
                        </div>
                        <div>
                            <Sidebar></Sidebar>
                        </div>
                    </nav>
                </div>

                <div class="w-full 2xl:ps-[21rem] relative">
                    <span className='absolute right-[38px] top-[16px] cursor-pointer'> <Darkmode></Darkmode></span>
                    <header className=" xl:px-[60px] bg-white banner-bg  dark:bg-gray-900 xl:pb-0">
                        <div class="px-10 py-0" >
                            <div class="xl:container mx-auto">
                                <div class="flex flex-col sm:flex-row items-center -mx-4">

                                    <div className='pt-10 text-center md:text-left md:pt-0'>
                                        <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl 2xl:text-6xl lg:text-3xl lg:leading-tight dark:text-white">I’m Sudipta Biswas , <br /> <span class="text-blue-600">Front-end</span> Developer</h1>
                                        <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">I’m a quick learner. I believe in hard work
                                            and efficiency. I always like to learn new
                                            things and have experience with new stuff</p>
                                        <div class="mt-7 grid gap-3 w-full sm:inline-flex">
                                            <a class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                Hire Me
                                                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                            </a>
                                            <a class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                Contact sales team
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

                    <div className='z-50 flex items-center justify-center pt-5 bg-[#F0F0F6] w-full dark:bg-gray-900 flex-wrap lg:gap-0 gap-5'>
                        <div className='flex items-center gap-2'>
                            <span> <MdOutlineMail className='dark:text-gray-400' /></span>
                            <span> <a className='cursor-pointer dark:text-gray-400'>sudiptabiswas506@gmail.com</a></span>
                        </div>

                        <div className="divider lg:divider-horizontal"></div>
                        <div className='flex items-center gap-2'>
                            <span> <MdOutlinePhone className='dark:text-gray-400' /></span>
                            <span> <a className='cursor-pointer dark:text-gray-400'>+880 1748272867</a></span>
                        </div>
                        <div className="divider lg:divider-horizontal"></div>
                        <div className='flex items-center gap-2'>
                            <span> <FaGithub className='dark:text-gray-400' /></span>
                            <span> <a target='_blank' href="https://github.com/Sudiptacoding" className='cursor-pointer dark:text-gray-400'>Sudiptacoding</a></span>
                        </div>
                        <div className="divider lg:divider-horizontal"></div>
                        <div className='flex items-center gap-2'>
                            <span> <FaWhatsapp className='dark:text-gray-400' /></span>
                            <span> <a className='dark:text-gray-400'>+880 1748272867</a></span>
                        </div>
                        <div className="divider lg:divider-horizontal"></div>
                        <div className='flex items-center gap-2'>
                            <span> <CiLinkedin className='dark:text-gray-400' /></span>
                            <span> <a target='_blank' href='https://www.linkedin.com/in/sudipta-biswas123/' className='dark:text-gray-400'>Sudipta Biswas</a></span>
                        </div>

                    </div>
                    <div className=' dark:bg-gray-900'>
                        <Home></Home>
                    </div>

                </div>

            </body>
            <Footer></Footer>
        </div>
    );
};

export default Root;