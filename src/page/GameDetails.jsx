import React, { useEffect } from "react";
import DetailsLeft from "../components/Detailspage/DetailsLeft";
import data from "../assets/image/data/home.json";
import DetailsRight from "../components/Detailspage/DetailsRight";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const GameDetails = () => {
  const [details, setDetails] = useState([]);
  const [datas,setDatas] = useState([])

  const params = useParams();

  useEffect(() => {
    window.scroll(
      {
        top: 0,
        left: 0,
        behavior: "smooth",
      },
      []
    );
  });

  useEffect(() => {
    const faceData = (params) => {
      try {
        axios.get(`https://mcpedls.com/d1/${params.url}`).then((res) => {
          setDetails(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    faceData(params);
  }, [params]);

  useEffect(() => {
    const faceData = () => {
      try {
        axios.get(`https://mcpedls.com/c1/${details[0]?.category}`).then((res) => {
          setDatas(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    faceData(params);
  }, [details]);

  function addRating(_e, newVal) {
    console.log("newval", newVal);
    axios.patch(`https://mcpedls.com/d1/${params.url}`,{rating:newVal}).then((res)=>{
      console.log(res)
    })
  }
console.log(datas)


  return (
    <div className="py-8 bg-[#eef3f9] pt-28">
      <div className="container">
        <div className="flex items-start justify-between gap-6 flex-col lg:flex-row">
          <div className="flex-[7] w-full  bg-white shadow-2xl rounded-xl py-4 p-3 sm:px-10">
            <DetailsLeft details={details} addRating={addRating}/>
          </div>
          <div className="flex-[2]">
            <h2 className="text-[21px] font-bold font-poppins mb-4">
              Other Related <span className=" text-brand">Games</span>
            </h2>
            <div className=" flex flex-col gap-5">
              {datas.length &&
                datas.slice(0, 20).map((item, i) => {
                  return <DetailsRight key={i} item={item} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
