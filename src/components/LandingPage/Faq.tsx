import React from 'react'
import { Accordion, Card } from './common'

const Faq = () => {
    return (
        <section className='py-[25px] md:pt-[50px] md:pb-[100px]'>
            <div className="container">
                <div className="text-center mb-6 md:mb-14">
                    <p className="text-primary-light text-8 md:text-14 uppercase tracking-widest mb-3">FAQ</p>
                    <h2 className='text-24 md:text-56 font-normal uppercase leading-none font-dg'>
                        <span className='font-extrabold'><span className='text-secondary'>Frequently </span>asked</span> questions
                    </h2>
                </div>
                <Card className='container max-w-[792px] md:px-[78px] md:py-[90px]'>
                    <Accordion active={true}
                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
                    />
                    <Accordion
                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
                    />
                    <Accordion
                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
                    />
                    <Accordion
                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
                    />
                    <Accordion
                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
                    />
                </Card>
            </div>
        </section>
    )
}

export default Faq