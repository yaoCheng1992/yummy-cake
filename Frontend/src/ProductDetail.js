import React, { useState } from 'react'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { register } from 'swiper/element/bundle';
register();
import Img9 from './images/p6.jpg'
import Img10 from './images/p7.jpg'
import Img11 from './images/p8.jpg'
function ProductDetail() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="grid grid-cols-1 mx-32 sm:grid-cols-8 mt-12">
            <div className="col-span-1 sm:col-span-6">

                <div className="grid grid-cols-5 ">
                    <div className="col-span-2">
                        <swiper-container style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                            space-between='10'
                            navigation={true}
                            thumbs-swiper={thumbsSwiper}
                            modules={[FreeMode, Navigation, Thumbs]}>
                            <swiper-slide className={`  `}>
                                <img className="w-full" src={Img9} />

                            </swiper-slide>
                            <swiper-slide className={` `}>
                                <img className="w-full" src={Img10} />

                            </swiper-slide>
                            <swiper-slide className={` `}>
                                <img className="w-full" src={Img11} />

                            </swiper-slide>
                        </swiper-container>
                        <swiper-container onSwiper={setThumbsSwiper}
                            space-between={10}
                            slides-perView={3}
                            freeMode={true}
                            watch-slides-progress={true}
                            modules={[FreeMode, Navigation, Thumbs]}>
                            <swiper-slide className=" ">
                                <img  src={Img9} />
                            </swiper-slide>
                            <swiper-slide className="">
                                <img  src={Img10} />
                            </swiper-slide>
                            <swiper-slide className="">
                                <img  src={Img11} />
                            </swiper-slide> 
                        </swiper-container>
                    </div>
                    <form className="col-span-3 pl-4">
                        <div className="font-weight text-3xl   py-2">
                            Valentine cake
                        </div>
                        <div className="font-medium py-4">
                            select a cake
                        </div>
                        <div className="flex space-x-4">
                            <label htmlFor="size1">
                                <input id="size1" className="sr-only peer" type="radio" name="size" checked value="4" />
                                <div className='cursor-pointer rounded-xl px-4 py-2 peer-checked:bg-blue peer-checked:text-white'>4 inch</div>
                            </label>
                            <label htmlFor='size2'>
                                <input id="size2" className="sr-only peer" type="radio" name="size" value="6" />
                                <div className='cursor-pointer rounded-xl px-4 py-2 peer-checked:bg-blue peer-checked:text-white'>6 inch</div>
                            </label>
                            <label htmlFor="size3">
                                <input id="size3" className="sr-only peer" type="radio" name="size" value="8" />
                                <div className="cursor-pointer rounded-xl px-4 py-2 peer-checked:bg-blue peer-checked:text-white ">8 inch</div>
                            </label>
                        </div>
                        <button className='mt-4 rounded-2xl px-8 py-2  bg-gold'>BUY</button>


                    </form>
                </div>
            </div>
            <div className="none sm:col-span-2">
                <div className="text-2xl font-bold    py-4">shopping options</div>
                <div className="border-t-2 border-gold mb-4">
                    <div className="text-bold text-blue p-2">Price</div>
                    <div class="pl-4 space-y-2  ">
                        <button className="block">
                            <span className="text-blue">1.</span>
                            $100_$199
                            <span className="text-blue">(3)</span>
                        </button>
                        <button className="block">
                            <span className="text-blue">2.</span>
                            $100_$199
                            <span className="text-blue">(3)</span>
                        </button>
                        <button className="block">
                            <span className="text-blue">3.</span>
                            $100_$199
                            <span className="text-blue">(3)</span>
                        </button>
                    </div>
                </div>
                <div className="border-t-2 border-gold mb-4">
                    <div className="text-bold text-blue p-2">Items</div>
                    <div class="pl-4 space-y-2  ">

                        <button className="block">
                            <span className="text-blue">1.</span>
                            Pineapple
                            <span className="text-blue">(3)</span>
                        </button>
                        <button className="block">
                            <span className="text-blue">2.</span>
                            Bannana
                            <span className="text-blue">(3)</span>
                        </button>
                        <button className="block">
                            <span className="text-blue">3.</span>
                            Strawberry
                            <span className="text-blue">(3)</span>
                        </button>
                    </div>
                </div>
                <div className="border-t-2 border-gold mb-4">
                    <div className="text-bold text-blue p-2">Flavours</div>
                    <div class="pl-4 space-y-2  ">
                        <button className="block">
                            <span className="text-blue">1.</span>
                            Salty

                            <span className="text-blue">(3)</span>
                        </button>
                        <button className="block">
                            <span className="text-blue">2.</span>
                            Sweet
                            <span className="text-blue">(3)</span>
                        </button>
                        <button className="block">
                            <span className="text-blue">3.</span>
                            combined
                            <span className="text-blue">(3)</span>
                        </button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default ProductDetail