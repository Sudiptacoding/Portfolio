import React from 'react';
import Darkmode from '../common/Darkmode';
import Home from '../pages/Home/Home';
import Sidebar from '../pages/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import SocialLink from '../components/SocialLink/SocialLink';
import Banner from '../components/Banner/Banner';

const Root = () => {
    return (
        <div className='bg-[#F0F0F6] dark:bg-white'>
            <div class=" ">

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
                    <span className='absolute right-[38px] top-[16px] cursor-pointer z-50'> <Darkmode></Darkmode></span>
                    <Banner></Banner>
                    <SocialLink></SocialLink>
                    <div className=' dark:bg-gray-900'>
                        <Home></Home>
                        <Footer></Footer>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Root;