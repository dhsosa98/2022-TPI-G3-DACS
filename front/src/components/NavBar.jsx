import React from 'react'
import logo from '../../public/icons/android/android-launchericon-144-144.png'

const NavBar = () => {
  return (
    <div class='bg-[#00000065] flex place-content-between p-3'>
      <img src={logo} class='w-fit h-fit'/>
      <p class='drop-shadow-Wxl text-center text-7xl  font-extrabold pb-2 pt-1 text-[#FFF] tracking-wider font-monstserrat'>
        FANTUR
      </p>
      <p class='text-center text-7xl  font-extrabold pb-2 pt-1 text-[#FFF] tracking-wider font-monstserrat'>
        FANTUR
      </p>
    </div>
  )
}

export default NavBar