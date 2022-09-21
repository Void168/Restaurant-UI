import React from 'react'

import './AboutUs.css'
import { images } from '../../constants'
import './AboutUs.css'

const AboutUs = () => (
  <div className="app_aboutus app__bg flex__center section__padding" id="about">
    <div className="app_aboutus_overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app_aboutus_content flex__center">
      <div className="app_aboutus_content_about">
        <h1 className="headtext__cormorant">Về chúng tôi</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Đừng vội đi mau cho anh nói hết câu chào. Giấc mơ không thành đã hóa
          nên nhành, nên hoa ôm vết thương anh. Chuyện buồn không tên mình từng
          viết nên dẫu không còn đoạn kết mới. Thì cũng đã qua rồi người ơi. Một
          ngày chúng ta sẽ bình an suốt đời
        </p>
        <button type="button" className="custom__button">
          Xem thêm
        </button>
      </div>

      <div className="app_aboutus_content_knife flex__center">
        <img src={images.knife} alt="about knife" />
      </div>

      <div className="app_aboutus_content_history">
        <h1 className="headtext__cormorant">Lịch sử</h1>
        <img src={images.spoon} alt="history_spoon" className="spoon__img" />
        <p className="p__opensans">
          Có những ký ức không thể quên. Là thấp thoáng những xuyến xao đầu
          tiên. Mỗi chiều tiếng ve tôi vờ như hư xe chờ em. Hoàng hôn buông vệt
          dài nơi cuối đường. Hắt sáng bóng dáng tôi thầm thương. Em là lý do
          tôi biết vấn vương trong đời. Dù em đâu hay biết tới...
        </p>
        <button type="button" className="custom__button">
          Xem thêm
        </button>
      </div>
    </div>
  </div>
)

export default AboutUs
