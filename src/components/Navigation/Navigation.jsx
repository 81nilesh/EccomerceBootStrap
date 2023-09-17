import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import axios from 'axios';
import '../../index.css'
import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from '../Context/CartContext';
import ModalPopup from '../NPM Packages/ModalPopup';
const Navigation = () => {
    const { state, Dispatch } = useContext(CartContext);

    const CartClickHandler = (e) => {
        e.preventDefault();
        Dispatch({ type: "TOGGLE_CART" });

    };

    return (<div className="z-20 bg-black text-white flex  py-4 fixed top-0 w-full sm:justify-center  ">
        <div className=" md:px-6  mx-6 md:text-3xl">
            <NavLink to="/ContactUs">CONTACT US</NavLink>
        </div>
        <div className="md:px-6 mx-6 md:text-3xl ">
            <NavLink to="/Store">STORE</NavLink>
        </div>
        <div className="md:px-6 mx-6 md:text-3xl">

            <NavLink to="/About">ABOUT</NavLink>
        </div>

        <div className="fixed right-4 px-2 top-0  ">
            <button onClick={CartClickHandler}>
                <CiShoppingCart className="text-6xl " />
            </button>
        </div>
        <div
            className="fixed right-11 cursor-pointer animate-bounce "
            onClick={CartClickHandler}>
            <span>{state.TotalCartItems}</span>
        </div>
        {state.isCart && (
            <ModalPopup />
        )}
    </div>

    )


}

export default Navigation