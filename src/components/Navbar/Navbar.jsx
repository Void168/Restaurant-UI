import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images'

import './Navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="app_navbar">
      <div className="app_navbar_logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app_navbar_links">
        <li className="p_opensans">
          <a href="/home">Trang chủ</a>
        </li>
        <li className="p_opensans">
          <a href="/About">Về chúng tôi</a>
        </li>
        <li className="p_opensans">
          <a href="/menu">Thực đơn</a>
        </li>
        <li className="p_opensans">
          <a href="/awards">Thành tựu</a>
        </li>
        <li className="p_opensans">
          <a href="/contact">Liên hệ</a>
        </li>
      </ul>
      <div className="app_navbar_login">
        <a href="/login" className="p_opensans">
          Đăng nhập / Đăng ký
        </a>
        <div />
        <a href="/booking" className="p_opensans">
          Đặt bàn
        </a>
      </div>
      <div className="app_navbar_smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app_navbar_smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay_close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app_navbar_smallscreen_links">
              <li className="p_opensans">
                <a href="/home">Trang chủ</a>
              </li>
              <li className="p_opensans">
                <a href="/About">Về chúng tôi</a>
              </li>
              <li className="p_opensans">
                <a href="/menu">Thực đơn</a>
              </li>
              <li className="p_opensans">
                <a href="/awards">Thành tựu</a>
              </li>
              <li className="p_opensans">
                <a href="/contact">Liên hệ</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
