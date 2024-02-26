import  { useEffect, useState } from 'react'

const useProduct = (id) =>{
    const [select,setSelect]= useState([]);
     useEffect(()=>{
        getSingle();
     },[])

     async function getSingle(){
        const data = await fetch ("https://fakestoreapi.com/products/"+id)
        const json = await data.json()
        json.quantity=1;
        
        setSelect(json) 
     }
  return select
};

export default useProduct;