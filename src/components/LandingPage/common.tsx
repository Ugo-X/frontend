import { Add, Remove } from '@mui/icons-material'
import { Accordion as MuiAccordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { useWindowSize } from 'hooks/useWindowSize2'
import { useState } from 'react'

export const Card = ({ children, className = '', ...rest }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`py-4 md:py-6 px-6 md:px-12 rounded-2xl ${className}`} style={{ background: 'linear-gradient(137.13deg, #13141E -4.26%, rgba(17, 18, 28, 0.7) 102.22%)' }} {...rest}>
            {children}
        </div>
    )
}

export const Accordion = ({ title, description, active = false }: { title: string, description: string, active?: boolean }) => {
    const [open, setOpen] = useState(active)
    const { isMobile } = useWindowSize()
    return (
        <MuiAccordion onChange={() => setOpen(!open)} className='!bg-transparent !bg-none md:px-6' defaultExpanded={active}>
            <AccordionSummary expandIcon={open ? <Remove style={{fontSize:isMobile ? '14px' : '22px'}} /> : <Add style={{fontSize:isMobile ? '14px' : '22px'}} />} className='pt-3 md:pt-6 md:mb-6 !items-start [&>*]:!m-0' >
                <Typography className='text-14 md:text-24 font-semibold text-[#FDFDFD] w-4/5 font-dg leading-none'>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography dangerouslySetInnerHTML={{ __html: description }} className='text-[#868686] text-8 md:text-16' />
            </AccordionDetails>
        </MuiAccordion>
    )
}