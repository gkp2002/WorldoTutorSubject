/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
// import Clock from '../../Pages/Clock/Clock'
import { SocialIcon } from 'react-social-icons'
function Footer() {
  const twitter= <SocialIcon url="https://twitter.com" />;
  const insta =  <SocialIcon url="https://www.instagram.com/world_o_tutor/" />;
  const fb=<SocialIcon url="https://www.facebook.com/worldotutors" />;

  return (
    <div className="bg-black md:flex md:justify-center md:items-center flex-col text-white w-full py-0">
     <section className='grid md:grid-cols-4 grid-row-4 md:px-12 w-full '>
       <div className='h-[420px] mx-2  w-full py-12 px-9'>
         <img src="https://www.worldotutor.com/assets/images/logo.png" alt="" className='mb-5'/>
         <p className='text-xl font-normal opacity-50'>India’s largest online platform where thousands of students and teachers across the globe participate in an effective educational exchange.</p>
       </div>
       <div  className='h-[420px] mx-2  w-full flex flex-col md:items-center px-9  '>
       
       <ul className='md:py-12 '>
       <h1 className='text-2xl font-bold pb-2 opacity-100'>Resources</h1>
        <Link className='hover:text-blue-200 opacity-50' to='https://www.worldotutor.com/page/student-parent-policy'>
          <li className='md:text-[1vmax]  font-normal x'>Student & Parent Policy</li>
        </Link>
        <Link className='hover:text-blue-200 opacity-50' to='https://www.worldotutor.com/page/teacher-policy'>
          <li className='md:text-[1vmax]  font-normal'>Teacher Policy</li>
        </Link>
        <Link className='hover:text-blue-200 opacity-50' to='https://www.worldotutor.com/faqs'>
          <li className='md:text-[1vmax]  font-normal'>FAQs</li>
        </Link>
        <Link className='hover:text-blue-200 opacity-50' to='https://www.worldotutor.com/page/stay-safe'>
          <li className='md:text-[1vmax]  font-normal'>Stay Safe</li>
        </Link>
        <Link className='hover:text-blue-200 opacity-50' to='https://www.worldotutor.com/page/share-a-story'>
          <li className='md:text-[1vmax]  font-normal'>Share a story</li>
        </Link>
        <Link className='hover:text-blue-200 opacity-50' to='https://www.worldotutor.com/refer'>
          <li className='md:text-[1vmax]  font-normal'>Refer Us</li>
        </Link>
        <Link className='hover:text-blue-200 opacity-50' to='https://www.worldotutor.com/raiseticket'>
          <li className='md:text-[1vmax]  font-normal'>Raise A Ticket</li>
        </Link>
        <Link className='hover:text-blue-200 opacity-50' to='https://www.worldotutor.com/contact'>
          <li className='md:text-[1vmax]  font-normal'>Contact</li>
        </Link>
       </ul>
       </div>
       <div  className='h-[420px] mx-2  w-full text-center p-12 '>
        <h1 className='text-2xl font-bold pb-2'>Fallow Us</h1>
         <span className='mx-2'>{fb}</span>
         <span className='mx-2'>{insta}</span>
       </div>
       <div className='md:py-12 px-12 text-black'>
       <h1 className='text-2xl font-bold pb-4'>Subscribe</h1>
       <input type="text" className='py-4 px-6 rounded-xl' placeholder='Enter mail'/><br />
       <button className='bg-orange-800 text-white px-12 text-2xl py-4 my-4 rounded-xl'>Submit Now</button>
       </div>
     </section>
    <section className='py-4 border-t-2 w-full border-gray-700 '>
       <div className='text-center '>
         <ul className='flex  justify-center items-center pb-6'>
          <Link to='https://www.worldotutor.com/page/testimonials-display-your-love-experience'> 
          <li className='border-r-2 px-2 md:text-[1vmax] font-normal opacity-40 h-6'>Testimonials</li>
          </Link> 
          <Link to='https://www.worldotutor.com/page/terms-conditions'> 
          <li className='border-r-2 px-2 md:text-[1vmax] font-normal opacity-40 h-6'>Terms</li>
          </Link> 
          <Link to='https://www.worldotutor.com/page/privacy-policy'> 
          <li className='border-r-2 px-2 md:text-[1vmax] font-normal opacity-40 h-6'>Privacy Policy</li>
          </Link> 
          <Link to='https://www.worldotutor.com/page/refund-policy'> 
          <li className=' px-2 md:text-[1vmax] font-normal opacity-40 h-6'> Refund Policy</li>
          </Link> 
         </ul>
         <div className='opacity-40'>© 2024 All Rights Reserved.</div>
       </div>
    </section>
    </div> 
  
   
  )
}

export default Footer
