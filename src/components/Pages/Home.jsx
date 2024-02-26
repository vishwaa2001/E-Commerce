import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Layout>
      <div>
        <img
          className="w-full h-screen  pt-20"
          src="https://searchengineland.com/wp-content/seloads/2015/05/ecommerce-shopping-retail-ss-1920.jpg"
          alt=""
        />
        <Link to={"/product"}>
          <h1 className="absolute top-[487px] ml-[553px] border border-black w-40 h-12 flex items-center justify-center text-balance font-serif font-extrabold cursor-pointer rounded-lg bg-gray-300 ">
            <button>
              S H O P <br /> Here !
            </button>
          </h1>
        </Link>
      </div>
    </Layout>
  );
}

export default Home;
