import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import {BrowserRouter ,  Route, Routes} from "react-router-dom"
import Footer from './components/navber/Footer'
import Navber from './components/navber/Navber'
import Category from './page/Category'
import DownLoad from './page/DownLoad'
import Game from './page/Game'
import GameDetails from './page/GameDetails'
import Home from './page/Home'

const App = () => {
  // const [data,setData] = useState([])
  // const [mods,setMods] = useState()
  // const [mcpe,setMcpe] = useState()
  // const [Texture,setTexture] = useState()
  // const [map,setMap] = useState()

  // useEffect(() => {
  //   const faceData = ()=>{
  //     try {
  //       axios
  //       .get(`https://mcpedls.com/home`)
  //       .then((res) => {
  //         setData(res.data)
  //       });
        
  //     } catch (error) {
  //       console.log(error)
       
  //     }
 
  //   }
  //   faceData()
  // }, []);

 
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/d1/:url" element={<GameDetails />}/> */}
        {/* <Route path="/game" element={<Game data={data}/>}/> */}
      </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
