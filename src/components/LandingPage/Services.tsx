import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Tab, useTheme } from '@mui/material'
import React from 'react'
import Swap from './ServiceTabs/Swap';
import Liquidity from './ServiceTabs/Liquidity';
import Mint from './ServiceTabs/Mint';
import bg from 'assets/images/service-bg.svg'
import bgMobile from 'assets/images/page-bg-2-mobile.svg'
import { useWindowSize } from 'hooks/useWindowSize2';

const Services = () => {
    const [activeTab, setActiveTab] = React.useState('Swap');
    const { isMobile } = useWindowSize()
    const { palette: { mode } } = useTheme()

    return (
        <section className='pt-[56px] pb-[25px] md:py-[100px]'>
            <div className="container">
                <p className="text-primary-light text-8 md:text-14 uppercase tracking-widest mb-2 md:mb-0">Services</p>
                <h2 className='text-24 md:text-56 font-normal uppercase leading-none font-dg mb-[40px] md:mb-14'>
                    Discover <span className='font-extrabold'>our <span className='text-secondary'>features</span></span>
                </h2>
                <TabContext value={activeTab}>
                    <div className={`rounded-[18px] md:rounded-[32px] border border-[#966FF6] border-opacity-10 border-solid ${mode === 'dark' ? 'linear-bg' : 'linear-bg-light'}`}>
                        <div className="custom-mui-tabs py-6 md:py-[56px] bg-no-repeat bg-left-bottom !bg-[length:auto_100%]"
                            style={{ backgroundImage: `url(${isMobile ? bgMobile.src : bg.src})` }}
                        >
                            <TabList onChange={(e: any, value: string) => setActiveTab(value)} className='mx-auto w-fit bg-black bg-opacity-20 rounded-full p-[14px] md:mb-[56px]'>``
                                <Tab label="Swap" value="Swap" className='text-12 md:text-20 normal-case font-semibold !min-h-[36px] py-0' />
                                <Tab label="Liquidity" value="Liquidity" className='text-12 md:text-20 normal-case font-semibold !min-h-[36px] py-0' />
                                <Tab label="Mint" value="Mint" className='text-12 md:text-20 normal-case font-semibold !min-h-[36px] py-0' />
                            </TabList>
                            <div className='max-w-[996px] w-100 mx-auto'>
                                <TabPanel value="Swap"><Swap /></TabPanel>
                                <TabPanel value="Liquidity"><Liquidity /></TabPanel>
                                <TabPanel value="Mint"><Mint /></TabPanel>
                            </div>
                        </div>
                    </div>
                </TabContext>
            </div>
        </section>
    )
}

export default Services