import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
    return (
        <div className="bg-[#fff]">
            <div className="max-w-4xl mx-auto px-4 text-justify text-[#1f1f1f] font-poppins font-extralight">
                <Link to={"/"} className='fixed right-4 top-4'><svg class="w-8 h-8 text-[#1f1f1f]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18 17.94 6M18 18 6.06 6" />
                </svg>
                </Link>

            </div>
        </div>
    )
}

export default PrivacyPolicy