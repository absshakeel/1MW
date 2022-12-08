import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProductCard2 from "../../components/homepage/ProductCard2";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllGame = ({ data, title }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 15;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

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

  return (
    <div className=" pt-32 pb-16">
        {
          currentItems.length ? (
            <>
                  <div className="container">
        <h2 className="text-[30px] my-4 font-poppins font-semibold">
          {title || "Latest Game"} :
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-3 lg:gap-7 mt-5">
          {currentItems.map((item, i) => {
            return <ProductCard2 key={i} item={item} />;
          })}
        </div>
        <div className="mt-10 pt-10">
          <ReactPaginate
            breakLabel="..."
            nextLabel={<FaLongArrowAltRight />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel={<FaLongArrowAltLeft />}
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num1"
            nextLinkClassName="page-num1"
            activeLinkClassName="active-item"
          />
        </div>
      </div>
            </>
          ) : (
            <>

                <div className="h-[68vh] flex items-center justify-center flex-col">
                  <h2 className="text-[50px] font-poppins font-semibold">Game Not Found !</h2>
                  <Link to={'/'} className=" bg-brand py-2 px-10 rounded-full text-white font-poppins font-semibold hover:bg-green-700 duration-300 transition-all">Go Home</Link>
                </div>

            </>
          )
        }
    </div>
  );
};

export default AllGame;
