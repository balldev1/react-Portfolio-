import React from 'react'

const Section = ({ title, subtitle, children }) => {
    return (

        <section className='min-h-fit flex bg flex-col justify-start items-center pt-10 mt-1 text-center'>
            <h3 className='py-3 text-3xl lg:text-5xl'>{title}</h3>
            <p className='max-w-xl font-light text-gray-500 mb-10
                text-sm md:text-base'>{subtitle}</p>
            {children}
        </section>

    )
}

export default Section
