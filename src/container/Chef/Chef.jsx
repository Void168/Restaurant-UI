import React from 'react'

import './Chef.css'
import { images } from '../../constants'
import { SubHeading } from '../../components'

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img_reverse">
      <img
        src="https://i.ytimg.com/vi/TmclgNLFbm8/maxresdefault.jpg"
        alt="chef"
      />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Đôi lời" />
      <h1 className="headtext__cormorant">Chúng ta tin vào điều gì?</h1>
      <div className="app__chef_content">
        <div className="app__chef_content_quote"></div>
        <img
          src={images.quote}
          alt="quote"
          style={{ margin: '0 .5rem .5rem 0' }}
        />
        <p className="p__opensans">
          Với tôi, âm nhạc không phải là sản phẩm định hướng người nghe tới cảm
          xúc cá nhân có chủ đích của tác giả mà nó nên là công cụ mở ra suy
          nghĩ của họ.
        </p>
      </div>
      <p className="p__opensans">
        Bởi lẽ, là một người làm nhạc, tôi cũng nghe rất nhiều sản phẩm của các
        nghệ sĩ khác. Nhưng bản thân anh từng có nỗi sợ về việc nghe những bài
        nhạc "chất", có sự hàm ý vì lo rằng bản thân không đủ sâu sắc để hiểu
        được ý tứ mà tác giả gửi gắm.
      </p>
      <div className="app__chef_sign" style={{ marginTop: '2rem' }}>
        <p className="p__opensans">Chef & Founder</p>
        <p className="headtext__cormorant">Hoàng Dũng</p>
      </div>
    </div>
  </div>
)

export default Chef
