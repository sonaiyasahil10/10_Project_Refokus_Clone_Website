import React from 'react'

function Stripe({val,index}) {
    return (
        <div style={{width:"calc(100% / 6)"}} className='border-t-[1.2px] border-r-[1.2px] border-b-[1.2px] border-zinc-700 px-8 py-5 flex items-center justify-between'>
            <img src={val.url} alt="" />   
            <span className='font-semibold'>{val.number}</span>
        </div>
    )
}

export default Stripe
