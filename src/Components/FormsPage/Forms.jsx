// import React from 'react'

function Forms() {
  return (
    <div className="flex justify-center "> 
        <div className="w-auto flex justify-center items-center " id="container ">
        <div>
           <img src="" alt="" />
        </div>
        <div className="bg-slate-400 w-auto md:px-14 py-16   mt-2 shadow-xl rounded-md  ">
        <form action="" className="flex flex-col justify-center    ">
        <div className="p-5  space-x-6 border-black border-2 mb-2 text-center">
        <label htmlFor="" className="  py-3    z-50   ">Parent`s Name</label>
        <input className="rounded-md py-3 px-9" type="text" required  name="ParentName"  />
        </div>
        <div className="p-5 text-center border-black border-2 mb-2 space-x-7">
        <label htmlFor="" className="  py-3  left-10 ">Parent`s Email</label>
        <input className="rounded-md py-3 px-9" type="Email required " name="ParentEmail"  />
        </div>
        <div className="p-5 text-center border-black border-2  mb-2 md:space-x-20 space-x-3 px"> 
        <label htmlFor="" className="  py-3  left-10 "> Phone    </label>
        <input className="rounded-md py-3 px-9" type="tel"  required name='Phone'   />
        </div>
        <div className="p-5 text-center border-black border-2 mb-2 md:space-x-11 space-x-6">
        <label htmlFor="" className="  py-3  left-10 ">Child Name</label>
        <input className="rounded-md py-3 px-9" type="text" required  name='ChildName'/>
        </div>
        <div className="p-5 text-center border-black border-2 mb-2 md:space-x-7 space-x-5">
        <label>Select Classes</label>
          <select name="" id="" className="py-3 px-14 rounded-xl">
           <option value="">Select Class</option>
           <option>Class 1</option>
           <option>Class 2-3</option>
           <option>Class 4-6</option>
           <option>Class 7-9 </option>
           <option>Class 10-12</option>
           <option>Bachelors Degree</option>
           <option>Masters Degree</option>
           <option>Doctorate/Ph.D</option>

          
          </select>
        
        </div>
        <div className="p-5 border-black border-2 mb-2 text-center">
        <label htmlFor="">Do You Have Laptop/PC at home for class?</label>
        <br />
        <input type="Radio" name='choice' value="yes"/><span className="ml-1">yes</span>   <input type="Radio" name='choice' value="no" className="ml-3"/><span className="mx-1">No</span>
        </div>
        <div className="w-auto flex ">
        <button className="p-2 w-full bg-blue-500 text-2xl font-medium rounded-md">Book Free Trail</button>
        </div>
        </form>
        </div>
        
        </div>
    </div>
  )
}

export default Forms
