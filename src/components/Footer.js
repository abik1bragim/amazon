import React from 'react'

function Footer() {
    return (
        <div className='w-full h-[200px] bg-white mt-[30px]'>
            <div className="w-full h-[60%] border-[#999] border-[1.5px] rounded-[5px] flex items-center justify-center mt-[30px]">
                <div className="flex flex-col justify-center items-center leading-8">
                    <h3>See personalized recommendations</h3>
                    <button className='w-[99%] bg-[#ff9900] rounded-[5px]'>Sign in</button>
                    <p>New customer<a href="/" className='text-blue-400'> start here</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer