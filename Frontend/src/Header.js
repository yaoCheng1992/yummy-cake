import React ,{useEffect ,useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from './logo.svg'
import './style.css'
import { Link, Outlet } from "react-router-dom";
import jwt_decode, { JwtPayload } from 'jwt-decode';
import RoleConst from './RoleConst';
import { useLocation } from 'react-router-dom';


function Header() {
    const [homeLabel, setHomeLabel] = useState('HOME');
    const [homeLink, setHomeLink] = useState('/');

    const [productsLabel, setProductsLabel] = useState('PRODUCTS');
    const [productsLink, setProductsLink] = useState('/products');

    const location = useLocation();
    useEffect(()=>{ 
        let token = localStorage.getItem('token');
        console.log(token)
        let auth = token !== undefined && token != null;
        if(auth){
            const decoded = jwt_decode(token);
            const role = decoded.authorities[0];
            if(role===RoleConst.owner){
                setHomeLabel('REGISTER SHOP');
                setHomeLink('/register-shop');

                setProductsLabel('NEW PRODUCTS');
                setProductsLink('/create-new-product')
            } 
        }
    },)

    return <div className="  ">
        <div className=" bg-gold shadow-xl mb-24 h-11 grid grid-cols-10 grid-rows-1">
            <div className="col-span-6 grid grid-cols-3 gap-3">
                <button className="text-right" >MY ACCOUNT</button>
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
                <Link to='/register' className=" pl-6">Register</Link>
            </div>

        </div>

        <div className="bg-blue  font-bold text-shadow-xl grid  place-items-center grid-cols-6  h-24 px-36  before:content-[*] before:absolute before:bg-white before:mt-0.5 before:w-full before:h-0.5">

            <div className="">
                <Link to={homeLink} className="stroke-yao">{homeLabel}</Link>
            </div>
            <div>
                <Link to={productsLink} className="stroke-yao">{productsLabel}</Link>
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