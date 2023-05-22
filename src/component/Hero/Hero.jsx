import React from 'react'
import './Hero.css'

import { motion } from 'framer-motion'

import HeroImg from '../../assets/hero.png'

import { RiShoppingBagFill } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'

const Hero = () => {
    const transition = { type: 'tween', duration: 2 }

    return (
        <div className="hero">
            <div className="container-fluid">
                <div className="content">

                    {/* Left Side */}
                    <div className="left-side">
                        <div className='skin-protection'>
                            SKIN PROTECTION CREAM
                        </div>
                        <div className='trendy-collection'>
                            <span>Trendy Collection</span>
                            <span>
                                Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.
                            </span>
                        </div>
                    </div>

                    {/* Middle Side */}
                    <div className="middle-side">
                        <motion.div
                            className="blue-circle"
                            initial={{ bottom: '3rem' }}
                            whileInView={{ bottom: '1rem' }}
                            transition={transition}
                        ></motion.div>
                        <motion.img
                            initial={{ bottom: '-2rem' }}
                            whileInView={{ bottom: '0' }}
                            transition={transition}
                            src={HeroImg} alt="" />
                        <motion.div
                            className='cart'
                            initial={{ marginRight: '1rem' }}
                            whileInView={{ marginRight: '0' }}
                            transition={transition}
                        >
                            <div className='bag'>
                                <RiShoppingBagFill />
                            </div>
                            <div className='sign-up'>
                                <span>Best Sign up Offers</span>
                                <div className='arrow'>
                                    <BsArrowRight />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side */}
                    <div className="right-side">
                        <div className="monthly-traffic">
                            <span>1.5M</span>
                            <span>monthly Traffic</span>
                        </div>
                        <div className="happy-customers">
                            <span>100K</span>
                            <span>Happy Customers</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero
