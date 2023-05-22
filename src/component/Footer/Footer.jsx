import React from 'react'
import './Footer.css'

import Logo from '../../assets/logo.png'

import { GrLocation } from 'react-icons/gr'
import { BsTelephone } from 'react-icons/bs'
import { GiShoppingCart } from 'react-icons/gi'
import { VscSignIn } from 'react-icons/vsc'
import { AiOutlineTeam } from 'react-icons/ai'
import { SiGnuprivacyguard } from 'react-icons/si'



const Footer = () => {
    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="content">

                    <div className="links">

                        <div className="logo">
                            <div className='title'>
                                <img src={Logo} alt="" />
                                <span>amazon</span>
                            </div>
                        </div>

                        <div className="contact">
                            <div className='title'>
                                <span>contact us</span>
                            </div>
                            <div>
                                <GrLocation />
                                <span>111 north avenue Orlando, FL 32801</span>
                            </div>
                            <div>
                                <BsTelephone />
                                <span>352-306-4415</span>
                            </div>
                            <div>
                                <GiShoppingCart />
                                <span>support@amazon.com</span>
                            </div>
                        </div>

                        <div className="accounts">
                            <div className='title'>
                                <span>accounts</span>
                            </div>
                            <div>
                                <VscSignIn />
                                <span>Sign In</span>
                            </div>
                        </div>

                        <div className="company">
                            <div className='title'>
                                <span>company</span>
                            </div>
                            <div>
                                <AiOutlineTeam />
                                <span>About Us</span>
                            </div>
                        </div>

                        <div className="resources">
                            <div className='title'>
                                <span>resources</span>
                            </div>
                            <div>
                                <SiGnuprivacyguard />
                                <span>Safety Privacy & Terms</span>
                            </div>
                        </div>

                    </div>

                    <div className="copy-right">
                        Copyright ©2022 by shiref mohammed, Inc.<br />All rights reserved.
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
