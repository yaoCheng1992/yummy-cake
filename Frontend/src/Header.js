import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from './logo.svg'
import './style.css'
import { Link, Outlet } from "react-router-dom";
function Header() {
    return <div className="  ">
        <div className=" bg-gold shadow-xl mb-24 h-11 grid grid-cols-10 grid-rows-1">
            <div className="col-span-6 grid grid-cols-3 gap-3">
                <button className="text-right">MY ACCOUNT</button>
                <button className="text-left">CHECK OUT</button>
                <div className="flex place-self-center space-x-2 cursor-pointer">
                    <FontAwesomeIcon icon='fa-cart-shopping' size="lg" />
                    <div>Cart </div>
                    <div>$320</div>
                </div>
            </div>
            <form className="col-span-2 relative">
                <input className="focus:outline-none focus:shadow-xl w-full h-full pl-4 " type="text" name="keyword" />
                <label htmlFor="search" className="absolute right-0 px-4 pt-2 h-full cursor-pointer ">
                    <input id="search" type="submit" className="hidden" value="" />
                    <FontAwesomeIcon className=" " icon="fa-magnifying-glass" size="lg" />
                </label>
            </form>
            <div className="col-span-2  place-self-center divide-x   divide-white">
                <button className=" pr-6">
                    <Link to='/login'>Login</Link>
                </button>
                <button className=" pl-6">Register</button>
            </div>

        </div>

        <div className="bg-blue  font-bold text-shadow-xl grid  place-items-center grid-cols-6  h-24 px-36  before:content-[*] before:absolute before:bg-white before:mt-0.5 before:w-full before:h-0.5">

            <div className="">
                <Link to="/" className="stroke-yao">HOME</Link>
            </div>
            <div>
                <Link to="/products" className="stroke-yao">PRODUCTS</Link>
            </div>
            <div className="col-span-2  place-self-stretch relative cursor-pointer">
                <Link to="/" ><img className="w-64 absolute left-1/2 -translate-x-1/2 -mt-16 " src={logo} /> </Link>

            </div>
            <div>
                <a href="" className="stroke-yao">ABOUT US</a>
            </div>
            <div>
                <a href="" className="stroke-yao">CONTACT</a>
            </div>
        </div>
    </div >
}

export default Header