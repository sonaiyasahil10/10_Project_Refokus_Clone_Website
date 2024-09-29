import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion';

function Products() {
    var products = [
        {
            title: "Arqitel",
            description:
                "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live: true,
            case: false,
        },
        {
            title: "TTR",
            description:
                "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live: true,
            case: false,
        },
        {
            title: "YIR 2022",
            description:
                "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
            live: true,
            case: false,
        },
        {
            title: "Yahoo!",
            description:
                "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
            live: true,
            case: true,
        },
        {
            title: "Rainfall",
            description:
                "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
            live: true,
            case: true,
        },
    ];

    const [pos, setPos] = useState(null);
    const [ipos, setIpos] = useState(null);

    const mover = (val) => {
        setPos(val * 14)
        setIpos(val *18)
    }

    return (
        <div className='relative py-8 mt-12 '>
            {products.map((elem, index) => <Product key={index} val={elem} mover={mover} count={index} />)}
            <div className='h-full w-full absolute top-0 pointer-events-none'>
                <motion.div initial={{ y: pos, x: "-50%" }} animate={{ y: pos + 'rem' }} transisition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }} className='window absolute w-[26rem] h-[18rem] bg-zinc-800 left-[45%] rounded-3xl overflow-hidden' >
                    <motion.div animate={{ y: - ipos + 'rem' }} transisition={{ease:[0.76, 0, 0.24, 1],duration:0.3}} className='scene w-full h-full'><video className="w-full h-full absolute object-cover" muted loop autoPlay src="src\assets\arqitel.mp4"></video></motion.div>
                    <motion.div animate={{ y: - ipos + 'rem' }} transisition={{ease:[0.76, 0, 0.24, 1],duration:0.3}} className='scene w-full h-full'><video className="w-full h-full absolute object-cover" muted loop autoPlay src="src\assets\ttr.mp4"></video></motion.div>
                    <motion.div animate={{ y: - ipos + 'rem' }} transisition={{ease:[0.76, 0, 0.24, 1],duration:0.3}} className='scene w-full h-full'><video className="w-full h-full absolute object-cover" muted loop autoPlay src="src\assets\yir.mp4"></video></motion.div>
                    <motion.div animate={{ y: - ipos + 'rem' }} transisition={{ease:[0.76, 0, 0.24, 1],duration:0.3}} className='scene w-full h-full'><video className="w-full h-full absolute object-cover" muted loop autoPlay src="src\assets\yahoo.mp4"></video></motion.div>
                    <motion.div animate={{ y: - ipos + 'rem' }} transisition={{ease:[0.76, 0, 0.24, 1],duration:0.3}} className='scene w-full h-full'><video className="w-full h-full absolute object-cover" muted loop autoPlay src="src\assets\rainfall.mp4"></video></motion.div>

                    {/* <motion.div animate={{ y: - ipos + 'rem' }} transisition={{ ease: [0.76, 0, 0.24, 1], duration: 0.3 }} className='scene w-full h-full bg-red-100'></motion.div>
                    <motion.div animate={{ y: - ipos + 'rem' }} transisition={{ ease: [0.76, 0, 0.24, 1], duration: 0.3 }} className='scene w-full h-full bg-red-200'></motion.div>
                    <motion.div animate={{ y: - ipos + 'rem' }} transisition={{ ease: [0.76, 0, 0.24, 1], duration: 0.3 }} className='scene w-full h-full bg-red-300'></motion.div>
                    <motion.div animate={{ y: - ipos + 'rem' }} transisition={{ ease: [0.76, 0, 0.24, 1], duration: 0.3 }} className='scene w-full h-full bg-red-400'></motion.div>
                    <motion.div animate={{ y: - ipos + 'rem' }} transisition={{ ease: [0.76, 0, 0.24, 1], duration: 0.3 }} className='scene w-full h-full bg-red-500'></motion.div> */}

                </motion.div>
            </div>
        </div>
    )
}

export default Products
