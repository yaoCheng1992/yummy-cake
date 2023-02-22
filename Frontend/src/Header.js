import React from "react";

function Header() {

    return <div className=" text-white  ">
        <div className="bg-first  mb-24 h-11 grid grid-cols-10 grid-rows-1">
            <div className="col-span-6 grid grid-cols-3 gap-3">
                <button className="text-right">MY ACCOUNT</button>
                <button  className="text-left">CHECK OUT</button>
                <div className="flex place-self-center space-x-2 cursor-pointer">
                    <img src="" />
                    <div>Cart </div>
                    <div>$320</div>
                </div>
            </div>
            <form className="col-span-2  ">
                <input className="focus:outline-none  focus:shadow-xl   w-full h-full pl-4 text-third" type="text" name="keyword" />
                <label className="absolute insert-y-0 right-2 text-third">
                    <input type="submit" value=""/>
                    <img src="" />
                </label>
            </form>
            <div className="col-span-2  place-self-center divide-x   divide-white">
                <button  className=" pr-6">Login</button>
                <button  className=" pl-6">Register</button>
            </div>

        </div>
        <div className="grid place-items-center grid-cols-6  bg-second h-24 px-36">

            <div className="col-start-1">
                <a href="">HOME</a>
            </div>
            <div>
                <a href="">PRODUCTS</a>
            </div>
            <div className="col-span-2">
                <img src=""/>
            </div>
            <div>
                <a href="">ABOUT US</a>
            </div>
            <div>
                <a href="">CONTACT</a>
            </div>
        </div>
    </div >
}

export default Header