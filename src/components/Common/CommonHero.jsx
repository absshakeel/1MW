import React, { useContext } from 'react'
import { SearchContext } from '../../contex/SearchContex';

const CommonHero = ({title,dec,act}) => {

  const {dark} = useContext(SearchContext);


  return (
    <div className='common_section shadow-3xl '>
        <div className={`h-[200px] md:h-[380px] ${dark ? "text-white" :" bg-white opacity-50 text-brand"} `}>
          <div className='flex items-center justify-center flex-col h-full'>
            <h2 className='text-[31px] md:text-[81px] font-poppins font-medium'>{title}</h2>
            <p className='text-[16px] md:text-[25px] font-poppins font-normal text-[#636363]'>{dec} <span className=''>{act}</span></p>
          </div>
        </div>
    </div>
  )
}

export default CommonHero