import { ArrowForward } from '@mui/icons-material'
import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import bg from 'assets/images/cta-bg.svg'

const CTA = () => {
    return (
        <section className='py-6 md:py-[50px] bg-no-repeat bg-cover' style={{backgroundImage: `url(${bg.src})`}}>
            <div className="container">
                <div className="text-center">
                    <h2 className="text-24 md:text-64 font-extrabold uppercase font-dg mb-2">Start now</h2>
                    <p className="text-12 md:text-20 text-[##868686] mb-2 mb:mb-4">Connect your Stellar Wallet and trade without KYC</p>
                    <Link href='' className='flex items-center mx-auto justify-center text-[#F88F6D] mb-4 md:mb-8'>
                        More about the stellar blockchain
                        <ArrowForward className='!text-[28px] ml-4' style={{ transform: 'rotate(-45deg)' }} />
                    </Link>
                    <Button component={Link} href='' variant='contained' color='themePrimary' className='btn' >Connect Wallet</Button>
                </div>
            </div>
        </section>
    )
}

export default CTA