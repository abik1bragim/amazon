import React from 'react'

function ProductCart({ product }) {

    const style = {
        Card: 'w-[94%] h-[400px] flex flex-col mt-[30px] bg-white p-[10px] group cursor-pointer',
        Imgs: 'w-[85%] h-[75%] duration-500 mt-[10px]',
        Title: 'text-[20px] mt-[10px] font-bold'
    }

    return (
        <div className="flex items-center justify-center z-10">
            <div className={style.Card}>
                <h1 className={style.Title}>{product.title.slice(0, 20)}</h1>
                <img src={product.image} alt="" className={style.Imgs} />
                <a href="/" className='text-[#278798] mt-[20px] text-[13px] ml-[10px]'>Shop now</a>
            </div>
        </div>
    )
}

export default ProductCart