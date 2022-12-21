import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
function Nav2() {
    return (
        <div className='w-full h-[40px] bg-[#232F3E] flex items-center justify-between px-[20px]'>
            <div className="flex items-center">
                <GiHamburgerMenu className='text-white text-[19px]' />
                <h1 className='text-[17px] text-white font-semibold ml-[5px]'>All</h1>
            </div>
            <ul className='w-[420px] h-[100%] flex items-center justify-between text-[13px] font-medium text-white ml-[-620px]'>
                <li className='h-[80%] flex items-center px-[5px] hover:border-[1px] hover:border-white border-[1px] border-[transparent]'>
                    <a href="/">Today's Deals</a>
                </li>
                <li className='h-[80%] flex items-center px-[5px] hover:border-[1px] hover:border-white border-[1px] border-[transparent]'>
                    <a href="/">Customer Service</a>
                </li>
                <li className='h-[80%] flex items-center px-[5px] hover:border-[1px] hover:border-white border-[1px] border-[transparent]'>
                    <a href="/">Registry</a>
                </li>
                <li className='h-[80%] flex items-center px-[5px] hover:border-[1px] hover:border-white border-[1px] border-[transparent]'>
                    <a href="/">Gift Cards</a>
                </li>
                <li className='h-[80%] flex items-center px-[5px] hover:border-[1px] hover:border-white border-[1px] border-[transparent]'>
                    <a href="/">Sell</a>
                </li>
            </ul>
            <h1 className='text-white font-medium text-[14px] hover:border-[1px] hover:border-white border-[1px] border-[transparent]'>Shop holiday fashion deals</h1>
        </div>
    )
}

export default Nav2