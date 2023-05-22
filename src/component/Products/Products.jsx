import React, { useState } from 'react'
import './Products.css'

import { useAutoAnimate } from '@formkit/auto-animate/react'

import PlaneImg from '../../assets/plane.png'
import { ProductsData } from '../../data/products'

const Products = () => {
    const [productItems, SetProductItems] = useState(ProductsData);

    const filter = (type) => {
        SetProductItems(ProductsData.filter(product => product.type === type));
    }

    const [parent] = useAutoAnimate();

    return (
        <div className="products">
            <div className="container">
                <div className="content">

                    <div className="title">
                        <img src={PlaneImg} alt="" />
                        <span>Our Feature Products</span>
                    </div>

                    <div className="products-items">

                        <ul className="pagination">
                            <li><span onClick={() => SetProductItems(ProductsData)}>All</span></li>
                            <li><span onClick={() => filter('skin care')}>Skin Care</span></li>
                            <li><span onClick={() => filter('conditioner')}>Conditioner</span></li>
                            <li><span onClick={() => filter('foundation')}>Foundation</span></li>
                        </ul>

                        <div className="items" ref={parent}>
                            {productItems.map((item, index) => (
                                <div className="item" key={index}>
                                    <div className="desc">
                                        <div className='name'>
                                            <span>{item.name}</span>
                                            <span>{item.detail}</span>
                                        </div>
                                        <span className='price'>{item.price}$</span>
                                        <span className='btn'>Shop Now</span>
                                    </div>
                                    <img src={item.img} className='product-img' alt="product" />
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Products
