import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import Footer from '../Footer/Footer';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Loading from '../UI/Loading';
import axios from 'axios';
import Navigation from '../Navigation/Navigation';


const SingleProduct = (props) => {
  const { Dispatch } = useContext(CartContext);


  const AddCart2DB = async (obj) => {
    try {
      let token = JSON.parse(localStorage.getItem('token'));
      await axios.post('https://ecommerceapi-production-ba45.up.railway.app/cart/addToCart', obj, { headers: { "Authorization": token } });
      console.log('add product to cart being called')
    } catch (error) {
      console.log(error);
    }
  }

  const ADD2CartHandler = (e) => {
    e.preventDefault();
    let obj = {
      img_id: Product.img_id,
      anime: Product.anime,
      price: Product.price,
      quantity: quant,
      ProductId: Product._id
    }

    AddCart2DB(obj);
    Dispatch({ type: "INC_CART_COUNT", quant: quant });
    Dispatch({
      type: "ADD_2_CART",
      obj: obj,
    });

  };







  const id = useParams().product_id
  const [Product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const GetFromDB = async () => {
      try {

        const response = await axios.get(`https://ecommerceapi-production-ba45.up.railway.app/store/getSingleProduct/${id}`);
        console.log('get single product being called')
        setProduct(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    GetFromDB()
  }, [id])

  const [quant, setQuant] = useState(1);
  const quantIncHandler = () => {
    setQuant((prevState) => prevState + 1);
  }
  const quantDeccHandler = (e) => {
    if (quant > 1)
      setQuant((prevState) => prevState - 1);
  }

  if (isLoading) return <Loading />

  return (
    <div>
      <Navigation />

      <div className='mt-[55px]  w-full  flex flex-col items-center lg:flex-row lg:justify-evenly p-6  '>
        <div className="min-h-[100px] min-w-[0px]  ">
          <img
            src={Product.img_id}
            alt=""
            className="w-full h-full object-cover  "
          />
        </div>
        <div className='flex flex-col p-6 max-w-[700px] '>
          <span className='text-gray-600 p-2'>Epic Stuff</span>
          <p className='text-3xl tracking-wider p-2 '>ANIME-{Product.anime}-{Product.description} </p>
          <div className='flex p-2 '>
            <span className='bg-red-700 text-white px-2'>SALE</span>
            <span className='px-2 text-gray-600'>Rs. {Product.price}</span>
            <span className="line-through text-gray-600 px-2 ">274</span>
          </div>
          <p className=' p-2 text-gray-600'>Tax included. <span className='text-red-700'>Shipping</span> calculated at checkout</p>
          <div className='flex flex-row justify-center p-1'>
            <div className='p-2 flex-1' >
              <p className='p-1 text-gray-700'>SIZE</p>
              <select className='p-1' >
                <option  >A4 With Frame</option>
              </select>
            </div>
            <div className='p-2 flex-1'>
              <p className='p-1 text-gray-700'>QUANTITY</p>
              <div className='flex flex-row bg-gray-200 rounded-sm'>
                <button onClick={quantDeccHandler} className='border-r-2 border-gray-300  px-1 flex-1'>-</button>
                <span className='px-1 flex-1 text-center'>{quant}</span>
                <button className="px-1 flex-1 border-l-2 border-gray-300" onClick={quantIncHandler}>+</button>
              </div>
            </div>
          </div>

          <button className='border-2 rounded-md border-green-800 p-2 text-green-900' onClick={ADD2CartHandler}>ADD TO CART</button>
          <button className='mt-2 p-2 text-white rounded-md bg-green-800'>BUY IT NOW</button>

          <div className='p-2 font-bold text-gray-500 py-5 leading-loose'>
            <ul className='list-disc'>
              <li>Single Design Poster Comes Unframed/Framed.</li>
              <li>High-Quality Prints Using Non-Toxic Acrylic Ink imported on 300 GSM Paper.</li>
              <li>1 Inch Thick - Mdf Moulding Handmade Frame, Shatter-Proof Styrene Facing, And Metal Hangers.</li>
              <li>Perfect for Wall Décor and to gift your friends and siblings.</li>
              <li>Great accessory to your home and to decorate your Offices around.</li>
            </ul>
          </div>

          <div className='p-2 bg-green-800 text-white rounded-md'>
            <p >
              Let's Make 2023 A Little Better | Time To Spread Happiness! | 10% Off On All Orders Except Collectibles - Use Code: BETTER2023
            </p>
          </div>


        </div>
      </div>
      <Footer />
    </div>

  )

}

export default SingleProduct;