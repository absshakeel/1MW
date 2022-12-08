import { Rating } from "@mui/material";
import React, { useContext, useRef } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import { ApkContext } from "../../contex/ApkContex";
import { Link } from "react-router-dom";

const DetailsLeft = ({ details, addRating }) => {
  


 

  const reviewsRef = useRef(null);

  const scrollSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const { dispatch } = useContext(ApkContext);

  const SentData = () => {
    dispatch({ type: "APK_NAME", payload: { name: "thejfjfjfjjffff" } });
    console.log("click");
  };

  return (
    <div>
      <h2 className="text-[#18224B] font-poppins font-semibold text-[30px]">
        {details && details[0]?.title}
      </h2>
      <span>Download for Free !</span>
      <div className="flex items-center justify-between flex-col md:flex-row mt-5 gap-3">
        <div className="flex items-center justify-between gap-3 flex-col sm:flex-row flex-[4] w-full">
          <div className="sm:w-[150px] h-[180px] w-full overflow-hidden rounded-md flex-1">
            <img
              src={`https://mcpedls.com/${details && details[0]?.thumbnail}`}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="flex-[2] flex">
            <div className="flex  flex-col">
              <div className="flex items-start gap-2">
                <span className="text-[18px]  text-[#18224b] py-1 font-semibold">
                  Author :
                </span>
                <span className="text-[18px] text-[#18224b] py-1  font-semibold">
                  Jon Deo
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[18px] text-[#18224b] py-1 font-semibold">
                  category:
                </span>
                <span className="text-[18px] text-[#18224b] py-1  font-semibold">
                  {details && details[0]?.category}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[18px] text-[#18224b] py-1 font-semibold">
                  Version :
                </span>
                <span className="text-[18px] text-[#18224b] py-1  font-semibold">
                  {details && details[0]?.version}
                </span>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[18px] text-[#18224b] py-1 font-semibold">
                  System :
                </span>
                <span className="text-[18px] text-[#18224b] py-1  font-semibold">
                  Android
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[180px] w-full shadow-5xl rounded-xl flex items-center justify-center md:flex-col flex-col sm:flex-row  flex-[2] py-5">
          <div className="flex flex-col justify-center items-center">
            <Rating
              name="read-only"
              size="10px"
              value={4}
              onChange={addRating}
              style={{ color: "#FF602E", fontSize: "40px" }}
              className="text-[#FF602E] text-[50px]"
            />
            <span>{details && details[0]?.rating} reviews</span>
          </div>
          <button
            onClick={() => scrollSection(reviewsRef)}
            className="py-3 px-7 rounded-full bg-brand text-white font-poppins font-bold text-[20px] hover:bg-green-700 duration-300 transition-all"
          >
            {" "}
            <AiOutlineCloudDownload className=" font-poppins font-bold mr-2 inline-block" />
            Download
          </button>
        </div>
      </div>
      {/* facebook Link */}
      <div className="mt-5">
        <h3 className="text-[18px] font-semibold font-poppins text-[#000] mb-2">
          Share with others!{" "}
        </h3>
        <div className="flex items-center flex-wrap gap-3">
          <div className="py-2 px-10 bg-[#7085B5] rounded-md text-white font-semibold font-poppins text-[16px]">
            FaceBook
          </div>
          <div className="py-2 px-10 bg-[#5ABAF5] rounded-md text-white font-semibold font-poppins text-[16px]">
            Twitter
          </div>
          <div className="py-2 px-10 bg-[#ED455F] rounded-md text-white font-semibold font-poppins text-[16px]">
            Pinterest
          </div>
          <div className="py-2 px-10 bg-[#5EB9E3] rounded-md text-white font-semibold font-poppins text-[16px]">
            Telegram
          </div>
        </div>
      </div>

      {/* banner img */}

      <div className="flex items-center justify-between my-10 gap-3">
        <div className=" rounded-xl overflow-hidden">
          <img
            src={`https://mcpedls.com/${details && details[0]?.image1}`}
            alt=""
          />
        </div>
        <div className=" rounded-xl overflow-hidden">
          <img
            src={`https://mcpedls.com/${details && details[0]?.image2}`}
            alt=""
          />
        </div>
        <div className=" rounded-xl overflow-hidden">
          <img
            src={`https://mcpedls.com/${details && details[0]?.image3}`}
            alt=""
          />
        </div>
      </div>

      {/* dece */}

      <div>
        <p
          className="text-[16px] font-poppins font-normal text-justify"
          dangerouslySetInnerHTML={{
            __html:
              details && details[0]?.description.replaceAll(". ", ".</br>"),
          }}
        />
      </div>

     

      <div className="w-full h-full bg-opacity-90 pt-5" ref={reviewsRef}>
        <div className="container">
          <div className="bg-[#F5F5F5] flex items-center justify-center flex-col p-10 border px-3 md:px-20 text-center rounded-2xl ">
            <h2 className="text-[20px] md:text-[30px] font-poppins font-bold pb-3">
              Download storyngton Hall: {details && details[0]?.title}
            </h2>
            <div className="flex items-center justify-center flex-col w-full">
              <>
                <div className=" w-full flex items-center justify-center gap-5">
                  <div className="flex items-center my-5 gap-3 flex-col flex-1">
                    <div
                      onClick={() => SentData()}
                      className=" flex items-center w-full flex-col [&>a]:bg-brand [&>a]:w-full  [&>a]:py-1 [&>a]:rounded-full [&>a]:border-2 [&>a]:border-brand [&>a]:text-[18px] [&>a]:text-white [&>a]:hover:bg-transparent [&>a]:hover:text-brand [&>a]:duration-300 [&>a]:transition-all"
                      dangerouslySetInnerHTML={{
                        __html:
                          details &&
                          details[0]?.link1
                            .replace("/getfile", "https://mcpedls.com/getfile")
                      }}
                    ></div>
                    <div
                      className=" flex items-center w-full flex-col [&>a]:bg-brand [&>a]:w-full [&>a]:py-1 [&>a]:rounded-full [&>a]:border-2 [&>a]:border-brand [&>a]:text-[18px] [&>a]:text-white [&>a]:hover:bg-transparent [&>a]:hover:text-brand [&>a]:duration-300 [&>a]:transition-all"
                      dangerouslySetInnerHTML={{
                        __html:
                          details &&
                          details[0]?.link2.replace(
                            "/getfile",
                            "https://mcpedls.com/getfile"
                          ),
                      }}
                    ></div>
                    <div
                      className=" flex items-center w-full flex-col [&>a]:bg-brand [&>a]:w-full [&>a]:py-1 [&>a]:rounded-full [&>a]:border-2 [&>a]:border-brand [&>a]:text-[18px] [&>a]:text-white [&>a]:hover:bg-transparent [&>a]:hover:text-brand [&>a]:duration-300 [&>a]:transition-all"
                      dangerouslySetInnerHTML={{
                        __html:
                          details &&
                          details[0]?.link3.replace(
                            "/getfile",
                            "https://mcpedls.com/getfile"
                          ),
                      }}
                    ></div>
                    <div
                      className=" flex items-center w-full flex-col [&>a]:bg-brand [&>a]:w-full [&>a]:py-1 [&>a]:rounded-full [&>a]:border-2 [&>a]:border-brand [&>a]:text-[18px] [&>a]:text-white [&>a]:hover:bg-transparent [&>a]:hover:text-brand [&>a]:duration-300 [&>a]:transition-all"
                      dangerouslySetInnerHTML={{
                        __html:
                          details &&
                          details[0]?.link4.replace(
                            "/getfile",
                            "https://mcpedls.com/getfile"
                          ),
                      }}
                    ></div>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsLeft;
