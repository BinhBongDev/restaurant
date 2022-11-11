import React from 'react'

import { motion } from 'framer-motion'

import {MdShoppingBasket} from 'react-icons/md'

import Logo from '../img/logo.png'
import Avatar from '../img/avatar.png'
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../firebase'

const Header = () => {
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()

  const login = async () => {
    const response = await signInWithPopup(firebaseAuth, provider)
    console.log(response)
  }
  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
        {/* desktp && tablet */}
        <div className='hidden md:flex w-full h-full items-center justify-between'>
          <Link to={'/'} className='flex items-center gap-2'>
            <img src={Logo} alt = 'logo' className='w-8 object-cover' />
            <p className="text-headingColor text-xl font-bold ">City</p>
          </Link>

          <div className='flex gap-8 items-center'>
          <ul className='flex gap-8 items-center ml-auto'>
            <li className='text-base text-textColor hover:text-headingColor
            duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
            <li className='text-base text-textColor hover:text-headingColor
            duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
            <li className='text-base text-textColor hover:text-headingColor
            duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
            <li className='text-base text-textColor hover:text-headingColor
            duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
          </ul>

          <div className='relative flex items-center justify-center'>
            <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
            <div className='absolute -top-1 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
              <p className='text-xs text-white font-semibold'>7</p>
            </div>
          </div>

          <div onClick={login}>
            <motion.img 
            whileTap={{scale: 0.6}}
            src={Avatar} alt="userProfile"
            className='w-10 min-h-[40px] drop-shadow-2xl cursor-pointer'
            />
          </div>
          </div>
        </div>
        {/* mobile */}
        <div className='md:hidden flex w-full h-full'>

        </div>
    </header>
  )
}

export default Header
