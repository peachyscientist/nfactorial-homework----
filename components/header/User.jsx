import React, { useState } from "react"
import { IoSettingsOutline } from "react-icons/io5"
import { AiOutlineHeart } from "react-icons/ai"
import { GrHelp } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi"
import { RiImageAddLine } from "react-icons/ri"
import { Link } from "react-router-dom"


export const User = () => {
  const user = true
  const [profileOpen, setProfileOpen] = useState(false)
  const close = () => {
    setProfileOpen(false)
  }
  return (
    <>
      <div className='profile'>
        {user ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
            </button>
            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <Link to='/account'>
                  <div className='image'>
                  <div className="logo">
                   </div>
                    <div className='text'>
                      <h4>Пользователь</h4>
                      <label>Казахстан, Алматы</label>
                    </div>
                  </div>
                </Link>
                <Link to='/create'>
                  <button className='box'>
                    <RiImageAddLine className='icon' />
                    <h4>Создать карту</h4>
                  </button>
                </Link>
                <Link to='/login'>
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>Мой аккаунт</h4>
                  </button>
                </Link>
                <button className='box'>
                  <AiOutlineHeart className='icon' />
                  <h4>Избранные растения</h4>
                </button>
                <button className='box'>
                  <GrHelp className='icon' />
                  <h4>Помощь</h4>
                </button>
                <button className='box'>
                  <BiLogOut className='icon' />
                  <h4>Выйти</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  )
}
