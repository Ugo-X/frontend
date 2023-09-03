import { Grid } from '@mui/material'
import React from 'react'
import { Card } from './common'
import { useWindowSize } from 'hooks/useWindowSize2'

const About = () => {
    const { isMobile } = useWindowSize()
    return (
        <section className='py-[25px] md:py-[50spx]'>
            <div className="container">
                <div className="text-center">
                    <p className="text-primary-light text-8 md:text-14 mb-2 md:mb-0 uppercase tracking-widest">Benefits</p>
                    <h2 className='text-24 md:text-56 font-normal uppercase leading-none font-dg mb-10 md:mb-14'>
                        Why <span className='font-extrabold'><span className='text-secondary'>use</span> Soroswap</span>
                    </h2>
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <h4 className='text-20 md:text-32 font-semibold mb-3'>Fast</h4>
                            <p className='text-[#868686] text-12 md:text-24'>In Soroswap you can make <br /> swap in less than 1 second</p>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <h4 className='text-20 md:text-32 font-semibold mb-3'>Low fees</h4>
                            <p className='text-[#868686] text-12 md:text-24'>Lowest fees in the entire ecosystem, 0.001USD per exchange</p>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <h4 className='text-20 md:text-32 font-semibold mb-3'>Cross- border</h4>
                            <p className='text-[#868686] text-12 md:text-16'>Soraban is a revoluion for the Stellar blockchain focused on DeFI.</p>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <h4 className='text-20 md:text-32 font-semibold mb-3'>Permissionless</h4>
                            <p className='text-[#868686] text-12 md:text-16'>Anyone with an Stellar wallet can access and trade without KYC.</p>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <h4 className='text-20 md:text-32 font-semibold mb-3'>Decentralization</h4>
                            <p className='text-[#868686] text-12 md:text-16'>Operating without intermediaries, it allows direct peer-to-peer token swaps.</p>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </section>
    )
}

export default About