import React from 'react'
import Shape from "../assets/Shape.png"
import Shape2 from "../assets/Shape2.png"
import Path from "../assets/Path.png"

const Navbar = () => {
  return (
    <div className=" absolute top-0 left-0 right-0 flex flex-row justify-around items-center pt-[40px] px-[10px] bg-transparent">

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
  )
}

export default Navbar
