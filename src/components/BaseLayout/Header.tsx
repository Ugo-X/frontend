import { Button, Drawer, IconButton, useTheme } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import soroswapLogoPurpleWhite from 'assets/svg/SoroswapPurpleWhite.svg'
import soroswapLogoPurpleBlack from 'assets/svg/SoroswapPurpleBlack.svg'
import { useWindowSize } from 'hooks/useWindowSize2'
import { Menu } from '@mui/icons-material'

const menus = [
    { name: 'Services', url: '' },
    { name: 'Benefits', url: '' },
    { name: 'Community', url: '' },
    { name: 'About US', url: '' },
    { name: 'FAQ', url: '' },
    { name: 'Launch APP', url: '', type: 'button' }
]

const Header = () => {
    const theme = useTheme();
    const { isMobile } = useWindowSize()
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    return (
        <header className='border-0 border-b border-white border-solid border-opacity-10'>
            <div className="container">
                <div className="flex justify-between items-center py-4 md:py-5">
                    <Link href='/landing-page'>
                        <Image src={theme.palette.mode === "dark" ? soroswapLogoPurpleWhite.src : soroswapLogoPurpleBlack.src}
                            width={isMobile ? 88 : 162}
                            height={isMobile ? 30 : 56}
                            alt="Soroswap"
                        />
                    </Link>
                    {isMobile &&
                        <IconButton onClick={() => setOpenMobileMenu(true)}>
                            <Menu className='text-[#8866DD]' fontSize='medium' />
                        </IconButton>
                    }
                    {!isMobile &&
                        <div className="flex justify-end items-center [&>a]:ml-6 whitespace-nowrap">
                            {menus.map((menu, i) => {
                                if (menu.type !== 'button') return (
                                    <Link href={menu.url} key={i}>{menu.name}</Link>
                                )
                                if (menu.type == 'button') return (
                                    <Button component={Link} href={menu.url} variant='contained' color='themePrimary' className='btn' key={i}>{menu.name}</Button>
                                )
                            })}
                        </div>
                    }
                    {isMobile &&
                        <Drawer
                            anchor={'right'}
                            open={openMobileMenu}
                            onClose={() => setOpenMobileMenu(false)}
                        >
                            <div className="flex flex-col justify-start items-center [&>a]:mb-5 whitespace-nowrap w-[280px] py-10  bg-black h-full">
                                {menus.map((menu, i) => {
                                    if (menu.type !== 'button') return (
                                        <Link href={menu.url} key={i}>{menu.name}</Link>
                                    )
                                    if (menu.type == 'button') return (
                                        <Button component={Link} href={menu.url} variant='contained' color='themePrimary' className='btn !text-16' key={i}>{menu.name}</Button>
                                    )
                                })}
                            </div>
                        </Drawer>

                    }
                </div>
            </div>
        </header>
    )
}

export default Header

