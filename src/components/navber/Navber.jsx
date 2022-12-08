import React, { useContext,useState } from "react";
import logo from "../../assets/image/logo 1 (1).png";
import { FaSearch } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../../contex/SearchContex";
import {MdArrowDropDown} from "react-icons/md"


const Navber = ({ mods, mcpe, Texture, map }) => {
  const [nav, setNav] = useState(false);
  const [serch, setSerch] = useState(false);
  const [inout, setInput] = useState("");
  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();
  const namuHandeler = () => {
    setNav(false);
    setSerch(!serch);
  };

  const serchHandeler = () => {
    setNav(!nav);
    setSerch(false);
  };

  const heandeler = (e) => {
    e.preventDefault();
    if(inout===""){
      alert("Please put your keyword")
    }else{
      dispatch({ type: "NEW_SEARCH", payload: { city: inout } });
      navigate("/game");
    }
  };

  return (
    <div className="bg-white shadow-3xl fixed w-full z-50">
      <div className="container">
        <div className="h-[90px]">
          <div className="flex items-center justify-between h-full gap-10">
            <div className="flex-1">
              <Link to={"/"}>
                <img src={logo} alt="" className="w-[205px] h-[47px]" />
              </Link>
            </div>
            <ul
              className={`flex-[2] lg:static lg:bg-transparent lg:h-auto lg:flex-row flex items-center lg:justify-center gap-6 text-[18px] font-poppins font-normal fixed top-[90px] duration-300 transition-all  w-full h-[500px] z-30  bg-gray-400 flex-col justify-start pt-10 lg:pt-0 ${
                nav ? "left-0" : "left-[-100%]"
              }`}
            >
             
              <Link>
                {" "}
                <li className=" relative group">
                  <span className="flex items-center">Mods <MdArrowDropDown className=" inline-block text-[20px] mt-1"/></span>
                  <ul className=" h-[400px] shadow-4xl hidden  gap-2 bg-white overflow-y-scroll absolute top-7 left-[-120px] z-50 md:left-0 w-[300px] group-hover:flex  flex-col">
                    {mods?.map((item, i) => {
                      return (
                        <Link to={`/c1/${item.category}`} key={i}>
                          <li onClick={()=>setNav(!nav)} className="hover:bg-gray-200 px-3 py-2 text-sm">
                            {item.category}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </li>
              </Link>
              <Link>
                {" "}
                <li className=" relative group">
                  <span className="flex items-center">Mcpe <MdArrowDropDown className=" inline-block text-[20px] mt-1"/></span>
                  <ul className=" h-[300px] md:h-[400px] shadow-4xl hidden  gap-2 bg-white overflow-y-scroll absolute top-7 left-[-90px] z-50 md:left-0 w-[260px] group-hover:flex  flex-col">
                    {mcpe?.map((item, i) => {
                      return (
                        <Link to={`/c1/${item.category}`} key={i}>
                          <li onClick={()=>setNav(!nav)} className="hover:bg-gray-200 px-3 py-2 text-sm">
                            {item.category}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </li>
              </Link>
              <Link>
                {" "}
                <li className=" relative group">
                   <span className="flex items-center">Texture <MdArrowDropDown className=" inline-block text-[20px] mt-1"/></span>
                  <ul className=" h-[280px] md:h-[400px] shadow-4xl hidden  gap-2 bg-white overflow-y-scroll absolute top-7 left-[-80px] z-50 md:left-0 w-[250px] md:w-[340px] group-hover:flex  flex-col">
                    {Texture?.map((item, i) => {
                      return (
                        <Link to={`/c1/${item.category}`} key={i}>
                          <li onClick={()=>setNav(!nav)} className="hover:bg-gray-200 px-3 py-2 text-sm">
                            {item.category}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </li>
              </Link>
              <Link>
                {" "}
                <li className=" relative group">
                  <span className="flex items-center">Map  <MdArrowDropDown className=" inline-block text-[20px] mt-1"/></span>
                  <ul className=" h-[300px] md:h-[400px] shadow-4xl hidden  gap-2 bg-white  overflow-y-scroll absolute top-7 left-[-120px] z-50 md:left-0 w-[300px] group-hover:flex  flex-col">
                    {map?.map((item, i) => {
                      return (
                        <Link to={`/c1/${item.category}`} key={i}>
                          <li onClick={()=>setNav(!nav)} className="hover:bg-gray-200 px-3 py-2 text-sm">
                            {item.category}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </li>
              </Link>
            </ul>
            <div
              className={`flex-[2] fixed lg:static lg:bg-transparent lg:w-[450px] lg:p-0 top-[90px] bg-slate-400 w-full py-5  duration-300 transition-all  ${
                serch ? "right-0" : "right-[-100%]"
              }`}
            >
              <form
                onSubmit={heandeler}
                className=" bg-brand-box h-[45px]  pl-4 rounded-md flex items-center justify-between w-full"
              >
                <input
                  type="text"
                  placeholder="Type Something..."
                  className=" bg-transparent text-[18px] border-none outline-none w-full"
                  value={inout}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button
                  type="submit"
                  className="h-full py-2 px-6 bg-brand text-white font-poppins font-medium rounded-r-md"
                >
                  Search
                </button>
              </form>
            </div>

            <div className="flex items-center gap-5">
              <FaSearch
                className="text-[30px] cursor-pointer lg:hidden flex"
                onClick={namuHandeler}
              />
              <BiMenu
                className="text-[30px] cursor-pointer lg:hidden flex"
                onClick={serchHandeler}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
