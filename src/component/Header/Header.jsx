import React from 'react'
import './Header.css'

import Logo from '../../assets/logo.png'

import { HiBars3 } from 'react-icons/hi2'
import { BsCart3 } from 'react-icons/bs'

const Header = () => {
    const handleToggle = () => {
        document.querySelector(".header .links").classList.toggle("d-none");
        document.querySelector(".header .search").classList.toggle("d-none");
        document.querySelector(".header .cart").classList.toggle("d-none");
    }

    return (
        <div className="header">
            <div className="container-fluid">
                <div className="content">

                    <div className="left-side">
                        <img src={Logo} alt="" />
                        <span>amazon</span>
                    </div>

                    <div className="right-side">
                        <div className="bars" onClick={handleToggle}>
                            <HiBars3 />
                        </div>

                        <ul className="links d-none">
                            <li>
                                <a href='#collections'>Collections</a>
                            </li>
                            <li>
                                <a href='#brands'>Brands</a>
                            </li>
                            <li>
                                <a href='#new'>New</a>
                            </li>
                            <li>
                                <a href='#sales'>Sales</a>
                            </li>
                            <li>
                                <a href='#ENG'>ENG</a>
                            </li>
                        </ul>

                        <input type="search" className='search d-none' placeholder='Search' />

                        <div className="cart d-none">
                            <BsCart3 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
