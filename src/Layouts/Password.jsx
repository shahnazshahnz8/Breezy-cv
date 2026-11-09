
import React, { useState } from 'react'
import Container from '../Components/Container'
import { IoEyeOutline } from 'react-icons/io5'
import { FaRegEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Password = () => {

    let [eye, setEye] = useState(false)
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        if (email.trim() !== "" && password.trim() !== "") {
            navigate("/about")
        }
    }

    return (
        <section className='rounded-2xl pb-10'>
            <Container>

                <div className='min-h-0 flex flex-col items-center justify-center pt-8'>
                    <h1 className='text-3xl font-bold text-[#172033]'>
                        Welcome Back
                    </h1>

                    <p className='text-center text-gray-500 mt-2 mb-8'>
                        Please enter your email and password
                    </p>
                </div>

                <form onSubmit={handleLogin}>

                    {/* Email */}

                    <label className='text-xl font-semibold text-gray-700'>
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='w-full py-5 px-5 mt-3 mb-6 rounded-2xl bg-[#EAF2FF] shadow-2xl'
                    />

                    {/* Password */}

                    <label className='text-xl font-semibold text-gray-700'>
                        Password
                    </label>

                    <div className='relative'>

                        <input
                            type={eye ? "text" : "password"}
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className='w-full py-5 px-5 mt-3 mb-10 rounded-2xl bg-[#EAF2FF] shadow-2xl'
                        />

                        {
                            eye
                                ?
                                <FaRegEyeSlash
                                    onClick={() => setEye(!eye)}
                                    className='absolute top-[30%] right-[5%] text-2xl cursor-pointer'
                                />
                                :
                                <IoEyeOutline
                                    onClick={() => setEye(!eye)}
                                    className='absolute top-[30%] right-[5%] text-2xl cursor-pointer'
                                />
                        }

                    </div>

                    <button
                        type="submit"
                        className='w-full bg-blue-600 text-white font-semibold py-3 rounded-lg mt-6'
                    >
                        Login
                    </button>

                </form>

            </Container>
        </section>
    )
}

export default Password

