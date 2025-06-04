import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }
  

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="/public/video_2025-06-04 20_10_49.webm" type="video/webm" />
    Your browser does not support the video tag.
  </video>
      <div className='p-20 bg-black/70 backdrop-blur-md shadow-2xl rounded-xl'>
        <h1 className='font-bold text-3xl flex justify-center mb-10'>Login</h1>
        <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col items-center justify-center '>
            <input value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            required className="w-full mb-4 p-3 rounded-xl bg-[#1c1c1c] text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-emerald-500" type="email" placeholder='Enter your mail' />
            <input value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            required className="w-full mb-4 p-3 rounded-xl bg-[#1c1c1c] text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-emerald-500" type="password" placeholder='Enter password' />
            <button className='cursor-pointer rounded-xl border-emerald-600 py-2 px-15 bg-emerald-600 mt-5 font-semibold hover:bg-emerald-900'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
