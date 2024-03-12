import { Link } from 'react-router-dom'
import './Navbar.css'
import Data from '../data'
const Navbar = ({setData,setSearch,cart}) => {


  function filterResult1(cartItem){
    const newData = Data
    const result = newData.filter((item)=>{return item.category === cartItem})
    setData(result)
  }

  function filterResult2(cartItem){
    const newData = Data
    const result = newData.filter((item)=>{return item.category === cartItem})
    setData(result)
  }

  function filterResult3(cartItem){
    const newData = Data
    const result = newData.filter((item)=>{return item.category === cartItem})
    setData(result)
  }

  function filterResult4(cartItem){
    const newData = Data
    const result = newData.filter((item)=>{return item.category === cartItem})
    setData(result)
  }
  function filterResult5()
  {
    // const newData = Data
    // const result = newData.filter((item)=>{return item.category === cartItem})
    setData(Data)
  }

  return (
    <div className="Navbar">
    <nav className="navbar">
     <Link style={{textDecoration:'none',color:'white'} } to={'/'} div className="navdiv"><h1>SHOP MORE</h1></Link> 
     <div className="navdiv"><input type="search" placeholder="Search Your Product" onChange={(e)=>setSearch(e.target.value)} ></input></div>
     <Link style={{textDecoration:'none',color:'white'}} to={'/cart'} div className="navdiv">Cart
     <sup>{cart}</sup></Link>
     </nav>
     <aside>
     <p><button className='but' onClick={()=>filterResult1(`men's clothing`)}>Men</button>
       <button className='but' onClick={()=>filterResult2(`women's clothing`)}>Women</button>
       <button className='but' onClick={()=>filterResult3(`electronics`)}>electronics</button>
       <button className='but' onClick={()=>filterResult4(`jewelery`)}>Jewellery</button>
       <button  className='but' onClick={()=>filterResult5()}>All</button></p>
     </aside>
    </div>
  )
}

export default Navbar
