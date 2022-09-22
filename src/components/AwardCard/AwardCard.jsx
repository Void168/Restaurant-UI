import React from 'react'

import '../../container/Laurels/Laurels.css'

const AwardCard = ({ award: { Url, title, subtitle } }) => (
  <div className="app__laurels_awards_card">
    <img src={Url} alt="award" />
    <div className="app__laurels_awards_card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>
        {title}
      </p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
)

export default AwardCard
