import React from 'react';
import './Slider.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { SliderProducts } from '../../data/products'

const Slider = () => {
    return (
        <div className="slider">
            <div className="container">
                <div className="content">
                    <Swiper
                        modules={[Pagination, Navigation]}
                        className='mySwiper'
                        navigation={true}
                        slidesPerView={3}
                        spaceBetween={40}
                        slidesPerGroup={1}
                        loop={true}
                        breakpoints={{
                            992: { slidesPerView: 3 },
                            600: { slidesPerView: 2 },
                            0: { slidesPerView: 1 }
                        }}
                    >
                        {SliderProducts.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="desc">
                                    <div className='name'>
                                        <span>{slide.name}</span>
                                        <span>{slide.detail}</span>
                                    </div>
                                    <span className='price'>{slide.price}$</span>
                                    <span className='btn'>Shop Now</span>
                                </div>
                                <img src={slide.img} className='product-img' alt="product" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>

    )
}

export default Slider