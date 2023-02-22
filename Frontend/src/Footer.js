import React from "react";

function Footer() {
    return <div className="px-32 py-24">
        <div className="grid grid-cols-4">
            <div className="px-5">
                <div className="font-bold mb-3 text-second">LOCATION</div>
                <div className="mb-2 text-white">Danila kisa 14,Novi Sad</div>

                <div className="font-bold mb-3 text-second">HOURS</div>
                <div className="mb-2 text-white">
                    <div>WEEKDAYS 7 A.M - 7 P.M</div>
                    <div>WEEKENDS 8 A.M - 3 P.M</div>
                    <div>CALL FOR HOLLIDAYS HOURS</div>
                </div>
            </div>

            <div   className="px-5">
                <div className="font-bold mb-3 text-second">CUSTOMER SERVICE</div>
                <div className="mb-2 text-white">
                    submit any complainment and we will keep you 100% satisfied.
                </div>
                <div className="font-bold mb-3 text-second">PHONE</div>
                <div className="mb-2 text-white">+381 621109888</div>
                <div className="font-bold mb-3 text-second">EMAIL</div>
                <div  className="mb-2 text-white">yummycake@gmail.com</div>
            </div>
            <div  className="px-5">
                <div className="font-bold mb-3 text-second">GET SOCIAL</div>
                <div className="">
                    <a href=""></a>
                    <img src=""></img>
                </div>
                <div className="">
                    <a href=""></a>
                    <img src=""></img>
                </div>
            </div> 
            <form  className="px-5 -ml-12">
                <div className="font-bold mb-3 text-second">SIGN UP FOR NEWS LETTER</div>
                <input type="email" name="email"  className="outline-none border-2 bg-transparent" />
                <input type="submit" value=""/>

            </form>
        </div>
        <div className="text-white font-xs mt-10">
            @copyright 2023 . ALL RIGHT RESERVED BY YUMMY CAKE
        </div>

    </div>
}

export default Footer