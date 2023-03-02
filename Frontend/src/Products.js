
import React, { useState, useEffect } from 'react';
import Router from './Router'
function Products() {
    return <div className="mx-24">
        <div className="mt-16 text-gold text-3xl font-bold ">
            Products
        </div>
        <div className="mt-4">
            <div className="bg-blue text-white  font-bold text-xl">
                NEW VARIETIES
            </div>
            <div className="mt-2">
                <div className="grid grid-cols-1">
                    <div className="border-1 border-blue py-2 px-4">





                        <img src="http://placehold.it" className="w-48 h-28 object-cover" />
                        <div className="font-md">
                            Delicious
                        </div>
                        <button className=""></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Products;