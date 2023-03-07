
import React, { useState, useEffect } from 'react';
import Router from './Router'
import { Link } from 'react-router-dom'; 
import 'swiper/css'; 
import { register } from 'swiper/element/bundle';
register();
import Img14 from './images/p14.jpg'
import Img15 from './images/p15.jpg'
import Img16 from './images/p16.jpg'
import Img17 from './images/p17.jpg'
import Img18 from './images/p18.jpg'
function Products() {
    return <div className="mx-24">
        <div className="mt-16 text-gold text-3xl font-bold ">
            Products
        </div>
        <div className="my-4">
            <div className="bg-blue text-white inline-block px-4 py-2 font-bold text-xl">
                NEW VARIETIES
            </div>
            <div className="mt-2">
                <swiper-container slides-per-view="4" loop="true" autoplay-deday="400">
                    <swiper-slide className=" py-2 px-4">
                        <img src={Img14} className="w-48 h-28 object-cover" />
                        <div className="font-md mt-2 border-t-1 border-grey-100">
                            Delicious
                        </div>
                        <div className="text-blue font-lg mb-2">$ 2.5</div>
                        <Link className="bg-blue tex-white px-2 py-1" to='/productDetail'>Add to cart</Link>
                    </swiper-slide>
                    <swiper-slide className=" py-2 px-4">
                        <img src={Img15} className="w-48 h-28 object-cover" />
                        <div className="font-md mt-2 border-t-1 border-grey-100">
                            Delicious
                        </div>
                        <div className="text-blue font-lg mb-2">$ 2.5</div>
                        <Link className="bg-blue tex-white px-2 py-1" to='/productDetail'>Add to cart</Link>
                    </swiper-slide>
                    <swiper-slide className=" py-2 px-4">
                        <img src={Img16} className="w-48 h-28 object-cover" />
                        <div className="font-md mt-2 border-t-1 border-grey-100">
                            Delicious
                        </div>
                        <div className="text-blue font-lg mb-2">$ 2.5</div>
                        <Link className="bg-blue tex-white px-2 py-1" to='/productDetail'>Add to cart</Link>
                    </swiper-slide>
                    <swiper-slide className="  py-2 px-4">
                        <img src={Img17} className="w-48 h-28 object-cover" />
                        <div className="font-md mt-2 border-t-1 border-grey-100">
                            Delicious
                        </div>
                        <div className="text-blue font-lg mb-2">$ 2.5</div>
                        <Link className="bg-blue tex-white px-2 py-1" to='/productDetail'>Add to cart</Link>
                    </swiper-slide>
                    <swiper-slide className="  py-2 px-4">
                        <img src={Img18} className="w-48 h-28 object-cover" />
                        <div className="font-md mt-2 border-t-1 border-grey-100">
                            Delicious
                        </div>
                        <div className="text-blue font-lg mb-2">$ 2.5</div>
                        <Link className="bg-blue tex-white px-2 py-1" to='/productDetail'>Add to cart</Link>
                    </swiper-slide>
                </swiper-container>
            </div>
        </div>
        <div className="my-4">
            <div className="bg-blue text-white inline-block px-4 py-2 font-bold text-xl">
                VARIETIES
            </div>
            <div className="mt-2">
                <swiper-container slides-per-view="4" loop="true" autoplay-deday="400">
                    <swiper-slide className=" py-2 px-4">

                        <img src={Img14}className="w-48 h-28 object-cover" />
                        <div className="font-md mt-2 border-t-1 border-grey-100">
                            Delicious
                        </div>
                        <div className="text-blue font-lg mb-2">$ 2.5</div>
                        <Link className="bg-blue tex-white px-2 py-1" to='/productDetail'>Add to cart</Link>
                    </swiper-slide>
                    <swiper-slide className=" py-2 px-4">

                        <img src={Img15} className="w-48 h-28 object-cover" />
                        <div className="font-md mt-2 border-t-1 border-grey-100">
                            Delicious
                        </div>
                        <div className="text-blue font-lg mb-2">$ 2.5</div>
                        <Link className="bg-blue tex-white px-2 py-1" to='/productDetail'>Add to cart</Link>
                    </swiper-slide>
                    <swiper-slide className=" py-2 px-4">

                        <img src={Img16} className="w-48 h-28 object-cover" />
                        <div className="font-md mt-2 border-t-1 border-grey-100">
                            Delicious
                        </div>
                        <div className="text-blue font-lg mb-2">$ 2.5</div>
                        <Link className="bg-blue tex-white px-2 py-1" to='/productDetail'>Add to cart</Link>
                    </swiper-slide>
                    <swiper-slide className="  py-2 px-4">

                        <img src={Img17} className="w-48 h-28 object-cover" />
                        <div className="font-md mt-2 border-t-1 border-grey-100">
                            Delicious
                        </div>
                        <div className="text-blue font-lg mb-2">$ 4.5</div>
                        <Link className="bg-blue tex-white px-2 py-1" to='/productDetail'>Add to cart</Link>
                    </swiper-slide>
                    <swiper-slide className="  py-2 px-4">

                        <img src={Img18} className="w-48 h-28 object-cover" />
                        <div className="font-md mt-2 border-t-1 border-grey-100">
                            Delicious
                        </div>
                        <div className="text-blue font-lg mb-2">$ 4.5</div>
                        <Link className="bg-blue tex-white px-2 py-1" to='/productDetail'>Add to cart</Link>
                    </swiper-slide>
                </swiper-container>
            </div>
        </div>
    </div>
}
export default Products;