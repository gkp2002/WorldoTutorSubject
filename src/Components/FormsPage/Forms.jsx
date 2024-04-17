// import React from 'react'

import { useState } from "react";
import Testimonials from "../Testimonials/Testimonials";
// import Razorpay from "../RazorPay/Razorpay";

function Forms() {
//  const amount = props.price;
  const [state, setState] = useState({
    fullname: "",
    phone: "",
    email: "",
    city: "",
    country: "",
  });

  const formvalidate = () => {
    if (
      state.fullname == "" ||
      state.phone == "" ||
      state.city == "" ||
      state.email == "" ||
      state.country == ""
    ) {
      return false;
    } else {
      {PaymentHandler()}
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevprops) => ({
      ...prevprops,
      [name]: value,
    }));
   
  };
  const receiptid = "recpt01";
  const PaymentHandler = async (e) => {
    const response = await fetch("http://localhost:4000/order", {
      method: "POST",
      body: JSON.stringify({
        amount: 500,
        currency: "INR",
        receipt: receiptid,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order);

    var options = {
      key: "rzp_test_uagAw643g9theS", // Enter the Key ID generated from the Dashboard
      amount:100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "WorldoTutor",
      description: "Test Transaction",
      image: "https://www.worldotutor.com/assets/images/logo.png",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: state.fullname,
        email: state.email,
        contact: state.phone,
      },
      notes: {
        address: "WorldoTutor Office Ludhiana Punjab",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason); 
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  }
  
  return (
    <section>
    <div className="md:flex  justify-evenly py-11 md:px-44 ">

    <div className="md:w-[45%] h-auto md:shadow-2xl py-11 ">
    <div>
    <img src="https://www.worldotutor.com/assets/images/worldotutor_why1.png" alt="" />
    </div>
     <div className="flex justify-center">
       <ul className="mt-6">
        <li className=" flex md:py-1 text-xl font-normal gap-2"><img src="	https://www.worldotutor.com/assets/images/check.png" className="w-7 h-7" alt="" />Lorem ipsum dolor sit amet consectetur. </li>
        <li className=" flex md:py-1 text-xl font-normal gap-2"><img src="	https://www.worldotutor.com/assets/images/check.png" className="w-7 h-7" alt="" />Lorem ipsum dolor sit amet consectetur. </li>
        <li className=" flex md:py-1 text-xl font-normal gap-2"><img src="	https://www.worldotutor.com/assets/images/check.png" className="w-7 h-7" alt="" />Lorem ipsum dolor sit amet consectetur. </li>
        <li className=" flex md:py-1 text-xl font-normal gap-2"><img src="	https://www.worldotutor.com/assets/images/check.png" className="w-7 h-7" alt="" />Lorem ipsum dolor sit amet consectetur. </li>
        <li className=" flex md:py-1 text-xl font-normal gap-2"><img src="	https://www.worldotutor.com/assets/images/check.png" className="w-7 h-7" alt="" />Lorem ipsum dolor sit amet consectetur. </li>
        <li className=" flex md:py-1 text-xl font-normal gap-2"><img src="	https://www.worldotutor.com/assets/images/check.png" className="w-7 h-7" alt="" />Lorem ipsum dolor sit amet consectetur. </li>
       </ul>
     </div>
    </div>
    <div className="flex justify-center flex-col items-center shadow-2xl md:w-[45%]  ">
        <div className="text-[2vmax] font-bold pb-7 text-orange-700">Book your Free Trial</div>
    <form className="w-full max-w-lg  " onSubmit={handleSubmit}>
            <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold text-xl md:text-right mb-1 md:mb-0 pr-4">
        Full Name
        </label>
          </div>
          <div className="md:w-2/3">
          <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-900"
              name="fullname"
              type="text"
              placeholder="FullName"
              value={state.fullname}
              onChange={handleInputChange}
              required
              />
          </div>
        </div>
        
        <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold text-xl md:text-right mb-1 md:mb-0 pr-4">
        Phone
        </label>
        </div>
        <div className="md:w-2/3">
        <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-900"
        name="phone"
        type="tel"
        placeholder="phone"
        value={state.phone}
        onChange={handleInputChange}
        required
        />
        </div>
        </div>
        
        <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold text-xl md:text-right mb-1 md:mb-0 pr-4">
        Email
        </label>
        </div>
        <div className="md:w-2/3">
        <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-900"
        id="inline-full-name"
        name="email"
        type="email"
        placeholder="email"
        value={state.email}
        onChange={handleInputChange}
        required
        />
        </div>
        </div>
        
        <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold text-xl md:text-right mb-1 md:mb-0 pr-4">
        City
        </label>
        </div>
        <div className="md:w-2/3">
        <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-900"
        name="city"
        type="text"
        placeholder="city"
        value={state.city}
        onChange={handleInputChange}
        required
        />
        </div>
        </div>
        
        <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold text-xl md:text-right mb-1 md:mb-0 pr-4">
        Country
        </label>
        </div>
        <div className="md:w-2/3">
        <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-900"
        name="country"
        type="text"
        placeholder="Country"
        value={state.country}
        onChange={handleInputChange}
        required
        />
        </div>
        </div>
        
        <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
        <button
        className="shadow bg-orange-700 hover:bg-orange-400 focus:shadow-outline focus:outline-none
        text-white font-bold text-xl py-2 px-4 rounded flex w-full justify-center"
        type="submit"
        onClick={formvalidate}
        >
        Pay Now
        </button>
        
        </div>
        </div>
        </form>
       
        </div>
        
        </div>
        <div className="mt-3">
        <Testimonials/>
        </div>
        </section>
      );
    }
    
export default Forms;
