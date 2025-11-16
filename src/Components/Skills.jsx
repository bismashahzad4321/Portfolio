import React from 'react'

const Skills = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center'>

            {/* Divider Line */}
            <div className='w-full max-w-[1000px] h-[2px] bg-white my-[60px]'></div>

            {/* Skills Grid */}
            <div className='grid 
           
                grid-cols-1        
                sm:grid-cols-2      
                lg:grid-cols-3      
                gap-y-10 gap-x-20 text-start'>

                {/* 1 */}
                <div>
                    <h1 className='text-[40px] lg:text-[48px] tracking-[-1.5px]'>HTML</h1>
                    <p className='text-[#D9D9D9] text-[16px] lg:text-[18px]'>4 Years Experience</p>
                </div>

                {/* 2 */}
                <div>
                    <h1 className='text-[40px] lg:text-[48px] tracking-[-1.5px]'>CSS</h1>
                    <p className='text-[#D9D9D9] text-[16px] lg:text-[18px]'>4 Years Experience</p>
                </div>

                {/* 3 */}
                <div>
                    <h1 className='text-[40px] lg:text-[48px] tracking-[-1.5px]'>JavaScript</h1>
                    <p className='text-[#D9D9D9] text-[16px] lg:text-[18px]'>4 Years Experience</p>
                </div>

                {/* 4 */}
                <div>
                    <h1 className='text-[40px] lg:text-[48px] tracking-[-1.5px]'>Accessibility</h1>
                    <p className='text-[#D9D9D9] text-[16px] lg:text-[18px]'>4 Years Experience</p>
                </div>

                {/* 5 */}
                <div>
                    <h1 className='text-[40px] lg:text-[48px] tracking-[-1.5px]'>React</h1>
                    <p className='text-[#D9D9D9] text-[16px] lg:text-[18px]'>4 Years Experience</p>
                </div>

                {/* 6 */}
                <div>
                    <h1 className='text-[40px] lg:text-[48px] tracking-[-1.5px]'>SASS</h1>
                    <p className='text-[#D9D9D9] text-[16px] lg:text-[18px]'>4 Years Experience</p>
                </div>

            </div>
        </div>
    )
}

export default Skills
