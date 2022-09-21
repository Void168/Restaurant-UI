import React from 'react'

import './Header.css'
import { images } from '../../constants'
import { SubHeading } from '../../components'

const Header = () => {
  return (
    <div className="app_header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Theo đuổi hương vị mới" />
        <h1 className="app_header_h1">Chìa khóa dẫn đến bữa tối hoàn hảo</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          Vì đây là bữa tiệc của những giác quan. Nơi mà bất cứ ai cũng được
          phép liên hoan Hãy đến và uống với nhau hết ly phiền muộn. Vì đây là
          bữa tiệc của những giác quan Nơi màu sắc tươi đẹp bao phủ khắp không
          gian. Hãy đến để được quý giá hơn mỗi giây đời mình
        </p>
        <button type="button" className="custom__button">
          Khám phá Thực đơn
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="img welcome" />
      </div>
    </div>
  )
}

export default Header
