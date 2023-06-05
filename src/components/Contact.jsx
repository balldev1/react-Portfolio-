import React from 'react'
import Section from './common/Section'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import contact from '../assets/mobile.png'

const Contact = () => {

    const social = [
        {
            id: 1,
            link: "https://www.facebook.com/ball.wangdeesamer",
            icon: <FaTwitter />,
        },
        {
            id: 2,
            link: "https://www.facebook.com/ball.wangdeesamer",
            icon: <FaFacebook />,
        },
        {
            id: 3,
            link: "https://www.facebook.com/ball.wangdeesamer",
            icon: <FaLinkedin />,
        },
    ]

    return (
        <Section
            title='contact ☎'
            subtitle='These are the ways you can
        get in touch with me. Hope to hear from you soon :)'
        >

            <div className='flex flex-col items-center justify-center gap-8 text-center mb-10 '>
                <div><img src={contact} alt="contact info" className='w-32 h-32' /></div>
                <div>
                    <p className='max-w-xs md-max-w-lg font-extralight'>
                        I am open to talk regarding freelancing or full-time opportunities.
                        Fell free to contact me using your preferred medium
                    </p>
                </div>
                <div className='flex w-full items-center justify-evenly text-3xl'>
                    {social.map(({ id, link, icon }) => (
                        <a
                            href={link}
                            rel='noopener noreferrer'
                            target='_blank'
                            className='duration-100 ease-in-out hover:text-rose-600 hover:scale-150'
                        >{icon}</a>

                    ))}
                </div>

                {/* {bottom form}            */}
                <div className='p-8 text-left w-full'>
                    <form action="https://getform.io/f/10b0546c-b3c8-4ef2-aa73-116e40f9e389" method="POST">
                        <div className=' w-full'>
                            <div className='flex flex-col my-2'>
                                <label className='capitalize text-sm py-2 font-ectralight'
                                >name</label>
                                <input type='text' name='name' className='border-2 rounded-lg p-3 flex
                                focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' />
                            </div>

                            <div className='flex flex-col my-2'>
                                <label className='capitalize text-sm py-2 font-ectralight'
                                >phone</label>
                                <input type='text' name='phone' className='border-2 rounded-lg p-3 flex
                                focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' />
                            </div>

                            <div className='flex flex-col my-2'>
                                <label className='capitalize text-sm py-2 font-ectralight'
                                >email</label>
                                <input type='text' name='email' className='border-2 rounded-lg p-3 flex
                                focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' />
                            </div>

                            <div className='flex flex-col my-2'>
                                <label className='capitalize text-sm py-2 font-ectralight'
                                >message</label>
                                <textarea name="message" rows="10" className='border-2 rounded-lg p-3 flex
                                focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white 
                                resize-none'></textarea>
                            </div>
                        </div>

                        <div className='flex items-center justify-center'>
                            <button className='my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white
                            px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer
                            hover:scale-105 duration-200'>send message</button>
                        </div>
                    </form>
                </div>

            </div >

        </Section >
    )
}

export default Contact

// capitalize ตัวพิมใหญ่
// focus: outline - none เส้นกรอบไม่แสดงเมือคลิก

// resize - none ปรับขนาด textareaไม่ได้

// tracking-wider เพิ่มระยะห่างในbutton

