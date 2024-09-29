import React from 'react'

function Footer() {
    return (
        <div className='max-w-screen-xl mx-auto '>
            <div className='  flex gap-36 '>
                <div className='basis-1/2'>
                    <h1 className='text-[11rem] font-medium leading-none tracking-tight'>refokus.</h1>
                </div>
                <div className='basis-1/2 flex gap-6 pt-4 '>
                    <div className='basis-1/4 tracking-tighter'>
                        <h4 className='mb-10 text-zinc-500'>Socials</h4>
                        {["Instagram", "Twitter (X)", "LinkedIn"].map((elem, index) => <a key={index} className='block text-zinc-500 mb-3  text-sm'>{elem}</a>)}
                    </div>
                    <div className='basis-1/4 tracking-tighter'>
                        <h4 className='mb-10 text-zinc-500'>Sitemap</h4>
                        {["Home", "Work", "Careers", "Contact"].map((elem, index) => <a key={index} className='block text-zinc-300 mb-3  text-sm'>{elem}</a>)}
                    </div>
                    <div className='basis-2/4  flex flex-col items-end mt-16'>
                        <p className="text-right">
                            Refokus is pioneering digital agency driven by design and
                            empowered by technology.
                        </p>
                        {/* <div className='flex justify-end'> */}
                        <img className="w-32 mt-5" src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="logo" />
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <div className=' py-5'>
                {["Privacy Policy","Cookie Policy", "Impressum","Terms"].map((item,index)=><a key={index} className='text-zinc-500 mr-7 text-sm'>{item}</a>)}
            </div>

        </div>
    )
}

export default Footer
