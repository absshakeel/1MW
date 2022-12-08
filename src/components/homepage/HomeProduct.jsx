import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import ProductCard2 from './ProductCard2'

const HomeProduct = ({data}) => {
  return (
    <div className='bg-[#EEF3F9] py-[50px] '>
        <div className="container">
            <div>
                <h2 className='text-[30px] font-poppins font-semibold'>Your Gaming Library</h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-7 gap-1 md:gap-3 lg:gap-7 mt-5'>
                    {
                        data.slice(0,14).map((item,i)=>{
                            return(
                                <ProductCard key={i} item={item}/>
                            )
                        })
                    }
                </div>
                <div className='flex items-center justify-center pt-10'>
                    <Link to="/game"><button className=' bg-brand py-2 hover:bg-green-700 duration-300 transition-all px-10 text-white font-poppins font-semibold rounded-md'>View all</button></Link>
                </div>
            </div>
            <div className='mt-10'>
                <span>Latest apps</span>
                <h2 className='text-[30px] font-poppins font-semibold'>NEW APPS AND UPDATES</h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-3 lg:gap-7 mt-5'>
                    {
                        data.slice(10,data.length).map((item,i)=>{
                            return(
                                <ProductCard2 key={i} item={item}/>
                            )
                        })
                    }
                </div>
                <div className='flex items-center justify-center pt-10'>
                    <Link to={"/game"}><button className=' bg-brand hover:bg-green-700 duration-300 transition-all py-2 px-10 text-white font-poppins font-semibold rounded-md'>View Your Library</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeProduct