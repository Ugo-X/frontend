import Link from 'next/link'
import React from 'react'
import github from 'assets/svg/github.svg'
import linkedin from 'assets/svg/linkedin.svg'
import discord from 'assets/svg/discord.svg'
import twitter from 'assets/svg/twitter.svg'
import Image from 'next/image'
import { useWindowSize } from 'hooks/useWindowSize2'

const socials = [
  { icon: github, url: '' },
  { icon: linkedin, url: '' },
  { icon: discord, url: '' },
  { icon: twitter, url: '' },
]

const Footer = () => {
  const { isMobile } = useWindowSize()
  return (
    <footer className='py-6 md:py-10 bg-black bg-opacity-25 mb-8'>
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end">
          <div className='mb-4 md:mb-0'>
            <div className="flex items-center [&>a]:mr-4 [&>a]:md:mr-6 whitespace-nowrap text-12 md:text-20 font-semibold mb-2 md:mb-6">
              <Link href=''>Services</Link>
              <Link href=''>Benefits</Link>
              <Link href=''>Community</Link>
              <Link href=''>About US</Link>
              <Link href=''>FAQ</Link>
            </div>
            <p className='text-12 md:text-24 font-bold font-dg'>Lorem ipsum dolor sit amet consectetur. Id ultrices dictum adipiscing vel.</p>
          </div>
          <div className="flex items-center [&>a]:ml-6 [&>a]:md:ml-10 [&>a]:first:ml-0">
            {socials.map((item, i) =>
              <Link href={item.url} key={i}>
                <Image src={item.icon} alt=''
                  width={isMobile ? 24 : 40}
                  height={isMobile ? 24 : 40}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer