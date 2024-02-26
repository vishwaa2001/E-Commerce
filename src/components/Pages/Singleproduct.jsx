import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Shimmer1 from './Shimmer1'
import useProduct from '../../utils/useProduct'
import Layout from '../Layout/Layout'
import { useDispatch } from 'react-redux'
import { addItem } from '../../utils/cartSlice'

function Singleproduct() {
  const dispatch = useDispatch();
  function HandleAdd(items){
    dispatch(addItem(items));
  }

  const { id } = useParams()
  const Select = useProduct(id)
  return Select.length == 0?<Shimmer1/>:(
    <Layout>

    <div className=' flex justify-center'>
      <div className='mt-56 ml-10'>
        <img className='h-72  w-64 ' src={Select.image} alt="" />
      </div>
      <div className='mt-56 ml-28 border-none w-[600px] h-[50vh] flex flex-col gap-3'>
        <p className='text-3xl font-bold uppercase'>{Select.title}</p>
        <p className='text-lg font-bold text-gray-400'>{Select.category}</p>
        <p className='font-normal '>{Select.description}</p>
        <p className='font-bold text-2xl'>{"$" + Select.price}</p>
        <div className='flex  gap-11 font-bold text-white'> 
<Link to={"/"}>

      <button className='border w-40 h-11 bg-black '>Home</button>
</Link>
      <button className='border w-40 h-11 bg-black ' onClick={HandleAdd(Select)}>Add To Cart</button>
        </div>

      </div>
    </div>
    </Layout>
  )
}

export default Singleproduct