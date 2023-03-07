import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css' 
import 'swiper/css'; 
import { register } from 'swiper/element/bundle'; 
register();
import Img10 from '../images/p10.jpg'
import Img11 from '../images/p11.jpg'
import Img12 from '../images/p12.jpg'
import Img13 from '../images/p13.jpg'
function BannerSwiper(props) {
    const swiperElRef = useRef(null);
    useEffect(() => {        
    }, []);
    let length = 4
    let imgs = [Img10, Img11, Img12, Img13]
 
    return <div className='swiper mx-auto  sm:w-[600px] sm:h-[350px]  '  >
        <swiper-container ref={swiperElRef}  loop="true" autoplay-deday="500"
            navigation="true"    >
            {imgs.map((img, id) =>
                <swiper-slide   key={id}>
                    <img className="object-cover w-full h-full" src={img} />
                    <div className="absolute inset-y-0 w-1/2 pl-8  ">
                        <h3 className="bg-[rgba(0,0,0,.2)] text-white mt-16 font-bold text-2xl ">ARE YOU LOOKING FOR YUMMY CAKES,FREASH BREAD AND STYLISH DISSERTS?</h3>
                        <div className="bg-[rgba(0,0,0,.2)] text-white mt-4 text-xs">DON"T WORRY ,WE CAN HELP YOU ! CHECK OUR BEST PRODUCTS</div>
                        <button className="mt-4 rounded-full p-1  bg-gradient-to-r from-gold  to-blue">
                            <span className=" block px-5 py-2.5  text-sm text-black  rounded-full bg-white hover:bg-[transparent] hover:text-white transition">BUY NOW</span>
                        </button>
                    </div>
                </swiper-slide>
            )}
        </swiper-container>

        <div className="absolute z-50 w-full h-8 top-1/2 -translate-y-1/2  text-white">
            <div className=" h-full flex justify-between items-center  ">
                <FontAwesomeIcon icon="fa-angle-left" className="prev cursor-pointer p-3" size="2x" onClick={ ()=> swiperElRef.current.swiper.slidePrev()}></FontAwesomeIcon>
                <FontAwesomeIcon icon=" fa-angle-right " className="next cursor-pointer p-3" size="2x"  onClick={ ()=> swiperElRef.current.swiper.slideNext()}></FontAwesomeIcon>
            </div>
        </div>
        </div> 
}

export default BannerSwiper 