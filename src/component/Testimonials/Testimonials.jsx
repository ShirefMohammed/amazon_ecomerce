import React from 'react'
import './Testimonials.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import TestimonialHero from '../../assets/testimonialHero.png'
import { TestimonialsData } from '../../data/testimonials'

const Testimonials = () => {
    let sliderPerView = 3;
    if (window.innerWidth < 992) {
        sliderPerView = 2;
    }
    if (window.innerWidth < 600) {
        sliderPerView = 1;
    }

    return (
        <div className="testimonials">
            <div className="container-fluid">
                <div className="content">
                    <div className="poster">
                        <div className="left-p">
                            <span>top rated</span>
                            <span>SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN REJOICED.</span>
                        </div>
                        <div className="middle-p">
                            <img src={TestimonialHero} alt="TestimonialHero" />
                        </div>
                        <div className="right-p">
                            <span>100K</span>
                            <span>HAPPY CUSTOMERS WITH US</span>
                        </div>
                    </div>
                    <div className="reviews">
                        <div className="title">
                            <span>preview</span>
                        </div>
                        <div className="items">
                            <Swiper
                                slidesPerView={sliderPerView}
                                spaceBetween={20}
                                slidesPerGroup={1}
                                breakpoints={{
                                    992: { slidesPerView: 3 },
                                    700: { slidesPerView: 2 },
                                    0: { slidesPerView: 1 }
                                }}
                            >
                                {
                                    TestimonialsData.length > 0 && TestimonialsData.map((testimonial, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="testimonial">
                                                <img src={testimonial.image} alt="" />
                                                <div className='comment'>{testimonial.comment}</div>
                                                <hr />
                                                <div className="name">{testimonial.name}</div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
