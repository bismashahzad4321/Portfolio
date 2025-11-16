import React from 'react'
import Shape from "../assets/Shape.png"
import Shape2 from "../assets/Shape2.png"
import Path from "../assets/Path.png"
const Footer = () => {
  return (
    <div>
            <div className=" flex flex-row justify-around items-center pt-[40px] px-[10px] bg-transparent py-[60px]">
        
              {/* Logo */}
              <div className="flex">
                <span className="md:text-[32px] lg:text-[32px]">Bisma Sheikh</span>
              </div>
        
              {/* Icons */}
              <div className="flex items-center space-x-4">
                <img src={Shape} alt="" className="w-[30px] h-[30px]" />
                <img src={Shape2} alt="" className="w-[30px] h-[30px]" />
                <img src={Path} alt="" className="w-[30px] h-[30px]" />
              </div>
        
            </div>
    </div>
  )
}

export default Footer