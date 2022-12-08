import { Rating } from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom"

const ProductCard = ({item}) => {
  const navigate = useNavigate()
  const navrget = ()=>{
    navigate(`/d1/${item.url}`)
  }


  return (
    <div className="group shadow-5xl border-2 border-white bg-white rounded-3xl overflow-hidden hover:shadow-4xl cursor-pointer duration-300 transition-all" onClick={navrget}>
      <div className="h-[150px] overflow-hidden bg-red-400">
        <img  src={`https://mcpedls.com/${item.thumbnail}`} alt="" className=" group-hover:scale-110 duration-300 transition-all w-[100%] h-[100%]"/>
      </div>
      <div className="p-2">
        <div className="">
        <h3 className="text-[15px] mb-0 pb-0 font-poppins font-semibold cursor-pointer group-hover:text-brand ">{item.title.slice(0,14)+"..."}</h3>
        </div>
        <div className="flex items-center justify-center gap-1 text-[17px] text-[#7E7E7E] ">
                <Rating name="read-only" size="10px" value={4} readOnly style={{color:"#FF602E",fontSize:"20px"}}/>
                <h3 className=" text-brand">{item.rating}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
