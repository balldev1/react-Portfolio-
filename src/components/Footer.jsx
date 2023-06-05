import React from 'react'
import Section from './common/Section'

const Footer = () => {
    return (
        <Section classname='min-h-fit flex flex-col justify-start text-center items-center py-16 px-5'>
            <img src="https://www.emojiall.com/en/header-svg/%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB.svg" alt="" className='w-1/6' />
            <p className='max-w-xl font-light text-gray-500 mb-10'> © 2023 Balldev | Developer TH</p>
        </Section>
    )
}

export default Footer
