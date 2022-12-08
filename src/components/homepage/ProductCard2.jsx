import { Rating } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard2 = ({ item }) => {
  const navigate = useNavigate();
  const navrget = () => {
    navigate(`/d1/${item.url}`);
  };

  return (
    <div>
      <div
        className="group shadow-5xl border-2 border-white bg-white rounded-2xl overflow-hidden hover:shadow-4xl cursor-pointer duration-300 transition-all"
        onClick={navrget}
      >
        <div className="h-[150px] lg:h-[170px] overflow-hidden bg-red-400">
          <img
            src={`https://mcpedls.com/${item.thumbnail}`}
            alt=""
            className=" group-hover:scale-110 duration-300 transition-all w-[100%] h-[100%]"
          />
        </div>
        <div className="p-2">
          <div className="h-auto lg:h-[45px]">
            <h3 className="text-[14px] lg:text-[16px] mb-0 pb-0 font-poppins font-semibold cursor-pointer group-hover:text-brand ">
              {item.title.slice(0,36)}
            </h3>
          </div>
          <span className="text-[#7E7E7E] font-poppins font-normal text-[13px]">
            {item.category.slice(0, 30)}
          </span>
          <div className="text-[#7E7E7E] font-poppins font-normal text-[10px] lg:text-[14px] flex items-center justify-between">
            <span>Version</span>
            <span>{item.version}</span>
          </div>
          <div className="flex items-center justify-start gap-1 text-[15px] lg:text-[17px]  text-[#7E7E7E] ">
            <span>Rating</span>
            <Rating
              name="read-only"
              size="10px"
              value={4}
              readOnly
              style={{ color: "#FF602E", fontSize: "19px" }}
             
            />
             <h3 className=" text-brand">{item.rating}</h3>
          </div>
          <div className="flex items-center justify-end mt-2">
            <button className=" bg-brand py-2 rounded-md px-6 text-[14px] text-white font-poppins font-semibold hover:bg-green-700 duration-300 transition-all">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
