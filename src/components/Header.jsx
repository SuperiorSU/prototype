"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../assets/ALogo.png';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '@/firebase';
import Link from 'next/link';
import Button from './Button';

const Header = () => {
  const [user] = useAuthState(auth);
  const [pic, setPic] = useState(null);

  useEffect(() => {
    if (user !== null) {
      setPic(user.photoURL);
    }
  }, [user]); // Only run this effect when user changes

  return (
    <div>
      <div className='flex flex-row justify-between p-2 items-center text-white border-b-[1px] border-white/55 bg-purple-950'>
        <div>
          <div className="logo">
            <Image src={logo} height="50" alt="" />
          </div>
        </div>
        <div>
          <ul className='flex gap-5 justify-center items-center list-none'>
            <li>HOME</li>
            <li>CAST</li>
            <li>GALLERY</li>
            <li>TEAMS</li>
          </ul>
        </div>

        <div>
          {
            (user === null) ? (<Link href="/login"><Button text="Login" /></Link>) : <Image src={pic == null ? logo : pic} height="50" width="50" className='rounded-full' alt="" />
          }

        </div>
      </div>
    </div>
  )
}

export default Header;
