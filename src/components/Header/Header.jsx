import React from 'react'
import rcfLogo from "../../images/rcf_logo.png"
import Button from '../helpers/Button'
import Nav from './Nav'

const Header = () => {
    return (
      <header className="bg-[#00171F] shadow-2xl text-white flex  items-center md:justify-between fixed w-full top-0 z-[999]">
        <div className=" flex flex-col items-center p-1 ">
          <div className="flex gap-2 ml-10 items-center my-2">
            <img className="w-[2.5rem] " src={rcfLogo} alt="" />
            <div>
              <p className="text-[.9rem] font-bold leading-3">RCF FEDPOFFA</p>
              <p className="text-[.7rem]  text-[#FFFDD0] font-semibold">
                <i>Liberty Arena</i>
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <Nav />
        </div>
        <div className="mr-[3rem] md:inline hidden">
          <Button name={"GIVE"} />
        </div>
      </header>
    );
}

export default Header