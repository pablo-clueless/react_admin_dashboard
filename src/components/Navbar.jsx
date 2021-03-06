import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart, FiSun, FiMoon, FiSearch } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { useStateContext } from '../contexts/ContextProvider'
import { Cart, Chat, Notification, Search, UserProfile } from './'
import avatar from '../data/avatar.jpg'

const NavButton = ({ title, customFn, color, icon, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFn} style={{color}} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{background: dotColor}} className='absolute inline-flex rounded-full w-2 h-2 right-2 top-2' />
      {icon}
    </button>
  </TooltipComponent>
)


const Navbar = () => {
  const { setActiveMenu, isClicked, handleClick, screenSize, setScreenSize, currentColor, currentMode, setMode } = useStateContext()
  
  useEffect(() => {
    const handleScreenResize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleScreenResize)
    
    handleScreenResize()

    return () => window.removeEventListener('resize', handleScreenResize)
  },[])

  useEffect(() => {
    screenSize <= 900 ? setActiveMenu(false) : setActiveMenu(true)
  },[screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <div className='flex'>
        <NavButton title='Menu' customFn={() => setActiveMenu((prevState) => !prevState)} color={currentColor} icon={<AiOutlineMenu />} />
        <NavButton title='Menu' customFn={() => handleClick('search')} color={currentColor} icon={<FiSearch />} />
      </div>

      <div className="flex">
        <NavButton title='Cart' customFn={() => handleClick('cart')} color={currentColor} icon={<FiShoppingCart />} />
        <NavButton title='Chat' customFn={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} dotColor={currentColor} />
        <NavButton title='Notification' customFn={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} dotColor={currentColor} />

        {currentMode === 'Light' ? 
          <NavButton title='Dark Mode' customFn={() => setMode('Dark')} color={currentColor} icon={<FiMoon />} /> :
          <NavButton title='Light Mode' customFn={() => setMode('Light')} color={currentColor} icon={<FiSun />} />
        }

        <TooltipComponent content='Profile' position='BottomCenter'>
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClick('profile')}>
            <img src={avatar} alt="" className='rounded-full w-8 h-8' />
            <p>
              <span className='text-gray-400 text-14'>Hi, </span>{' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>Pablo</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.profile && <UserProfile />}
        {isClicked.search && <Search />}
      </div>
    </div>
  )
}

export default Navbar