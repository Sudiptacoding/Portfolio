import React from 'react';
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const SocialLink = () => {
    return (
        <div className='z-50 flex items-center justify-center p-5 bg-[#F0F0F6] w-full dark:bg-gray-900 flex-wrap lg:gap-0 gap-5'>
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
    );
};

export default SocialLink;