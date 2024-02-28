"use client"
import React from 'react'

function GreenBox({icon, number, title}) {
    return (
        <div className="flex flex-row gap-2 items-center justify-center w-[400px] h-[163px] rounded-lg bg-[#E6EEE3]">
            <div>
                {icon}
            </div>
            <div className="flex flex-col gap-3">
                <p className="font-jakarta font-[600] text-4xl text-black">{number}</p>
                <p className="font-jakarta font-[400] text-lg text-black">{title}</p>
            </div>
        </div>
    )
}

export default GreenBox;