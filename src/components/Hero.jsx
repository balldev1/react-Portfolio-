import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin, FaArrowDown } from 'react-icons/fa'
import profile from '../assets/profile.jpg'

const Hero = () => {

    const social = [
        {
            id: 1,
            link: "https://www.facebook.com/ball.wangdeesamer",
            icon: <FaTwitter />
        },
        {
            id: 2,
            link: "https://www.facebook.com/ball.wangdeesamer",
            icon: <FaFacebook />
        },
        {
            id: 3,
            link: "https://www.facebook.com/ball.wangdeesamer",
            icon: <FaLinkedin />
        },
    ]
    // {ฟังชั่นเลื่อนลง arrow down เปลี่ยนclass เป็น hide down arrow เมือเลือนลงจะหาย}
    window.addEventListener("scroll", function () {
        const downArrow = document.querySelector(".down-arrow");

        if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
        else downArrow.classList.remove("hide-down-arrow");
    })


    return (
        <section className='min-h-screen flex flex-col justify-start p-5
            items-center p-5 text-center '
        >
            <h2 className='text-5xl text-rose-600 font-medium uppercase font-bold '>Ball dev</h2>
            <h3 className='py-3 text-2xl'>Portfolio</h3>
            <p className='max-w-xl font-light text-gray-500'>
                Hello <span className='animate-pulse text-4xl'>👋</span>,
                welcome to my site. I am a freelance software engineer. I love work on Web dev,
                Mobile dev & automation projects.
            </p>

            {/* {social icons} */}
            <div className=' flex justify-evenly py-8 lg:py-16 text-3xl w-full  md:w-1/3 '>
                {social.map(({ id, link, icon }) => (
                    <a
                        rel='noopener noreferrer'
                        target='_blank'
                        className='cursor-pointer duration-300 hover:text-rose-600'
                        href={link} key={id}  >
                        {icon}</a>
                ))
                }
            </div>

            {/* { profile} */}
            <div >
                <img src={profile} alt="profile"
                    className='w-100 h-100 object-cover object-center md:w-100 md:h-80
                         rounded-xl' />
                <a a href="/55.pdf" dowload={true}
                    className='flex item-center justify-center mt-10 
                    bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 rounded-lg'
                >
                    Resume
                </a>
            </div>

            {/* {arrow down} */}
            <div className='mt-10 down-arrow '>

                <FaArrowDown className='text-gray-400 text-2xl mt-10 animate-bounce' />

            </div>


        </section>
    )
}

export default Hero
    // animate-bounce downarrow ขยับ
    // {animate-pulse อนิเมชั่นมือ}
    // font-light ตัวบางใช้กับp
    // target='_blank' เปิดหน้าใหม่

    // py-8 lg:py-16: กำหนดให้มีระยะขอบบนและล่างของข้อความเป็น 8 หน่วย (เมื่อแสดงบนหน้าจอขนาดเล็ก) และ 16 หน่วย (เมื่อแสดงบนหน้าจอขนาดใหญ่)

    // w-full md:w-1/3: กำหนดให้องค์ประกอบมีความกว้างเท่ากับขอบเต็มของคอนเทนเนอร์ (เมื่อแสดงบนหน้าจอขนาดเล็ก) และความกว้างเท่ากับ 1/3 ของคอนเทนเนอร์ (เมื่อแสดงบนหน้าจอขนาดใหญ่)