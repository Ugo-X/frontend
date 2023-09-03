import React, { useState } from 'react'
import useSwipe from 'hooks/useSwipe';
import { Button, Grid } from '@mui/material';
import img1 from 'assets/images/team1.png'
import img2 from 'assets/images/team2.png'
import img3 from 'assets/images/team3.png'
import Image from 'next/image';
import Link from 'next/link';
import { FiberManualRecord, GitHub, Language, LinkedIn } from '@mui/icons-material';
import { useWindowSize } from 'hooks/useWindowSize2';

const data = [
    {
        image: img1,
        name: 'Esteban iglesias (esteblock)',
        title: 'Founder / Senior full-stack Blockchain developer',
        info: 'As a self-motivated, versatile, and polyglot professional with over 10 years of experience in full-stack development, I am passionate about innovation, decentralization, and the power of blockchain technology. <br /> <br /> I am a Chilean with a background in electrical engineering and a master’s degree in applied economics with studies in France (École Centrale Paris), UK (University of Oxford), and Chile (Universidad de Chile).',
        website: '',
        linkedin: '',
        github: ''
    },
    {
        image: img2,
        name: 'Joaquin Soza (yripper)',
        title: 'Full-stack Blockchain Developer',
        info: 'As a dedicated blockchain developer, I’ve immersed myself in this dynamic field for over 4 years. <br /> <br />  My self-taught journey began at the age of 14, starting with coding and Linux. My technical skills extend beyond software development, encompassing soldering and microcontrollers.',
        website: '',
        linkedin: '',
        github: ''
    },
    {
        image: img3,
        name: 'Francisco (_devmonster)',
        title: 'Senior Full-stack Blockchain Developer',
        info: 'Driven by curiosity and a passion for blockchain technology, I am an experienced (6 years) full-stack developer with expertise in Soroban, Ethereum, Solana, Avalanche platforms. <br /> <br /> Currently, I’m focused on developing Soroswap, a Uniswap-like AMM for Soroban. My academic foundation includes an Electrical Engineering degree from Universidad de Chile and General Engineering from Ecole CentraleSupelec, France.',
        website: '',
        linkedin: '',
        github: ''
    }
]

const Team = () => {
    const [activeindex, setActiveIndex] = useState(0)
    const { isMobile } = useWindowSize()
    const swipeHandlers = useSwipe({
        onSwipedLeft: () => {
            if (activeindex !== data.length - 1) setActiveIndex(activeindex + 1)
            else setActiveIndex(0)
        },
        onSwipedRight: () => {
            if (activeindex !== 0) setActiveIndex(activeindex - 1)
            else setActiveIndex(data.length - 1)
        }
    });

    const Dots = ({ className, fontSize = '16px' }: { className?: string, fontSize?: string }) => {
        return (
            <div className={`flex justify-center ${className}`}>
                {data.map((a, i) =>
                    <FiberManualRecord key={i}
                        style={{ color: i === activeindex ? '#F88F6D' : '#4E4E4E', fontSize: fontSize }}
                        onClick={() => setActiveIndex(i)}
                        className='cursor-pointer'
                    />
                )}
            </div>
        )
    }

    return (
        <section className='pt-[50px] pb-[25px] md:pt-[100px] md:pb-[50px]'>
            <div className="container">
                <div className="text-center mb-14">
                    <p className="text-primary-light text-8 md:text-14 mb-2 md:mb-3 uppercase tracking-widest">About us</p>
                    <h2 className='text-24 md:text-56 font-normal uppercase leading-none font-dg'>
                        Meet <span className='font-extrabold'>our <span className='text-secondary'>team</span></span>
                    </h2>
                </div>
                <div {...swipeHandlers}>
                    <div className='flex flex-col md:flex-row items-center md:items-start'>
                        <div className='md:w-[486px]'>
                            <div className='flex'>
                                <div className='w-[55px] md:w-[102px]'>
                                    {data.map((person, i) =>
                                        <Image
                                            src={person.image}
                                            alt=''
                                            width={isMobile ? 55 : 102}
                                            height={isMobile ? 70 : 130}
                                            className={`mb-2 ${i !== activeindex ? 'grayscale' : 'grayscale-0'} cursor-pointer`}
                                            onClick={() => setActiveIndex(i)}
                                            key={i}
                                        />
                                    )}
                                </div>
                                <div className='pl-3'>
                                    <Image
                                        src={data[activeindex].image}
                                        alt=''
                                        width={isMobile ? 195 : 362}
                                        height={isMobile ? 236 : 438}
                                    />
                                </div>
                            </div>
                        </div>
                        {isMobile && <Dots className='my-6' />}
                        <div className='w-full md:pl-[102px]'>
                            <h3 className='text-24 md:text-48 font-bold font-dg'>{data[activeindex].name}</h3>
                            <p className='mb-4 text-10 md:text-16'>{data[activeindex].title}</p>
                            <p dangerouslySetInnerHTML={{ __html: data[activeindex].info }} className='mb-6 md:mb-11 text-12 md:text-18 text-[#868686]' />

                            <div className="flex [&>*]:mr-4">
                                <Button component={Link} href='' variant='contained' color='themePrimary' className='btn'
                                    endIcon={<Language />}
                                >Website</Button>
                                <Button component={Link} href='' variant='contained' color='themePrimary' className='btn'
                                    endIcon={<LinkedIn />}
                                >Linkedin</Button>
                                <Button component={Link} href='' variant='contained' color='themePrimary' className='btn'
                                    endIcon={<GitHub />}
                                >GitHub</Button>
                            </div>
                        </div>
                    </div>
                </div>
                {!isMobile && <Dots className='pt-8' />}
            </div>
        </section>
    )
}

export default Team