/* eslint-disable no-unused-vars */
import React from 'react'
// eslint-disable-next-line no-unused-vars
function Razorpay(state) {
  console.log("hello");
  const receiptid="recpt01";
  const PaymentHandler=async (e)=>{  
    const response = await fetch('http://localhost:4000/order',{
      method:"POST",
      body:JSON.stringify({
        amount:500,
        currency:"INR",
        receipt:receiptid,
      }),
      headers:{
             "Content-Type":"application/json"
       }
    });
    const order = await response.json();
    console.log(order);
    var options = {
    "key": "rzp_test_uagAw643g9theS", // Enter the Key ID generated from the Dashboard
    'amount':7000, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "WorldoTutor",
    "description": "Test Transaction",
    "image": "https://www.worldotutor.com/assets/images/logo.png",
    "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": {
        "name": state.fullname,
        "email": state.email,
        "contact": state.phone
    },
    "notes": {
        "address": "WorldoTutor Office Ludhiana Punjab"
    },
    "theme": {
        "color": "#3399cc"
    }
} ;
  
var rzp1 = new window.Razorpay(options);
rzp1.on('payment.failed', function (response){
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
   <div>
  {PaymentHandler}
   </div>
  )
}

export default Razorpay
