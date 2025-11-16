import React from 'react'
import One from "../assets/One.png"
import Two from "../assets/Two.png"
import Three from "../assets/Three.png"
import Four from "../assets/Four.png"
import Five from "../assets/Five.png"
import Six from "../assets/Six.png"

const Projects = () => {
    return (
        <div>

            <div className='flex flex-row py-[60px] justify-around text-start items-start sm:py-[100px] lg:justify-between lg:px-[100px] lg:items-center lg:text-center lg:h-[100px] space-x-5 lg:py-[100px] '>
                <h1 className='text-[20px] sm:text-[60px] lg:text-[88px] font-bold'>Projects</h1>
                <div>
                     <button className='pt-[50px] cursor-pointer'><a href="#contact">Contact Me</a></button> 
                    <div className='lg:w-[100px] bg-[#4EE1A0] h-[5px]'></div>
                </div>
            </div>
            {/* Wrapper */}
            <div className='flex p-[20px] flex-col sm:flex-row lg:flex-row justify-center items-center gap-[30px]'>
                {/*  Projects */}
                <div>

                    <div className='flex flex-col justify-center items-start text-center '>
                        <img src={Two} alt="" className=' w-[340px] h-[200px] sm:w-[340px] sm:h-[300px]   lg:w-[540px] lg:h-[400px] ' />
                    </div>
                    <div className='flex flex-col justify-start items-start text-center leading-8 '>
                        <h1 className='text-[24px] font-bold leading-[32px]'>Design Portfolio</h1>
                        <div className='flex flex-row justify-start items-start text-center space-x-[60px]'>
                            <p className='text-[8px]'>HTML</p>
                            <p>Css</p>
                        </div>

                    </div>
                </div>
                {/* 2nd Project */}




                <div>
                    <div className='flex flex-col justify-center items-start text-center '>
                        <img src={One} alt="" className=' w-[340px] h-[200px] sm:w-[340px] sm:h-[300px]   lg:w-[540px] lg:h-[400px] '   />
                    </div>
                    <div className='flex flex-col justify-start items-start text-center leading-8 '>
                        <h1 className='text-[24px] font-bold leading-[32px]'>Design Portfolio</h1>
                        <div className='flex flex-row justify-start items-start text-center space-x-[60px]'>
                            <p className='text-[8px]'>HTML</p>
                            <p>Css</p>
                        </div>
                    </div>

                </div>
            </div>
            {/* Second Row */}
            <div className='flex p-[20px] flex-col sm:flex-row lg:flex-row justify-center items-center gap-[30px]'>
                {/*  Projects */}
                <div>

                    <div className='flex flex-col justify-center items-start text-center '>
                        <img src={Three} alt="" className=' w-[340px] h-[200px] sm:w-[340px] sm:h-[300px]   lg:w-[540px] lg:h-[400px] ' />
                    </div>
                    <div className='flex flex-col justify-start items-start text-center leading-8 '>
                        <h1 className='text-[24px] font-bold leading-[32px]'>Design Portfolio</h1>
                        <div className='flex flex-row justify-start items-start text-center space-x-[60px]'>
                            <p className='text-[8px]'>HTML</p>
                            <p>Css</p>
                        </div>

                    </div>
                </div>
                {/* 2nd Project */}




                <div>
                    <div className='flex flex-col justify-center items-start text-center '>
                        <img src={Three} alt="" className=' w-[340px] h-[200px] sm:w-[340px] sm:h-[300px]   lg:w-[540px] lg:h-[400px] '   />
                    </div>
                    <div className='flex flex-col justify-start items-start text-center leading-8 '>
                        <h1 className='text-[24px] font-bold leading-[32px]'>Design Portfolio</h1>
                        <div className='flex flex-row justify-start items-start text-center space-x-[60px]'>
                            <p className='text-[8px]'>HTML</p>
                            <p>Css</p>
                        </div>
                    </div>

                </div>
            </div>
            {/* Third */}
            <div className='flex p-[20px] flex-col sm:flex-row lg:flex-row justify-center items-center gap-[30px]'>
                {/*  Projects */}
                <div>

                    <div className='flex flex-col justify-center items-start text-center '>
                        <img src={Four} alt="" className=' w-[340px] h-[200px] sm:w-[340px] sm:h-[300px]   lg:w-[540px] lg:h-[400px] ' />
                    </div>
                    <div className='flex flex-col justify-start items-start text-center leading-8 '>
                        <h1 className='text-[24px] font-bold leading-[32px]'>Design Portfolio</h1>
                        <div className='flex flex-row justify-start items-start text-center space-x-[60px]'>
                            <p className='text-[8px]'>HTML</p>
                            <p>Css</p>
                        </div>

                    </div>
                </div>
                {/* 2nd Project */}




                <div>
                    <div className='flex flex-col justify-center items-start text-center '>
                        <img src={Five} alt="" className=' w-[340px] h-[200px] sm:w-[340px] sm:h-[300px]   lg:w-[540px] lg:h-[400px] '   />
                    </div>
                    <div className='flex flex-col justify-start items-start text-center leading-8 '>
                        <h1 className='text-[24px] font-bold leading-[32px]'>Design Portfolio</h1>
                        <div className='flex flex-row justify-start items-start text-center space-x-[60px]'>
                            <p className='text-[8px]'>HTML</p>
                            <p>Css</p>
                        </div>
                    </div>

                </div>
            </div>
           
         
           
        </div>
    )
}

export default Projects