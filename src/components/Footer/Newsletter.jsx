import React from 'react'

import './Newsletter.css'
import SubHeading from '../SubHeading/SubHeading'

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Thư ngỏ" />
      <h1 className="headtext__cormorant">Đăng ký để nhận thông báo</h1>
      <p className="p__opensans">Đừng bỏ lỡ những cập nhật mới nhất!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Địa chỉ email của bạn" />
      <button type="button" className="custom__button">
        Đăng ký
      </button>
    </div>
  </div>
)

export default Newsletter
