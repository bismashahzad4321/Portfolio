import React from 'react'
import man from "../assets/man.png"
import Right from "../assets/Right.png"

const HeroSection = () => {
    return (
        <div className='flex  flex-col justify-center md:flex-col lg:flex-row lg:justify-around items-center text-start  lg:min-h-screen'
            style={{
                backgroundImage: `url(${Right})`, backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left 150px'
            }}>
            {/* First */}
            <div
                className=' w-[90%] md:w-[80%] lg:w-[40%] py-[200px]  lg:pl-[10px]  '>
                <h1 className=' text-[30px] sm:text-[40px]  md:text-[40px] lg:text-[60px]' >Nice to meet you I am Bisma Sheikh</h1>

                <p>Based in the Pakistan, I’m a front-end developer passionate about building accessible web apps that users love.</p>
               <button className='pt-[50px] cursor-pointer'><a href="#contact">Contact Me</a></button> 
                <div className='w-[100px] bg-[#4EE1A0] h-[5px]'></div>
            </div>

            {/* Second */}
            <div className='w[10%] md:w-[50%] lg:w-[35%] min-h-screen '

            >
                <img src={man} alt="" />
            </div>

        </div>
    )
}

export default HeroSection
