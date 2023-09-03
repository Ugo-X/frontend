import React from 'react'
import image from 'assets/images/swap.svg'
import Image from 'next/image'
import { Button } from '@mui/material'
import Link from 'next/link'
import { useWindowSize } from 'hooks/useWindowSize2'

const Liquidity = () => {
    const { isMobile } = useWindowSize()
    return (
        <div className='flex items-center flex-col-reverse md:flex-row'>
            <Image src={image} alt=""
                width={isMobile ? 281 : 383}
                height={isMobile ? 292 : 400}
            />
            <div className="md:px-[50px] py-3 mb-6 md:mb-0">
                <p className="text-24 md:text-48 font-bold mb-3 md:mb-6">Liquidity</p>
                <p className='mb-6 md:mb-[80px] text-[#868686]'>
                    Fast, cost-effective switching experience like no other. With an average transaction time of less than 1 second, you can exchange your tokens instantly and hassle free.our exchange fees are surprisingly low,
                    <br />
                    <br />
                    with a fixed <span className='text-[#F88F6D]'>cost of just 0.001USD</span>
                </p>
                <Button component={Link} href='' variant='contained' color='themePrimary' className='btn' >Launch APP</Button>
            </div>
        </div>
    )
}

export default Liquidity