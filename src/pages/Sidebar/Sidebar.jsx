import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io5";
import AboutMe from '../../components/AboutMe/AboutMe';
import Language from '../../components/Language/Language';

const Sidebar = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-[#2B2B2B] text-lg font-medium pt-5 dark:text-white'>Sudipta Biswas</h1>
                <p className='text-[#767676] text-[15px] font-normal pt-2 dark:text-gray-400'>Font-End Developer (MERN)</p>
            </div>
            {/* Icon link */}
            <div className='flex items-center justify-center gap-5 pt-5'>
                <TiSocialFacebook className='p-1 text-2xl bg-[#FFB400] rounded-full' />
                <FaLinkedinIn className='p-1 text-2xl bg-[#FFB400] rounded-full' />
                <CiInstagram className='p-1 text-2xl bg-[#FFB400] rounded-full' />
                <IoLogoGithub className='p-1 text-2xl bg-[#FFB400] rounded-full' />
            </div>
            <div className="py-3 font-bold divider dark:text-gray-400">About Me</div>
            {/* Bout me */}
            <div className=''>
                <AboutMe text={'Age:'} value={'24'}></AboutMe>
                <AboutMe text={'Residence:'} value={'BD'}></AboutMe>
                <AboutMe text={'Experience:'} value={'1 years'}></AboutMe>
                <AboutMe text={'Address:'} value={'Satkhira,Bangladesh'}></AboutMe>
            </div>
            <div className="pt-5 pb-3 font-bold divider dark:text-gray-400">Languages</div>
            {/* Progress */}
            <div>
                <Language text={'Bangla'} value={'100%'}></Language>
                <Language text={'English'} value={'80%'}></Language>
                <Language text={'Hindi'} value={'90%'}></Language>
            </div>

            <div className="pt-5 pb-3 font-bold divider dark:text-gray-400">Skills</div>
            {/* skill */}
            <div>
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

            {/* Education */}

            <div className="py-3 font-bold divider dark:text-gray-400">Education</div>
            {/* Bout me */}
            <div className=''>
                <AboutMe text={'BSC Honours:'} value={'Mathematics'}></AboutMe>
                <AboutMe text={'Session:'} value={'(2018-2019)'}></AboutMe>
                <AboutMe text={'HSC:'} value={'Science (GPA 3.83)'}></AboutMe>
                <AboutMe text={'SSC:'} value={'Science (GPA 5.00)'}></AboutMe>
            </div>

            {/* OTher skills */}

            <div className="pt-5 pb-3 font-bold divider dark:text-gray-400">Tools</div>
            {/* Progress */}
            <div>
                <Language text={'VS Code'} value={'100%'}></Language>
                <Language text={'Git'} value={'99%'}></Language>
                <Language text={'Vite'} value={'99%'}></Language>
                <Language text={'NPM'} value={'95%'}></Language>
                <Language text={'Chrome Dev tool'} value={'89%'}></Language>
                <Language text={'Firebase'} value={'95%'}></Language>
                <Language text={'Netlify'} value={'99%'}></Language>
                <Language text={'Vercel'} value={'99%'}></Language>
            </div>

            {/* Other expreances */}

            <div className="pt-5 pb-3 font-bold divider dark:text-gray-400">Other expressions</div>
            {/* Progress */}
            <div>
                <Language text={'Canva'} value={'90%'}></Language>
                <Language text={'Figma'} value={'90%'}></Language>
                <Language text={'Video(Capcut)'} value={'95%'}></Language>
                <Language text={'Audio(Audacity )'} value={'90%'}></Language>
                <Language text={'Video(Wondershare filmora)'} value={'80%'}></Language>
            </div>
        </div>
    );
};

export default Sidebar;