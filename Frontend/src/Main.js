import React, { Fragment } from "react";
import {Link} from "react-router-dom";
import BannerSwiper from './components/BannerSwiper'
import './style.css'

import Img1 from './images/p1.jpg'
import Img2 from './images/p2.jpg'
import Img3 from './images/p3.jpg'
import Img4 from './images/p4.jpg'
import Img5 from './images/p5.jpg'
import Img6 from './images/p6.jpg'
import Img7 from './images/p7.jpg'
import Img8 from './images/p8.jpg'
import bgSell from './images/bg-sell.png'
import Footer from "./Footer";
import Header from "./Header";
function Main() {
    
    let pros = [
        {
            img: Img1,
            price: '2.4',
            desc: 'this is description of the product, this is description of the product,this is description of the product,'
        },
        {
            img: Img2,
            price: '1.5',
            desc: 'this is description of the product, this is description of the product,this is description of the product,'
        },
        {
            img: Img3,
            price: '2',
            desc: 'this is description of the product, this is description of the product,this is description of the product,'
        },
    ]
    let bestSell = [
        {
            img: Img4,
            price: '2',
            name: 'cake'
        },
        {
            img: Img5,
            price: '2.4',
            name: 'cake'
        },
        {
            img: Img6,
            price: '1.5',
            name: 'cake'
        },
        {
            img: Img7,
            price: '1.5',
            name: 'cake'
        },
    ]
    return <div>
        <Header></Header>
        <div className="pt-8">
            
            <BannerSwiper ></BannerSwiper>
            <div className="grid  mt-4 mx-8 grid-cols-1 sm:mx-48 lg:grid-cols-3 gap-4 space-x-4  ">
                {pros.map((item, id) => {
                    return <div className="text-center shadow-2xl p-4" key={id}>
                        <div className="font-bold bg-gold leading-10 -mx-4 ">OUR CAKES</div>
                        <div className="mt-4 mb-2">
                            <div className="border-4 mb-4 border-blue h-32">
                                <img className="position inset-0 w-full h-full object-cover" src={item.img} />
                            </div>
                            <div className="text-left text-xs  min-h-[60px]">
                                {item.desc}
                            </div>
                        </div>
                        <form>
                            <label className="block font-bold text-lg">
                                ${item.price}
                                <input type="text" className="hidden" readOnly name="price" value="12" />
                            </label>

                            <input className="text-xs mt-1 rounded-3xl bg-blue px-5  py-2.5 cursor-pointer hover:bg-black hover:text-gold" type="submit" value="BUY NOW" />
                        </form>
                    </div>
                })}


            </div>
            <div className="grid mt-8 overflow-visible mx-48 grid-col-1 lg:grid-cols-3 space-x-4 mb-8  shadow-lg shadow-gold divide-x-1 divide-x-blue">
                <div className="   text-center relative lg:col-span-2 px-2 py-6 flex space-x-3">
                    <div className="absolute inset-x-0 -top-3">
                        <img src={bgSell} className="absolute left-1/2 -translate-x-1/2 -mt-3 h-10 object-cover" />
                        <div className="index-2 relative text-xs">BEST SELLERS</div>
                    </div>
                    {
                        bestSell.map((item, id) => {
                            return <div className="flex-1" key={id}>
                                <div className="w-full h-32 border-4 border-gold">
                                    <img src={item.img} className=" w-full h-full object-cover" />
                                </div>
                                <div className="text-xs font-bold  mt-2">{item.name}</div>
                                <div className="text-xs font-bold  mt-2">${item.price}</div>
                            </div>
                        })
                    }
                    <button className="absolute    text-xs font-bold right-0 -bottom-4   bg-black px-4 py-2 text-white hover:bg-blue">ORDER NOW</button>
                </div>
                <div className=" px-2 py-6">              
                    <div className="">
                        <h2 className="font-sans font-bold border-b-2 leading-8 border-b-gold">LASTEST NEWS</h2>
                        <p className="text-xs py-2 leading-5">Valentine day special off for you : we can 80% off on all the cakes to all the customers , the activity end at 30.Febary 2023.</p>
                        <p className="text-xs font-thin">1 days ago</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
}
export default Main