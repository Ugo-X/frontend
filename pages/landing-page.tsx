import Banner from 'components/LandingPage/Banner'
import CTA from 'components/LandingPage/CTA'
import Numbers from 'components/LandingPage/Numbers'
import About from 'components/LandingPage/About'
import Community from 'components/LandingPage/Community'
import Services from 'components/LandingPage/Services'
import { LayoutTypes } from 'interfaces/layout'
import React, { useContext } from 'react'
import Team from 'components/LandingPage/Team'
import Faq from 'components/LandingPage/Faq'
import pageBg from 'assets/images/page-bg-trans.svg'
import pageBgLight from 'assets/images/page-bg-light.svg'
import pageBgMobile from 'assets/images/page-bg-mobile-trans.svg'
import pageBg2 from 'assets/images/page-bg-2.svg'
import faqBg from 'assets/images/faq-bg.svg'
import {  Switch, useTheme } from '@mui/material'
import { useWindowSize } from 'hooks/useWindowSize2'
import { ColorModeContext } from 'contexts'

const LandingPage = () => {
  const { isMobile } = useWindowSize()
  const { palette: { mode } } = useTheme()
  const { toggleColorMode } = useContext(ColorModeContext)
  const pageBgDarkMode = isMobile ? pageBgMobile.src : pageBg.src
  const pageBgLightMode = isMobile ? pageBgMobile.src : pageBgLight.src

  return (
    <div className='lp-page'>
      {/* <Switch defaultChecked onChange={toggleColorMode} /> */}
      <div className='!bg-no-repeat !bg-[length:100%_auto] !bg-[center_top_-1rem] 2xl:!bg-[center_top_-21rem]'
        style={{ background: `url(${mode === 'dark' ? pageBgDarkMode : pageBgLightMode})` }}
      >
        <Banner />
        <Numbers />
        <div className='!bg-no-repeat !bg-[length:100%_auto] relative !bg-[center_top_20rem]'
          style={{
            background: `url(${pageBg2.src})`,
          }}
        >
          <Services />
          <About />
          <Community />
        </div>
        <CTA />
        <Team />
        <div className='!bg-no-repeat !bg-[length:100%_auto] !bg-center relative'
          style={{ background: `url(${faqBg.src})` }}
        >
          <Faq />
        </div>
      </div>
    </div>
  )
}

LandingPage.layout = LayoutTypes.base
export default LandingPage