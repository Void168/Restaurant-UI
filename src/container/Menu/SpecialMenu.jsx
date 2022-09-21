import React from 'react'

import './SpecialMenu.css'
import { images, data } from '../../constants'
import { SubHeading, MenuItem } from '../../components'

const SpecialMenu = () => (
  <div className="app_specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu_title">
      <SubHeading title="Thực đơn có thể phù hợp với khẩu vị của bạn" />
      <h1 className="headtext__cormorant">Hôm nay uống gì?</h1>
    </div>

    <div className="app__specialMenu_menu">
      <div className="app__specialMenu__menu_wine flex__center">
        <p className="app__specialMenu__menu_heading">Rượu & Bia</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu_menu_img">
        <img src={images.menu} alt="special menu" />
      </div>

      <div className="app__specialMenu__menu_cocktail flex__center">
        <p className="app__specialMenu__menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: '15px' }}>
      <button type="button" className="custom__button">
        Xem thêm
      </button>
    </div>
  </div>
)

export default SpecialMenu
