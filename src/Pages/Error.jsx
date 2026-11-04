import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-[#F4F7FB] px-4">
            <div className="text-center max-w-xl">
               
                <h1 className="text-[120px] font-bold text-second leading-none">
                    404
                </h1>
                <h2 className="text-3xl font-bold text-first mt-6">
                    Oops! Page Not Found
                </h2>
                
                <Link
                    to="/"
                    className="inline-block bg-second text-white px-8 py-3 rounded-full mt-8 hover:bg-first transition-all"
                >
                    Back To Home
                </Link>
            </div>

        </section>
    )
}

export default Error
