import React from 'react'

import { SubHeading } from '../../components'
import { images } from '../../constants'

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Liên hệ" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>
        Địa chỉ
      </h1>
      <div className="app__wrapper_content">
        <p className="p__opensans">
          869 Âu Cơ, phường Tân Sơn Nhì, quận Tân Phú, Hồ Chí Minh
        </p>
        <p
          className="p__cormorant"
          style={{ color: '#DCCA87', margin: '2rem 0' }}
        >
          Giờ hoạt động
        </p>
        <p className="p__opensans">Thứ 2 - Thứ 6: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Thứ 7 - Chủ nhật: 10:00 am - 03:00 am</p>
      </div>
      <button className="custom__button" style={{ marginTop: '2rem' }}>
        Ghé thăm
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
)

export default FindUs
