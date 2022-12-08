import { Rating } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const DetailsRight = ({ item }) => {
  const navigate = useNavigate();

  const navrget = () => {
    navigate(`/d1/${item.url}`);
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div
      className="group flex gap-3 py-2 bg-white rounded-md shadow-5xl cursor-pointer hover:shadow-4xl duration-300 transition-all px-3"
      onClick={navrget}
    >
      <div className="h-[80px] w-[100px] overflow-hidden bg-red-400 flex-1 rounded-md">
        <img
          src={`https://mcpedls.com/${item.thumbnail}`}
          alt=""
          className=" group-hover:scale-110 duration-300 transition-all w-[100%] h-[100%]"
        />
      </div>
      <div className="flex-[2]">
        <h3 className="text-[15px] mb-0 pb-0 font-poppins font-semibold cursor-pointer group-hover:text-brand ">
          {item.title?.slice(0, 35)}
        </h3>

        <div className="flex items-center justify-between mt-2">
          <span>Rating</span>
          <Rating
            name="read-only"
            size="10px"
            value={4}
            readOnly
            style={{ color: "#FF602E", fontSize: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsRight;
