/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
// import Clock from '../../Pages/Clock/Clock'
import { SocialIcon } from 'react-social-icons'
function Footer() {
  const twitter= <SocialIcon url="https://twitter.com" />;
  const insta =  <SocialIcon url="https://instagram.com" />;
  const fb=<SocialIcon url="https://facebook.com" />;

  return (
    <div className="bg-black md:flex md:justify-center md:items-center flex-col text-white w-full py-0">
      <div className=" flex flex-col lg:flex-row md:items-start items-center text-white lg:items-center justify-evenly w-full px-5">
     <div className="text-center flex justify-center items-start flex-col pt-[5vw] md:gap-6 mb-4">
       <p className=' text-4xl font-bold mb-1 md:text-[1.8vmax]'><img src="https://www.worldotutor.com/assets/images/logo.png" alt="" /></p>
       <button className='text-center cursor-pointer font-semibold text-xl rounded-[10em] border-none md:p-4 py-3 px-9 text-white bg-red-600 hover:opacity-50 md:text-[1.2vmax] '>LET`S WORK TOGETHER</button>
     </div>
     <div className=" ">
     <h1 className='text-xl md:text-[1.3vmax] font-semibold md:my-4'>Contact Infomation</h1>
    <p className="text-sm md:text-[1vmax] font-semibold md:my-2"> WorldoTurtor@worldo.com</p>
    <p className="text-sm md:text-[1vmax] font-semibold md:my-2"> US: +1 650 753 8157</p>
    <p className="text-sm  md:text-[1vmax] font-semibold md:my-2"> US: +1 650 753 8157</p>
     </div>
     <div className="">
        <h2 className='text-xl font-semibold leading-8 md:text-[1.3vmax]'>Sitemap</h2>
        <div className='flex'>
        <a href="#" className="md:text-[1vmax] hover:text-slate-600 no-underline text-white text-sm border-none p-1">HOME</a>
        <a href="#" className="md:text-[1vmax] hover:text-slate-600 no-underline text-white text-sm border-none p-1">HOME</a>
        </div>
       
        <div className='flex'>
        <a href="#" className="md:text-[1vmax] hover:text-slate-600 no-underline text-white text-sm border-none p-1">HOME</a>
        <a href="#" className="md:text-[1vmax] hover:text-slate-600 no-underline text-white text-sm border-none p-1">HOME</a>
        </div>
        
        <div className='flex'>
        <a href="#" className="md:text-[1vmax] hover:text-slate-600 no-underline text-white text-sm border-none p-1">HOME</a>
        <a href="#" className="md:text-[1vmax] hover:text-slate-600 no-underline text-white text-sm border-none p-1">HOME</a>
        </div>
       

     </div>
     <div className=" flex text-center justify-center items-start flex-col">
       <h2 className='text-xl md:text-[1.3vmax] font-semibold md:mb-3'>
       Location
       </h2>
       <p className="text-sm md:text-[1vmax] font-semibold md:mb-1"> SILICON VALLEY</p>
       <p className="text-sm md:text-[1vmax] font-semibold md:mb-1 "> NEW YORK CITY</p>
       <p className="text-sm md:text-[1vmax] font-semibold "> INDIA</p>
     </div>

     </div>





    <div className="flex md:justify-center items-center  p-5 gap-2 ">
    <h1 className='text-3xl  font-semibold leading-10 md:text-[1.4vmax]'>Fallow Me: </h1>
    <div className="flex gap-2">
    <Link to="https://www.instagram.com/" >{insta}</Link>
    <Link to="https://twitter.com/">{twitter}</Link>
    <Link to="https://www.facebook.com/">{fb}</Link>
    </div>
    </div>
    
    </div>
  
   
  )
}

export default Footer
