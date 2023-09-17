
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import ModalPopup from "../NPM Packages/ModalPopup";
import React, { useState, useContext } from "react";
import Navigation from "../Navigation/Navigation";
import Header from '../Header/Header';
import { CartContext } from "../Context/CartContext";
const Store = () => {
	const [isCart, setIsCart] = useState(false);

	const { state } = useContext(CartContext)

	return (
		<React.Fragment>

			<Navigation />
			<Header />
			{state.isCart && (
				<ModalPopup />
			)}
			<Navbar />
			<Main />
			<Footer />
		</React.Fragment>

	);
};


export default Store;
