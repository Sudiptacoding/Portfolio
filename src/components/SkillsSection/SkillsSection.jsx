import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Language from '../Language/Language';

import { CiUser } from "react-icons/ci";
import { IoLanguageOutline } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa6";
import { RiToolsLine } from "react-icons/ri";
import { PiShareNetworkThin } from "react-icons/pi";

const SkillsSection = () => {
    return (
        <div>

            <div class="relative overflow-hidden">
                <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-10">
                    <div class="text-center">


                        <div class="mt-7 sm:mt-12 mx-auto max-w-xl relative">

                            <form>
                                <div class="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
                                    <div class="flex-[1_0_0%]">
                                        <h1 class="text-4xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 skill-section py-2">
                                            My all skills
                                        </h1>
                                    </div>
                                </div>
                            </form>

                            <div class="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                                <svg class="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                                    <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                                    <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                                </svg>
                            </div>

                            <div class="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                                <svg class="w-40 h-auto text-cyan-500" width="347" height="188" viewBox="0 0 347 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426" stroke="currentColor" stroke-width="7" stroke-linecap="round" />
                                </svg>
                            </div>

                        </div>

                        <div class="mt-10 sm:mt-20">
                            <a onClick={() => document.getElementById('my_modal_1').showModal()} class="m-1 py-3 px-4 inline-flex cursor-pointer items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
                                <CiUser />
                                About Me
                            </a>
                            <a onClick={() => document.getElementById('my_modal_2').showModal()} class="m-1 py-3 px-4 inline-flex cursor-pointer items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
                                <IoLanguageOutline />
                                Languages
                            </a>
                            <a onClick={() => document.getElementById('my_modal_3').showModal()} class="m-1 py-3 px-4 inline-flex cursor-pointer items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
                                <GiSkills />
                                Skills
                            </a>
                            <a onClick={() => document.getElementById('my_modal_4').showModal()} class="m-1 py-3 px-4 inline-flex cursor-pointer items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
                                <FaUserGraduate />
                                Education
                            </a>
                            <a onClick={() => document.getElementById('my_modal_5').showModal()} class="m-1 py-3 px-4 inline-flex cursor-pointer items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
                                <RiToolsLine />
                                Tools
                            </a>
                            <a onClick={() => document.getElementById('my_modal_6').showModal()} class="m-1 py-3 px-4 inline-flex cursor-pointer items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
                                <PiShareNetworkThin />
                                Other expressions
                            </a>

                        </div>
                    </div>
                </div>
            </div>



            {/* Skills modal */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box dark:bg-gray-900">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:border-white dark:text-white">✕</button>
                    </form>
                    <div className='pt-10'>
                        <AboutMe text={'Age:'} value={'24'}></AboutMe>
                        <AboutMe text={'Residence:'} value={'BD'}></AboutMe>
                        <AboutMe text={'Experience:'} value={'2 years'}></AboutMe>
                        <AboutMe text={'Address:'} value={'Satkhira,Bangladesh'}></AboutMe>
                    </div>
                </div>
            </dialog>



            <dialog id="my_modal_2" className="modal">
                <div className="modal-box dark:bg-gray-900">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2     dark:border-white dark:text-white">✕</button>
                    </form>
                    <div className='pt-10'>
                        <Language text={'Bangla'} value={'100%'}></Language>
                        <Language text={'English'} value={'80%'}></Language>
                        <Language text={'Hindi'} value={'90%'}></Language>
                    </div>
                </div>
            </dialog>




            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-gray-900">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2    dark:border-white dark:text-white">✕</button>
                    </form>
                    <div className='pt-10'>
                        <Language text={'React.js'} value={'90%'}></Language>
                        <Language text={'Express.js'} value={'60%'}></Language>
                        <Language text={'MongoDB'} value={'70%'}></Language>
                        <Language text={'Tailwind'} value={'95%'}></Language>
                        <Language text={'Firebase'} value={'95%'}></Language>
                        <Language text={'Node.js'} value={'50%'}></Language>
                        <Language text={'HTML5'} value={'91%'}></Language>
                        <Language text={'Bootstrap5'} value={'80%'}></Language>
                        <Language text={'ES6'} value={'70%'}></Language>
                        <Language text={'JavaScript'} value={'90%'}></Language>
                        <Language text={'React Bootstrap'} value={'80%'}></Language>
                        <Language text={'API'} value={'90%'}></Language>
                        <Language text={'JSON'} value={'83%'}></Language>
                        <Language text={'Material UI'} value={'50%'}></Language>
                        <Language text={'daisyUI'} value={'97%'}></Language>
                        <Language text={'Redux.js'} value={'20%'}></Language>
                        <Language text={'Next.js'} value={'20%'}></Language>
                        <Language text={'API'} value={'90%'}></Language>
                    </div>
                </div>
            </dialog>




            <dialog id="my_modal_4" className="modal">
                <div className="modal-box dark:bg-gray-900">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2   dark:border-white dark:text-white">✕</button>
                    </form>
                    <div className='pt-10'>
                        <AboutMe text={'BSC Honours:'} value={'Mathematics'}></AboutMe>
                        <AboutMe text={'Session:'} value={'(2018-2019)'}></AboutMe>
                        <AboutMe text={'HSC:'} value={'Science (GPA 3.83)'}></AboutMe>
                        <AboutMe text={'SSC:'} value={'Science (GPA 5.00)'}></AboutMe>
                    </div>
                </div>
            </dialog>




            <dialog id="my_modal_5" className="modal">
                <div className="modal-box dark:bg-gray-900">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2  dark:border-white dark:text-white">✕</button>
                    </form>
                    <div className='pt-10'>
                        <Language text={'VS Code'} value={'100%'}></Language>
                        <Language text={'Git'} value={'99%'}></Language>
                        <Language text={'Vite'} value={'99%'}></Language>
                        <Language text={'NPM'} value={'95%'}></Language>
                        <Language text={'Chrome Dev tool'} value={'89%'}></Language>
                        <Language text={'Firebase'} value={'95%'}></Language>
                        <Language text={'Netlify'} value={'99%'}></Language>
                        <Language text={'Vercel'} value={'99%'}></Language>
                    </div>
                </div>
            </dialog>

            <dialog id="my_modal_6" className="modal">
                <div className="modal-box dark:bg-gray-900">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:border-white dark:text-white">✕</button>
                    </form>
                    <div className='pt-10'>
                        <Language text={'Canva'} value={'90%'}></Language>
                        <Language text={'Figma'} value={'90%'}></Language>
                        <Language text={'Video(Capcut)'} value={'95%'}></Language>
                        <Language text={'Audio(Audacity )'} value={'90%'}></Language>
                        <Language text={'Video(Wondershare filmora)'} value={'80%'}></Language>
                    </div>
                </div>
            </dialog>







        </div>
    );
};

export default SkillsSection;