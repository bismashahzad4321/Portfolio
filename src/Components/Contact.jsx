import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className='flex flex-col sm:flex-col lg:flex-row justify-center items-center text-start  py-[100px]'>
                {/* Left Side */}
                <div className='sm:w-[90%] [90%] lg:w-[40%] items-end px-[20px]'>
                    <h1 className=' text-[50px] lg:text-[88px]'>
                        Contact
                    </h1>
                    <p className='text-[#D9D9D9]'>
                        I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.
                    </p>
                </div>
                {/* Contact Form */}
                <div className='flex flex-col items-start justify-start lg:justify-end items-end w-[90%] sm:w-[90%] lg:w-[40%]'>
                <form action="" className='flex flex-col py-[30px] sm:w-[100%] lg:w-[80%]'>
                    <input type="text" 
                    placeholder='NAME' 
                    className='bg-transparent outline-none py-8 border-b border-[#D9D9D9] placeholder:text-[#D9D9D9] tracking-[2px] '/>
                    <input type="email" placeholder='Email'
                     className='bg-transparent outline-none py-8 border-b border-[#D9D9D9] placeholder:text-[#D9D9D9] tracking-[2px] ' />
                    <input type="text"  placeholder='MESSAGE'
                     className='bg-transparent outline-none py-13 border-b border-[#D9D9D9] placeholder:text-[#D9D9D9] tracking-[2px] '/>
                      <p className='pt-[50px]'>Contact Me</p>
                <div className='w-[100px] bg-[#4EE1A0] h-[5px]'></div>
                </form>
                </div>
            </div>
            
        </div>
    )
}

export default Contact