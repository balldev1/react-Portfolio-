import React from 'react'
import Section from './common/Section'
import { FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import p5 from '../assets/p5.jpg'
import p6 from '../assets/p6.jpg'

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            image: p1,
            title: "Best App",
            github: "https://github.com/balldev1",
            demo: "",
        },
        {
            id: 2,
            image: p2,
            title: "Best App",
            github: "https://github.com/balldev1",
            demo: "https://github.com/balldev1",
        },
        {
            id: 3,
            image: p3,
            title: "Age of Empires",
            github: "https://github.com/balldev1",
            demo: "https://github.com/balldev1",
        },
        {
            id: 4,
            image: p4,
            title: "Best App",
            github: "https://github.com/balldev1",
            demo: "https://github.com/balldev1",
        },
        {
            id: 5,
            image: p5,
            title: "Best App",
            github: "https://github.com/balldev1",
            demo: "https://github.com/balldev1",
        },
        {
            id: 6,
            image: p6,
            title: "Age of Empires",
            github: "https://github.com/balldev1",
            demo: "https://github.com/balldev1",
        },
    ]

    return (

        <Section

            title="Portfolio 👨‍💻"
            subtitle="These are all the projects that I have worked on. Some of them 
            I have worked before I gained some experience. So go gentle on them."

        >
            <img src="https://em-content.zobj.net/source/skype/289/man-technologist_1f468-200d-1f4bb.png" alt="" />
            <div className='grid gap-8 lg:gap-14 lg:grid-cols-2' >

                {projects.map(({ id, image, title, github, demo }) => (

                    <div key={id}
                        className='max-w-lg flex shadow-lg shadow-gray-200 rounded-2xl overflow-hidden mb-10 '
                    >
                        <img src={image} alt={title} className='w-2/3' />
                        <div className='w-1/3 flex flex-col items-center justify-evenly p1'>
                            <h2>{title}</h2>
                            <a className='text-3xl cursor-pointer duration-150 hover:scale-150 hover:text-rose-600'
                                href={github} target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a className='text-4xl cursor-pointer duration-150 hover:scale-150 hover:text-rose-600'
                                href={demo} target="_blank" rel="noopener noreferrer">
                                <FaExternalLinkSquareAlt />
                            </a>
                        </div>
                    </div>

                ))}

            </div>
        </Section>
    )
}

export default Portfolio

// overflow-hidden ตัดเนื้อหาที่เกิน
// target="_blank" rel="noopener noreferrer" tapใหม่