import React from 'react';
import Section from '../../components/Section/Section';
import Tilt from 'react-parallax-tilt';

const Home = () => {
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
        'https://funny-souffle-d29a7d.netlify.app/assets/tailwine-1-b4bd2bbc.jpg'

    ]
    return (
        <div className=''>
            <Section title={'my skill'} body={'i am fontsdkjfa'}></Section>
            <div>

                <div class="">

                    <div className="flex flex-wrap items-center justify-center gap-10">
                        {
                            imageLink?.map((url, i) => {
                                return <div key={i}>
                                    <Tilt tiltAngleXInitial={20} tiltAngleYInitial={20}>

                                        <img className='w-[150px] rounded-full cursor-pointer' src={url} alt="" />
                                    </Tilt>
                                </div>
                            })
                        }

                    </div>
                </div>

            </div>
        </div>





    );
};

export default Home;