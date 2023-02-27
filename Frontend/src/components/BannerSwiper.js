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
        }, 400)
    } 
    return <div className='mx-auto w-2/3  h-[500px] border-8 rounded-lg border-gold  w-max-64 relative overflow-hidden'>
        {imgs.map((img, id) =>  
            <div className={`absolute inset-0 ${(iId == id || iId == id - 1) && di == -1 ? 'move-right' : ''} ${(iId == id || iId == id + 1) && di == 1 ? 'move-left' : ''}  ${(iId == id - 1) && di == -1 ? 'im-left' : ''} ${(iId == id + 1) && di == 1 ? 'im-right' : ''}   transition-transform`} key={id}>
                <img className="object-cover w-full h-full" src={img} />
                <div>
                    <h3>ARE YOU LOOKING FOR YUMMY CAKES,FREASH BREAD AND STYLISH DISSERTS?</h3>
                    <div className="">DON"T WORRY ,WE CAN HELP YOU ! CHECK OUR BEST PRODUCTS</div>
                </div>
                <button className="">BUY NOW</button>
            </div>
         )}


        <div className="absolute z-50 w-full h-8 top-1/2 -translate-y-1/2  text-white">
            <div className=" h-full flex justify-between items-center  ">
                <FontAwesomeIcon icon="fa-angle-left" className="cursor-pointer p-3" size="2x" onClick={ preImg}></FontAwesomeIcon>
                <FontAwesomeIcon icon=" fa-angle-right " className="cursor-pointer p-3" size="2x" onClick={  nextImg}></FontAwesomeIcon>
            </div> 
        </div>
    </div>
}

export default BannerSwiper 