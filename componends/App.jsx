import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Navbar from './Project1 Ecom/componends/Navbar'
import Home from './Project1 Ecom/componends/Home'
import Cart from './Project1 Ecom/componends/Cart'
import About from './Project1 Ecom/componends/About'
import Data from './Project1 Ecom/data'

import { useState } from 'react'

const App = () => {
  const[data,setData]=useState(Data)
  const[search,setSearch]=useState("")
  const[cart,setCart]=useState([])

  function handleClick(item){
    setCart([...cart,item])
  }

  return (
    <BrowserRouter>
      <Navbar cart={cart.length} setData={setData} setSearch={setSearch}/>
      <Routes>
        <Route path='/' element={<Home search={search} handleClick={handleClick} data={data}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route path='/about/:id' element={<About handleClick={handleClick} Data={data}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App