import React from 'react'

import './Gallery.css'
import { images, data } from '../../constants'
import { SubHeading } from '../../components'
import {
  BsInstagram,
  BsArrowLeft,
  BsArrowRightShort,
  BsArrowLeftShort,
} from 'react-icons/bs'
import { useRef } from 'react'

const Gallery = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef

    if (direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }

  const galleryImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ]

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery_content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Bộ sưu tập</h1>
        <p
          className="p__opensans"
          style={{ color: '#AAA', marginTop: '2rem' }}
        ></p>
        <button type="button" className="custom__button">
          Xem thêm
        </button>
      </div>

      <div className="app__gallery_images">
        <div className="app__gallery_images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="app__gallery_images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery__image_icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery_images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow_icon"
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className="gallery__arrow_icon"
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  )
}

export default Gallery
