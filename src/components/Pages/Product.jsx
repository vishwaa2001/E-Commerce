import React, { useEffect, useState } from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { useDispatch } from 'react-redux';
import { addItem } from '../../utils/cartSlice';

function Product() {
  const dispatch = useDispatch();
  function HandleAdd(items){
    dispatch(addItem(items));
  }
  const [items, setItems] = useState([]);
  useEffect(() => {
    getData()
  }, []);

  async function getData() {
    const data = await fetch("https://fakestoreapi.com/products")
    const json = await data.json()
    const details = json.map((obj) => ({ ...obj, quantity: 1 }));

    setItems(details);
  }
  return items.length == 0 ? <Shimmer /> : (
    <Layout>
      {console.log(items)}

    <div className='flex flex-wrap gap-14  p-16 mx-16'>
      {items.map((list) => {
        return (

          <div key={list.id} className='border w-80 h-[62vh] border-gray-300  rounded-md shadow-2xl'>
            <div className='border w-50 h-[40vh] border-b-gray-300 rounded-lg flex justify-evenly '>
              <Link to={"/product/"+list.id}>
              
              <img src={list.image} alt="" className='w-[140px] h-[150px] my-10 hover:h-[200px]
                 hover:w-[200px] hover:ease-out  hover:duration-500  cursor-pointer' />
              </Link>
            </div>

            <p className='font-semibold '>{list.title}</p>
            <h1 className='font-semibold'>{"$" + list.price}</h1>
            <div className='flex justify-center gap-5 '>
              <button className=' w-28 h-10 border border-gray-600 flex justify-center font-medium items-center capitalize  hover:bg-gray-300' onClick={() => HandleAdd(list)}><IoCartOutline />add to cart</button>
              <Link to={"/product/"+list.id}>
              
              <button className=' w-24 h-10 border border-gray-600 flex justify-center font-medium items-center hover:bg-gray-300 ' > < IoEyeSharp />View</button>
              </Link>
            </div>
          </div>
        )
      }
      )}
    </div>
      </Layout>
  )
}





export default Product