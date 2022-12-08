import axios from "axios";
import React, { useEffect, useState } from "react";
import Catagory from "../components/homepage/Catagory";
import Hero from "../components/homepage/Hero";
import HomeProduct from "../components/homepage/HomeProduct";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = '38e0a05020fd4fdf29430a851686d691dca9f957'
    const faceData = () => {
      try {
        axios.get(`https://api.mlsgrid.com/v2/Property`,{ headers: {"Authorization" : `Bearer ${token}`} }).then((res) => {
          setData(res.data.value);
        });
      } catch (error) {
        console.log(error);
      }
    };
    faceData();
  }, []);
  console.log("here will be data");
  console.log(data)
  return (
    <>
      {data.length && (
        <>
         <div className='grid grid-cols-2 sm:grid-cols-6 md:grid-cols-4 xl:grid-cols-4 gap-10 md:gap-10 lg:gap-10 mt-5'>
          {
            data.slice(0,100).map((item,i)=>{
                    return(
                       <div
                        className="group shadow-5xl border-2 border-white bg-white rounded-2xl overflow-hidden hover:shadow-4xl cursor-pointer duration-300 transition-all"
                        
                      >
                        <div className="h-[150px] lg:h-[170px] overflow-hidden bg-[tomato]">
                          {/* <img
                            src={`https://mcpedls.com/${item.thumbnail}`}
                            alt=""
                            className=" group-hover:scale-110 duration-300 transition-all w-[100%] h-[100%]"
                          /> */}
                        </div>
                        <div className="p-2">
                          <div className="h-auto lg:h-[45px]">
                            <h3 className="text-[14px] lg:text-[24px] mb-0 pb-0 font-poppins font-semibold cursor-pointer group-hover:text-brand ">
                              $ {item.ListPrice}
                            </h3>
                          </div>
                          <span className="text-[#130b0b] font-poppins font-normal text-[16px]">
                            <span >City : </span>
                            <span className="text-[18px] font-semibold"> {item.City}</span>
                          </span>
                          <div className="text-[#130b0b]  font-poppins font-normal text-[18px] lg:text-[14px] flex items-center">
                            <span >BedroomsTotal : </span>
                            <span className="text-[18px]"> {item.BedroomsTotal}</span>
                          </div>
                          <div className="text-[#130b0b]  font-poppins font-normal text-[18px] lg:text-[14px] flex items-center">
                            <span >PropertyType : </span>
                            <span className="text-[18px]"> {item.PropertyType}</span>
                          </div>
                          <div className="text-[#130b0b]  font-poppins font-normal text-[18px] lg:text-[14px] flex items-center">
                             <span className="text-[15px]"> {item.Directions}</span>
                          </div>
                          
                          
                          <div className="flex items-center justify-end mt-2">
                            <button className=" bg-brand py-2 rounded-md px-6 text-[14px] text-white font-poppins font-semibold hover:bg-green-700 duration-300 transition-all">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                     )
                })
            }
          {/* <Hero data={data} />
          <Catagory data={data} />
          <HomeProduct data={data}/> */}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
