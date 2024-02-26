import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decreaseQuantity, removeItem } from "../../utils/cartSlice";
import Navbar from "../Layout/Navbar";
import Total from "./Total"
import Layout from "../Layout/Layout";


const CartPage = () => {
  const cartItems = useSelector((store) => store.ttb.items);
  const dispatch = useDispatch();
  function handleAdd(items) {
    dispatch(addItem(items));
  }
  function handleRemove(items) {
    dispatch(removeItem(items));
  }
  function decreaseQty(items) {
    dispatch(decreaseQuantity(items));
  }
  return (
    <Layout>
    <div className="  w-full h-full font-serif flex items-center justify-center">
{/* <Navbar/> */}
      <div
        className=" mt-20 py-3 flex flex-col  gap-5"
                      >
        {cartItems.map((cart) => (
          <div key={cart.id} className="border-2 rounded-lg flex  items-center ">
            <div className="flex w-[150vh]  gap-5 items-center ">
              <div
                className="border-2  flex w-[30vh] h-[30vh] items-center justify-center"
              >
                <img src={cart.image} className="w-[20vh]  h-[25vh] p-1" />
              </div>
              <div className="text-center flex flex-col items-center  gap-3  ">
                <div className="relative bottom-3 flex flex-col justify-start gap-3">
                  <p className=" text-xs font-bold  text-gray-800">
                    {cart.title}
                  </p>
                  <p className="font-semibold text-xs pt-1">
                    Price :
                    <span className="font-bold  text-lg  ">
                      {"$ " + cart.price}
                    </span>
                  </p>
                </div>
                <div className="flex justify-center  gap-2  ">
                  <GrFormSubtract
                    onClick={() => decreaseQty(cart)}
                    className="cursor-pointer border rounded-full h-7 w-7 bg-gray-300 p-1  shadow-lg "
                    />
                  <input
                    type="text"
                    value={cart.quantity}
                    className="w-12 text-center  border-2 rounded-lg "
                    />
                  <GrFormAdd
                    onClick={() => handleAdd(cart)}
                    className="cursor-pointer border  h-7 w-7 p-1 rounded-full  bg-gray-300 shadow-lg"
                  />
                </div>
              </div>
            </div>
            <AiOutlineClose
              onClick={() => handleRemove(cart)}
              className=" relative bottom-20 left-3   cursor-pointer border  h-7 w-7 p-1 rounded-full  bg-gray-200 shadow-lg"
              />
          </div>
        ))}
      </div>
      <div className="ml-11 border p-5 border-gray-600 h-64 rounded-lg shadow-xl">
        <Total/>
      </div>{" "}
    </div>

             
        </Layout>
  );
};

export default CartPage;