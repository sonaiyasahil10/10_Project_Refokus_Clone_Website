import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

function Card() {
    return (
        <div className="w-1/2 h-[20vw] bg-zinc-900 p-6 rounded-xl ">
            <div className="w-full h-full flex flex-col justify-between">
                <div className="top">
                    <div className="w-full flex items-center justify-between">
                        <h3 className="text-slate-300 text-sm">Up Next: Culture</h3>
                        <MdArrowRightAlt />
                    </div>
                    <h2 className="text-2xl font-medium mt-5">Who we are</h2>
                </div>
                <div className="bottom">
                    <h4 className="text-sm text-slate-400">Explore what drives our team.</h4>
                </div>
            </div>
        </div>
    );
}

export default Card;
