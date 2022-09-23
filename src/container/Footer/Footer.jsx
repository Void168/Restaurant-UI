import React from 'react'

import './Footer.css'
import { FooterOverlay, Newsletter } from '../../components'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { images } from '../../constants'

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Liên hệ với chúng tôi</h1>
        <p className="p__opensans">
          869 Âu Cơ, phường Tân Sơn Nhì, Tân Phú, Hồ Chí Minh
        </p>
        <p className="p__opensans">0123456789</p>
        <p className="p__opensans">0234567891</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          &quot;Cách tốt nhất để tìm lại chính mình là đánh mất chính mình để
          phục vụ người khác.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
          alt="footer img"
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Giờ mở cửa</h1>
        <p className="p__opensans">Thứ hai - Thứ sáu:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Thứ bảy - Chủ nhật:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Gericht. All Rights reserved.</p>
    </div>
  </div>
)

export default Footer
