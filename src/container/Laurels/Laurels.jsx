import React from 'react'

import './Laurels.css'
import { images, data } from '../../constants'
import { SubHeading, AwardCard } from '../../components'

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Thành tựu & Giải thưởng" />
      <h1 className="headtext__cormorant">Vinh dự của chúng tôi</h1>
      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
)

export default Laurels
