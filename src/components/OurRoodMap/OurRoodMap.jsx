import React from 'react';
import Section from '../Section/Section';
import { Parallax, Background } from "react-parallax";

const OurRoodMap = () => {
    return (
        <div class=" p-4">
            <Section title={'My Learning Rootmap'} body={'I have been able to come to this day as a result of long-term relentless work and trying my best. Details of what I have learned on this long journey.'}></Section>


            <Parallax strength={500}>
                <Background className="custom-bg">
                    <div
                        style={{
                            height: 2000,
                            width: 2000,
                            backgroundImage: "url('https://images.pexels.com/photos/5926397/pexels-photo-5926397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
                        }}
                    />
                </Background>
                <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid h-[65vh] py-5 overflow-y-auto no-scrollbar">



                    <div class="flex md:contents flex-row-reverse">
                        <div
                            class="relative w-[350px] p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <h3 class="text-lg font-semibold lg:text-xl">HTML5</h3>
                            <p class="mt-2 leading-6">▶ Basics HTML </p>
                            <p class="mt-2 leading-6">▶ Semantic HTML </p>
                            <p class="mt-2 leading-6">▶ Proper structuring </p>
                            <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Total 30 days</span>
                        </div>
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto ">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                                </div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                    </div>

                    <div class="flex md:contents">
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-indigo-300"></div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                        <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto w-[350px] ">
                            <h3 class="text-lg font-semibold lg:text-xl">CSS3</h3>
                            <p class="mt-2 leading-6">▶ Vanilla CSS, Box Model, Typography</p>
                            <p class="mt-2 leading-6">▶ Selectors and Combinators, Flexbox</p>
                            <p class="mt-2 leading-6">▶ Colors and Backgrounds, Grid Layout</p>
                            <p class="mt-2 leading-6">▶ Responsive Design</p>
                            <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Total 40 days</span>
                        </div>
                    </div>




                    <div class="flex md:contents flex-row-reverse">
                        <div
                            class="relative w-[350px] p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <h3 class="text-lg font-semibold lg:text-xl">Javascript</h3>
                            <p class="mt-2 leading-6">▶ Foundational Concepts, Web APIs </p>
                            <p class="mt-2 leading-6">▶ ES6 + Features </p>
                            <p class="mt-2 leading-6">▶ DOM Manipulation </p>
                            <p class="mt-2 leading-6">▶ Asynchronous JavaScript </p>
                            <p class="mt-2 leading-6">▶ Client-Side Frameworks/Libraries </p>
                            <p class="mt-2 leading-6">▶ Node.js,Express.js, Version Control   </p>
                            <p class="mt-2 leading-6">▶ Testing, Build Tools, RESTful APIs   </p>
                            <p class="mt-2 leading-6">▶ Debugging and DevTools, NPM  </p>
                            <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Total 60 days</span>
                        </div>
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto ">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                                </div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                    </div>

                    <div class="flex md:contents">
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-indigo-300"></div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                        <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto w-[350px] ">
                            <h3 class="text-lg font-semibold lg:text-xl">React Js</h3>
                            <p class="mt-2 leading-6">▶ Proper Folder Structure, Context API </p>
                            <p class="mt-2 leading-6">▶ State and Props, Virtual DOM </p>
                            <p class="mt-2 leading-6">▶ Hooks, Routing, State Management </p>
                            <p class="mt-2 leading-6">▶ Component Styling, Forms Handling</p>
                            <p class="mt-2 leading-6">▶ Error Handling, React Route</p>
                            <p class="mt-2 leading-6">▶ Code Splitting, JSX syntax </p>
                            <p class="mt-2 leading-6">▶ Collaboration with Backend, Git </p>
                            <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Total 50 days</span>
                        </div>
                    </div>




                    <div class="flex md:contents flex-row-reverse">
                        <div
                            class="relative w-[350px] p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <h3 class="text-lg font-semibold lg:text-xl">Firebase</h3>
                            <p class="mt-2 leading-6">▶ Authentication</p>
                            <p class="mt-2 leading-6">▶ Realtime Database: </p>
                            <p class="mt-2 leading-6">▶ Firebase Hosting </p>
                            <p class="mt-2 leading-6">▶ Firestore </p>
                            <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Total 40 days</span>
                        </div>
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto ">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                                </div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                    </div>

                    <div class="flex md:contents">
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-indigo-300"></div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                        <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto w-[350px] ">
                            <h3 class="text-lg font-semibold lg:text-xl">Bootstrap</h3>
                            <p class="mt-2 leading-6">▶ Responsive Design </p>
                            <p class="mt-2 leading-6">▶ Bootstrap Components </p>
                            <p class="mt-2 leading-6">▶ Customization </p>
                            <p class="mt-2 leading-6">▶ Grid System Mastery</p>
                            <p class="mt-2 leading-6">▶ Typography and Icons</p>
                            <p class="mt-2 leading-6">▶ Responsive Navigation </p>
                            <p class="mt-2 leading-6">▶ Forms and Form Validation </p>
                            <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Total 20 days</span>
                        </div>
                    </div>




                    <div class="flex md:contents flex-row-reverse">
                        <div
                            class="relative w-[350px] p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <h3 class="text-lg font-semibold lg:text-xl">Tailwind CSS</h3>
                            <p class="mt-2 leading-6">▶ Utility Classes</p>
                            <p class="mt-2 leading-6">▶ Themability </p>
                            <p class="mt-2 leading-6">▶ Plugins </p>
                            <p class="mt-2 leading-6">▶ Dark Mode </p>
                            <p class="mt-2 leading-6">▶ Responsive Design </p>
                            <p class="mt-2 leading-6">▶ Bootstrap Components </p>
                            <p class="mt-2 leading-6">▶ Customization </p>
                            <p class="mt-2 leading-6">▶ Grid System Mastery</p>
                            <p class="mt-2 leading-6">▶ Typography and Icons</p>
                            <p class="mt-2 leading-6">▶ Responsive Navigation </p>
                            <p class="mt-2 leading-6">▶ Forms and Form Validation </p>
                            <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Total 30 days</span>
                        </div>
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto ">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                                </div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                    </div>

                    <div class="flex md:contents">
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-indigo-300"></div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                        <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto w-[350px] ">
                            <h3 class="text-lg font-semibold lg:text-xl">Node.js</h3>
                            <p class="mt-2 leading-6">▶ Installation and Setup </p>
                            <p class="mt-2 leading-6">▶ Modules and npm </p>
                            <p class="mt-2 leading-6">▶ CommonJS Modules </p>
                            <p class="mt-2 leading-6">▶ Event Loop</p>
                            <p class="mt-2 leading-6">▶ HTTP Module</p>
                            <p class="mt-2 leading-6">▶ npm Scripts </p>
                            <p class="mt-2 leading-6">▶ Debugging </p>
                            <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Total 20 days</span>
                        </div>
                    </div>



                    <div class="flex md:contents flex-row-reverse">
                        <div
                            class="relative w-[350px] p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <h3 class="text-lg font-semibold lg:text-xl">Express.js</h3>
                            <p class="mt-2 leading-6">▶ Routing</p>
                            <p class="mt-2 leading-6">▶ Middleware </p>
                            <p class="mt-2 leading-6">▶ Request and Response Handling </p>
                            <p class="mt-2 leading-6">▶ Error Handling </p>
                            <p class="mt-2 leading-6">▶ Form Handling </p>
                            <p class="mt-2 leading-6">▶ Authentication and Authorization </p>
                            <p class="mt-2 leading-6">▶ API Development </p>
                            <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Total 30 days</span>
                        </div>
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto ">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                                </div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                    </div>

                    <div class="flex md:contents">
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-indigo-300"></div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                        <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto w-[350px] ">
                            <h3 class="text-lg font-semibold lg:text-xl">MongoDB</h3>
                            <p class="mt-2 leading-6">▶ Understanding JSON </p>
                            <p class="mt-2 leading-6">▶ Document Structure </p>
                            <p class="mt-2 leading-6">▶ MongoDB Query </p>
                            <p class="mt-2 leading-6">▶ CRUD Operations</p>
                            <p class="mt-2 leading-6">▶ Basic Data Modeling</p>
                            <p class="mt-2 leading-6">▶ Error Handling </p>
                            <p class="mt-2 leading-6">▶ MongoDB Atlas </p>
                            <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Total 40 days</span>
                        </div>
                    </div>


                    <div class="flex md:contents flex-row-reverse">
                        <div
                            class="relative w-[350px] p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <h3 class="text-lg font-semibold lg:text-xl">For state management</h3>
                            <p class="mt-2 leading-6">▶ TanStack Query</p>
                            <p class="mt-2 leading-6">▶ Context API  </p>
                            <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Total 20 days</span>
                        </div>
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto ">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                                </div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                    </div>

                    <div class="flex md:contents">
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-indigo-300"></div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                        <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto w-[350px] ">
                            <h3 class="text-lg font-semibold lg:text-xl">For Authentication</h3>
                            <p class="mt-2 leading-6">▶ Firebase </p>
                            <p class="mt-2 leading-6">▶ JWT</p>
                            <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Total 30 days</span>
                        </div>
                    </div>

                </div>
            </Parallax>


        </div>
    );
};

export default OurRoodMap;