import React from 'react'
import './Virtual.css'

import ReactCompareImage from 'react-compare-image';

import ShadeImg from '../../assets/shade.png'
import BeforeImg from '../../assets/before.png'
import AfterImg from '../../assets/after.png'

const Virtual = () => {
    return (
        <div className="virtual">
            <div className="container">
                <div className="content">
                    <div className="left-v">
                        <div>
                            <span>virtual try-on</span>
                        </div>
                        <div>
                            <span>EVER BUY THE WRONG<br /> SHADE AGAIN!</span>
                        </div>
                        <div>
                            <span>Try Now!</span>
                            <img src={ShadeImg} alt="" />
                        </div>
                    </div>
                    <div className='right-v'>
                        <ReactCompareImage leftImage={BeforeImg} rightImage={AfterImg} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Virtual
