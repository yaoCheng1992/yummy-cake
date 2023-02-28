import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'
import Img10 from '../images/p10.jpg'
import Img11 from '../images/p11.jpg'
import Img12 from '../images/p12.jpg'
import Img13 from '../images/p13.jpg'
function BannerSwiper(props) {
    let length = 4
    let imgs = [Img10, Img11, Img12, Img13]
    let [iId, setIId] = useState(0)
    let [di, setDi] = useState(0)
    let timer = useRef(null)

    function preImg() {
        console.log('-----')
        if (iId <= 0) {
            setIId(length - 1)

        } else {
            setIId(iId - 1)
        }
        setDi(-1)
        timer = setTimeout(() => {
            setDi(0)
            clearTimeout(timer.current)
        }, 4000)

    }
    function nextImg() {
        console.log('-----')
        if (iId >= length - 1) {

            setIId(0)
        } else {

            setIId(iId + 1)
        }

        setDi(1)
        timer = setTimeout(() => {
            setDi(0)
            clearTimeout(timer.current)
        }, 8000)
    }
    let lens = imgs.length
    let widerContainer = `relative transition-all  ` 
    let inner = `absolute sm:w-[600px]m:h-[350px]`
    return <div className=' mx-auto overflow-hidden  sm:w-[600px] sm:h-[350px]   relative '  >
        <div className= {widerContainer}  style={  {transform: `translateX(${-iId*600}px)`} }>
            {imgs.map((img, id) =>
                <div className={inner} style={{transform:`translateX(${id*100}%) `}} key={id}>
                    <img className="object-cover w-full h-full" src={img} />
                    <div className="absolute inset-y-0 w-1/2 pl-8  ">
                        <h3 className="bg-[rgba(0,0,0,.2)] text-white mt-16 font-bold text-2xl ">ARE YOU LOOKING FOR YUMMY CAKES,FREASH BREAD AND STYLISH DISSERTS?</h3>
                        <div className="bg-[rgba(0,0,0,.2)] text-white mt-4 text-xs">DON"T WORRY ,WE CAN HELP YOU ! CHECK OUR BEST PRODUCTS</div>
                        <button className="mt-4 rounded-full p-1  bg-gradient-to-r from-gold  to-blue">
                            <span className=" block px-5 py-2.5  text-sm  rounded-full bg-white hover:bg-[transparent] hover:text-white transition">BUY NOW</span>
                        </button>
                    </div>
                </div>
            )}
        </div>

        <div className="absolute z-50 w-full h-8 top-1/2 -translate-y-1/2  text-white">
            <div className=" h-full flex justify-between items-center  ">
                <FontAwesomeIcon icon="fa-angle-left" className="cursor-pointer p-3" size="2x" onClick={preImg}></FontAwesomeIcon>
                <FontAwesomeIcon icon=" fa-angle-right " className="cursor-pointer p-3" size="2x" onClick={nextImg}></FontAwesomeIcon>
            </div>
        </div>
    </div>
}

export default BannerSwiper 