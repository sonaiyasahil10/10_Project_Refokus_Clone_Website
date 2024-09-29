import React from 'react'
import Card from './Card'
import { MdArrowRightAlt } from "react-icons/md";
import { motion } from 'framer-motion';


function Cards() {
    
    return (
        <div className='w-full'>
            <div  className='max-w-screen-xl mx-auto py-20 flex gap-1'>
                <motion.div whileHover={{backgroundColor:"#3f3f46", paddingLeft:"30px", paddingRight:"30px"}} className="w-1/3 h-[20vw] bg-zinc-900 p-6 rounded-xl ">
                    <div className="w-full h-full flex flex-col justify-between">
                        <div className="top">
                            <div className="w-full flex items-center justify-between">
                                <h3 className="text-slate-300 text-sm">Up Next: Culture</h3>
                                <MdArrowRightAlt />
                            </div>
                            <h2 className="text-2xl font-medium mt-5">Who we are</h2>
                        </div>
                        <div className="bottom">
                            <h4 className="text-sm text-slate-400 ">Explore what drives our team.</h4>
                        </div>
                    </div>
                </motion.div>
                <motion.div whileHover={{backgroundColor:"#7443ff",paddingLeft:"30px", paddingRight:"30px"}} className="w-2/3 h-[20vw] bg-zinc-900 p-6 rounded-xl ">
                    <div className="w-full h-full flex flex-col justify-between">
                        <div className="top">
                            <div className="w-full flex items-center justify-between">
                                <h3 className="text-slate-300 text-sm">Get In Touch</h3>
                                <MdArrowRightAlt />
                            </div>
                            <h2 className="w-1/4 text-2xl font-medium mt-5">Let's get to it, together.</h2>
                        </div>
                        <div className="bottom">
                            <h4 className="text-[5vw] font-semibold">Start a Project</h4>
                            <div className='rounded-full border w-fit px-4  py-2'>
                                <span>Contact us</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Cards
