import React from 'react'
import Button from './button'
function Navbar() {
    return (
        <div className='fixed top-0 left-0 right-0 z-10 w-full bg-zinc-800  '>
            <div className='max-w-screen-xl py-6 mx-auto flex items-center justify-between border-b-[1px] border-zinc-700'>
                <div className="left flex gap-20">
                    <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                    <div className="links flex gap-14">
                        {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
                            elem.length === 0 ? <span key={index} className='w-[2px] h-7 bg-zinc-700'></span> :
                                <a key={index} className='text-sm font-normal flex items-center gap-1'>{index === 0 && <span style={{ boxShadow: "0 0 1em #00FF19" }} className='inline-block w-1 h-1 rounded-full bg-green-500'></span>} {elem}</a>
                        ))}
                    </div>
                </div>
                <Button title={"Start a Project"} />
            </div>
        </div>
    )
}

export default Navbar
