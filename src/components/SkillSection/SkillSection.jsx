import React from 'react';

import Tilt from 'react-parallax-tilt';
import ScrollParalax from '../../components/ScrollParalax/ScrollParalax';

import { Parallax, Background } from "react-parallax";
import 'animate.css';
import Section from '../../components/Section/Section';

const SkillSection = () => {
    const imageLink = [
        'https://funny-souffle-d29a7d.netlify.app/assets/html-aab22738.jpg',
        'https://funny-souffle-d29a7d.netlify.app/assets/css3-456786bc.jpg',
        'https://funny-souffle-d29a7d.netlify.app/assets/javascript-c91803e7.jpg',
        'https://funny-souffle-d29a7d.netlify.app/assets/react1-b490b860.jpg',
        'https://funny-souffle-d29a7d.netlify.app/assets/nodejs-d92c3c46.png',
        'https://funny-souffle-d29a7d.netlify.app/assets/express-b084778d.jpg',
        'https://funny-souffle-d29a7d.netlify.app/assets/firebase-a0313d7d.jpg',
        'https://funny-souffle-d29a7d.netlify.app/assets/mongodb-a2c3f760.jpg',
        'https://funny-souffle-d29a7d.netlify.app/assets/boostrap-9ba382c7.jpg',
        'https://funny-souffle-d29a7d.netlify.app/assets/tailwine-1-b4bd2bbc.jpg',
        'https://i.postimg.cc/LsJ8ZGkq/Captuasdre-removebg-preview.png',
        'https://i.postimg.cc/qBFdfvWW/0v-T-Uq-ER-400x400.jpg'

    ]
    return (
        <>
            <Section title={'My skills'} body={'Proven ability to create visually stunning and responsive web applications, focusing on both functionality and user experience. Adept at leveraging modern frontend frameworks to deliver dynamic and engaging interfaces.'}></Section>
            <Parallax strength={500}>
                <Background className="custom-bg">
                    <div
                        style={{
                            height: 2000,
                            width: 2000,
                            backgroundImage: "url('https://images.pexels.com/photos/5926399/pexels-photo-5926399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
                        }}
                    />
                </Background>
                <div>
                    <div class="flex items-center justify-center flex-col lg:flex-row w-full lg:px-[100px] p-14">

                        <div className="flex flex-wrap items-center justify-center flex-1 gap-5">
                            {
                                imageLink?.map((url, i) => {
                                    return <div key={i} className='animate__animated animate__flip animate__infinite infinite my-element'>
                                        <Tilt tiltAngleXInitial={20} tiltAngleYInitial={20}>
                                            <img className='lg:w-[80px] w-[30px] rounded-full cursor-pointer' src={url} alt="" />
                                        </Tilt>
                                    </div>
                                })
                            }

                        </div>
                        <div className='flex items-center justify-center flex-1'>
                            <Tilt tiltAngleXInitial={20} tiltAngleYInitial={20}>
                                <ScrollParalax></ScrollParalax>
                            </Tilt>

                        </div>
                    </div>
                </div>
            </Parallax>
        </>
    );
};

export default SkillSection;