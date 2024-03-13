import React from 'react'
import Image from 'next/image'
import logo from  '../assets/ALogo.png'

const Header = () => {
  return (
    <div >
        <div className='flex flex-row justify-between p-5 items-center text-white bg-purple-950'>
          <div>
            <div className="logo">
              <Image src={logo} height="50" alt=""/>
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
            <Image src={logo} height="50" alt=""/>
           
          </div>
        </div>
    </div>
  )
}

export default Header