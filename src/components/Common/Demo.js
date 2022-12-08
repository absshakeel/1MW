import React from "react";
import "./demo.css";

const Demo = ({ data }) => {
  return (
    <div
      id="slots-container"
      className="flex justify-center gap-4 h-[350px] md:h-[480px] overflow-hidden rounded-[8px] "
    >
      {data.length && (
        <>
          <div className="space-y-4 -mt-[100px] md:-mt-[170px]">
            {data.slice(0, 5).map((item, i) => {
              return (
                <div
                  key={i}
                  className="w-[90px] md:w-[160px] h-[100px] md:h-[160px] bg-gray-500 rounded-[8px] overflow-hidden"
                >
                  <img
                    src={`https://mcpedls.com/${item.thumbnail}`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
          <div className="space-y-4 -mt-[100px] md:-mt-[170px]">
            {data.slice(5, 10).map((item, i) => {
              return (
                <div
                  key={i}
                  className="w-[100px] md:w-[160px] h-[100px] md:h-[160px] bg-gray-500 rounded-[8px] overflow-hidden"
                >
                  <img
                    src={`https://mcpedls.com/${item.thumbnail}`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
          <div className="space-y-4 -mt-[100px] md:-mt-[170px]">
            {data.slice(10, 15).map((item, i) => {
              return (
                <div
                  key={i}
                  className="w-[100px] md:w-[160px] h-[100px] md:h-[160px] bg-gray-500 rounded-[8px] overflow-hidden"
                >
                  <img
                    src={`https://mcpedls.com/${item.thumbnail}`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Demo;
