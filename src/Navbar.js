
import "./Navbar.css";
import log from "../src/assets/logo.png";
import { useNavigate } from "react-router-dom";


import Product from './Product'
import Blog from './Blog'
function Navbar(){

    const nevigate=useNavigate();

    return(<>
    
    <div className="">
<div className="bg-black/90 ">
    
    <div className=" h-[6rem] flex items-center justify-between px-4 mx-auto">
        <div className="">
    <div className=" flex w-[5rem] h-[5rem] bg-white rounded-full">
        <img src={log} alt="hyfdhf"  className="object-cover p-1"></img>
        <div className=" pl-4 text-white font-bold">
        <p className="pt-2 text-[20px]">VC App</p>
    </div>
    </div>
   
    </div>
    
    <div className=" flex flex-items-center justify-content-center">
        <ul className=" nav text-white font-bold flex flex-items-center gap-[1.5rem] ">
        
            <li className="">
            <a href="/"onClick={(e)=>{
                            e.preventDefault();
                   nevigate("/");}} >Home</a></li>
              <li>  <a href="/about"onClick={(e)=>{
                            e.preventDefault();
                   nevigate("/about");

              }}>About Us</a></li>
            <li><a href="/Product" onClick={(e)=>{
                            e.preventDefault();
                   nevigate("/");}}>Product</a></li>
            <li><a href="/Blog"onClick={(e)=>{
                            e.preventDefault();
                   nevigate("/");}}>Blogs</a></li>
    
        </ul>
    </div>
    </div></div></div>
    </>);
}


export default Navbar;