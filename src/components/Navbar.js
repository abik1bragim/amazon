import React from 'react'
import Amazon from '../image/amazon.png'
import Usa from '../image/usa_flag.png'
import { MdOutlinePlace } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import { IoMdArrowDropdown } from 'react-icons/io'
import { CgShoppingCart } from 'react-icons/cg'

function Navbar() {

    const style = {
        Nav: 'w-full h-[60px] bg-[#131921] flex items-center justify-between',
        A_logo: 'w-[120px] h-[90%] hover:border-[1px] hover:border-white border-[1px] border-[transparent] ml-[10px] flex items-center',
        Uzb: 'w-[110px] h-[90%] flex flex-col justify-center items-center leading-none hover:border-[1px] border-white',
        Search: 'w-[700px] h-[70%] flex items-center rounded-[5px] overflow-hidden ml-[20px]',
        Data: 'flex items-center justify-center w-[80px] h-[70%] hover:border-[1px] border-white ml-[20px]'
    }

    return (
        <div className={style.Nav}>
            <div className={style.A_logo}>
                <a href="/">
                    <img src={Amazon} alt="" className='w-[150px] object-contain' />
                </a>
            </div>
            <a href="/" className='w-[110px] h-[90%]'>
                <div className={style.Uzb}>
                    <p className='text-[12px] text-[#999] font-medium'>Deliver to</p>
                    <div className="flex items-center">
                        <MdOutlinePlace className='text-white text-[20px]' />
                        <h1 className='text-white font-medium'>Uzbekistan</h1>
                    </div>
                </div>
            </a>

            <div className={style.Search}>
                <select className='w-[50px] h-[100%] bg-[#F3F3F3] text-[13px] text-[#999] hover:bg-[#ccc] outline-[#ff9900]'>
                    <option value="" className='bg-white text-black'>All</option>
                    <option value="" className='bg-white text-black'>All Deportments</option>
                    <option value="" className='bg-white text-black'>Arts & Crafts</option>
                    <option value="" className='bg-white text-black'>Automotive</option>
                    <option value="" className='bg-white text-black'>Baby</option>
                    <option value="" className='bg-white text-black'>Boks</option>
                    <option value="" className='bg-white text-black'>All</option>
                    <option value="" className='bg-white text-black'>All</option>
                    <option value="" className='bg-white text-black'>All</option>
                    <option value="" className='bg-white text-black'>All</option>
                    <option value="" className='bg-white text-black'>All</option>
                    <option value="" className='bg-white text-black'>All</option>
                </select>
                <input type="text" className='w-[86%] h-[100%] outline-none pl-[10px]' />
                <div className="h-[100%] w-[7%] flex items-center justify-center bg-[#FEBD69] hover:bg-[#ff9900]">
                    <BsSearch />
                </div>
            </div>
            <div className={style.Data}>
                <img src={Usa} alt="" className='w-[25px] object-contain' />
                <select className='w-[50px] bg-[#131921] text-[#fff] font-medium'>
                    <option value="">EN</option>
                    <option value="" className='w-[100px]'>English-EN</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </div>
            <div className="w-[125px] h-[73%] hover:border-[1px] hover:border-white border-[transparent] border-[1px] leading-none flex flex-col justify-center ml-[10px]">
                <p className='text-[12px] text-[#999] font-medium ml-[2px]'>Hello, sign in</p>
                <div className="flex items-center ml-[2px]">
                    <h2 className='text-white font-medium text-[14px]'>Account & Lists </h2>
                    <IoMdArrowDropdown className='text-white' />
                </div>
            </div>
            <div className="w-[80px] h-[73%] hover:border-[1px] hover:border-white border-[1px] border-[transparent] leading-none flex flex-col justify-center ml-[10px]">
                <p className='text-[12px] text-[#999] font-medium ml-[2px]'>Returns</p>
                <div className="flex items-center ml-[2px]">
                    <h2 className='text-white font-medium text-[14px]'>& Orders</h2>
                </div>
            </div>
            <div className=" h-[75%] w-[80px] flex items-end hover:border-[1px] hover:border-white border-[1px] border-[transparent]">
                <div className="flex flex-col items-center">
                    <h1 className='text-[#ff9900] font-medium mt-[-10px] absolute'>0</h1>
                    <CgShoppingCart className='text-white text-[35px]' />
                </div>
                <h1 className='text-[15px] text-white font-semibold'>Cart</h1>
            </div>
        </div>
    )
}

export default Navbar