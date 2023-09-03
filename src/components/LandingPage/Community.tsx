import React from 'react'
import { Card } from './common'
import { Button, Grid } from '@mui/material'
import Link from 'next/link'
import { ArrowForward } from '@mui/icons-material'
import communutyBg from 'assets/images/community-bg.svg'
import { useWindowSize } from 'hooks/useWindowSize2'

const Community = () => {
    const { isMobile } = useWindowSize()
    return (
        <section className='py-[50px] md:py-[100px]'>
            <div className="container">
                <p className="text-primary-light text-8 md:text-14 mb-2 md:mb-0 uppercase tracking-widest">Community</p>
                <h2 className='text-24 md:text-56 font-normal uppercase leading-none font-dg mb-14'>
                    Discover more of <span className='font-extrabold'>our <span className='text-secondary'>community</span></span>
                </h2>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={5}>
                        <Card className='max-w-[480px] min-h-[280px] w-full h-full'>
                            <div className="flex flex-col justify-between w-full h-full bg-no-repeat bg-contain bg-center" style={{backgroundImage: `url(${communutyBg.src})`}}>
                                <div className='mb-10 relative'>
                                    <h4 className="text-24 md:text-32 font-semibold mb-3">Community</h4>
                                    <p className='text-[#868686]'>Everything we do is open-source and transparent.</p>
                                </div>
                                <div className="flex justify-end pb-4 relative">
                                    <Button component={Link} href='' variant='contained' color='themePrimary' className='btn'
                                        endIcon={<ArrowForward className='!text-14 !md:text-[18px]' style={{ transform: 'rotate(-45deg)' }} />}
                                    >Discord</Button>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Card className='w-full'>
                                    <div className="flex items-center mb-3">
                                        <h4 className="text-20 md:text-24 font-semibold">
                                            Twitter
                                        </h4>
                                        <ArrowForward className='!text-20 !md:text-[28px] ml-4' style={{ transform: 'rotate(-45deg)' }} />
                                    </div>
                                    <p className='text-[#868686]'>Stay on top of the latest updates</p>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card className='w-full'>
                                    <div className="flex items-center mb-3">
                                        <h4 className="text-20 md:text-24 font-semibold">
                                            GitHub
                                        </h4>
                                        <ArrowForward className='!text-20 !md:text-[28px] ml-4' style={{ transform: 'rotate(-45deg)' }} />
                                    </div>
                                    <p className='text-[#868686]'>Everything we do is open source, follow our codes on github</p>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card className='w-full'>
                                    <div className="flex items-center mb-3">
                                        <h4 className="text-20 md:text-24 font-semibold">
                                            Stellar
                                        </h4>
                                        <ArrowForward className='!text-20 !md:text-[28px] ml-4' style={{ transform: 'rotate(-45deg)' }} />
                                    </div>
                                    <p className='text-[#868686]'>Learn more about the blockchain Stellar</p>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </section>
    )
}

export default Community