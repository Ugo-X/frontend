import { useTheme } from '@mui/material'
import React from 'react'

const data = [
    { label: 'Swap', value: '$1.3 T+' },
    { label: 'Polls', value: '$160 M+' },
    { label: 'Users', value: '1M+' },
    { label: 'Integrations', value: '300+' },
]

const Numbers = () => {
    const { palette: { mode } } = useTheme()
    return (
        <section className={`bg-opacity-20 py-3 md:py-8 ${mode === 'dark' ? 'bg-black' : 'bg-[#C2C2C2]'}`}>
            <div className="container">
                <div className="flex justify-around">
                    {data.map((item, i) =>
                        <div className='flex flex-col justify-center items-center' key={i}>
                            <p className='text-14 md:text-32 font-semibold'>{item.value}</p>
                            <p className='uppercase text-[#F88F6D] font-medium text-8 md:text-16'>{item.label}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Numbers