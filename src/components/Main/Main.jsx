import React, { useState } from "react";
import ImgCard from "./ImgCard";
import Loading from "../UI/Loading";
import { useContext, useEffect,useCallback } from "react";
import { CartContext } from "../Context/CartContext";
import axios from "axios";

const Main = () => {

	const [storeItems, setStoreItems] = useState([]);


	useEffect(() => {
		const getfromDB = async () => {
			try {
				let fetchedStoreItems = await axios.get('https://ecommerceapi-production-ba45.up.railway.app/store/getProduct');
				console.log('get all products in store being called');
				setStoreItems(fetchedStoreItems.data);
			} catch (error) {
				console.log(error);
			}
		}
		getfromDB();
	}, [])


	if (storeItems === 0) { return <Loading /> }



	return (
		<div className="   grid  gap-7 justify-items-center    pt-10   md:grid-cols-3 px-2 max-w-[1300px] mx-auto">
			{storeItems.map((item) => {
				return (
					<ImgCard
						key={item._id}
						id={item._id}
						img_id={item.img_id}
						anime={item.anime}
						description={item.description}
						price={item.price}
					/>
				);
			})}
		</div>
	);

};

export default Main;


