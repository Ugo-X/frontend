import { ArrowForwardIos } from '@mui/icons-material'
import { Button, useTheme } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import bannerImage from '../../assets/images/banner.svg'
import bannerImageLight from '../../assets/images/banner-light.svg'
import { useWindowSize } from 'hooks/useWindowSize2'

const ButtonGroup = ({ className }: { className?: string }) => {
    return (
        <div className={`flex whitespace-nowrap ${className}`}>
            <Button component={Link} href='' variant='contained' color='themePrimary' className='btn' >Launch APP</Button>
            <Button component={Link} href='' variant='text' color='primary' className='text-10 md:text-16 !normal-case !leading-normal !bg-transparent ml-3' disableRipple
                endIcon={<ArrowForwardIos className='text-primary-light !text-[14px] ml-2' />}
            >Soroban Blockchain</Button>
        </div>
    )
}

const Banner = () => {
    const { palette: { mode } } = useTheme()
    const { isMobile } = useWindowSize()

    return (
        <section className={`py-[50px] md:pt-[92px] md:pb-[100px] bg-opacity-25 `}>
            <div className="container">
                <div className="flex justify-between flex-col md:flex-row">
                    <div className=''>
                        <p className='text-primary-light text-8 md:text-14 uppercase tracking-widest mb-2 md:mb-0'>Home</p>
                        <h1 className='text-24 md:text-64 font-normal uppercase leading-none font-dg mb-6'>
                            The first of the <br />
                            <strong><span className='text-secondary'>Soroban</span> Blockchain</strong>
                        </h1>
                        <div className="max-w-[514px] mb-5 md:mb-14">
                            <p className='text-[#9292A3]'>One of the pioneers within the Stellar blockchain ecosystem, Soroswap stands as a testament to the potential of decentralization and automation in the world of cryptocurrency exchanges.</p>
                        </div>
                        {!isMobile && <ButtonGroup />}
                    </div>
                    <div className='relative'>
                        <div className='md:-mr-[140px]'>
                            <Image
                                src={mode === 'dark' ? bannerImage : bannerImageLight}
                                alt=''
                                width={isMobile ? 329 : 588}
                                height={isMobile ? 250 : 447}
                            />
                        </div>
                    </div>
                </div>
                {isMobile && <ButtonGroup className='mt-6' />}
            </div>
        </section>
    )
}

export default Banner