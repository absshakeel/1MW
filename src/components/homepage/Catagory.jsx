import { Rating } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const Catagory = ({data}) => {

    const navigate = useNavigate();
    const navrget = (item) => {
      navigate(`/d1/${item.url}`);
    };

  return (
    <div className='py-5'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-between gap-5  md:flex'>
                {
                    data?.slice(9,13).map((item,i)=>{
                        return(
                            <div key={i} onClick={()=>navrget(item)} className='group relative bg-black bg-opacity-90 w-full h-[170px] rounded-md overflow-hidden cursor-pointer'>
                            <img src={`https://mcpedls.com/${item.thumbnail}`} alt=""  className=' h-[200px] w-full opacity-50 group-hover:scale-110 duration-300 transition-all'/>
                            <div className=' absolute top-4 left-3'>
                            <h2 className=' text-white font-poppins font-semibold text-base'>{item.title}</h2>
                            <Rating name="read-only" value={5} readOnly style={{color:"#fff"}}/>
                            <h3 className=' text-white font-poppins font-semibold text-base'>{item.version}</h3>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Catagory