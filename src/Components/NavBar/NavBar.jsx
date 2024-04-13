// import React from 'react'

import { Link } from "react-router-dom";

 import {useState} from 'react'
function NavBar() {
//  const [cources,setcources] = useState("Maths");
    const [position,setPosition] = useState(false);
  const changePosition=()=>{
     if(window.scrollY>=90){
       setPosition(true)     
    }else{
      setPosition(false);
     }
  }
  window.addEventListener('scroll',changePosition)

  return (
    <div>
      <nav className= {position?"flex justify-between bg-white shadow-2xl fixed z-50 w-full ":"flex justify-between  bg-white shadow-2xl "}>
        <div className="flex py-5 pl-9 gap-x-10 cursor-pointer">
          <Link to="/">
            <div id="Logo">
              <img
                src="https://www.worldotutor.com/assets/images/logo.png"
                alt=""
              />{" "}
            </div>
          </Link>
              
    
          </div>
        
        <div id="butons" className="md:mx-14 py-5 px-[2vmax] md:space-x-4  ">
      
          <Link to='https://www.worldotutor.com/booktrial'>
          <button className="border-2 bg-orange-400 text-white  px-[2vmax] py-3 font-bold animate-pulse  border-yellow-700 rounded-xl hover:bg-blue-700 hover:text-white">
          Book Now
          </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
