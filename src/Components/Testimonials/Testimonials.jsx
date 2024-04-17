import { Carousel } from "@material-tailwind/react";
 
 function Testimonials() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-orange-800 text-blue-gray-50   rounded-lg" >
    <div className="text-center relative p-2 w-full">
    <p className="text-[2.2vmax] py-4  font-bold mb-4 ">
    Testimonials
       </p>
           </div>
           { 
    <Carousel transition={{ duration: 2 }}  autoplay="true" className="rounded-xl py-[2.2vmax]" loop="true" >
    <div className="md:flex mx-16 mb-12">
    <div className="h-auto w-full md:flex justify-center  ">
    <div className="text-cente flex flex-col justify-center items-center">
    <img  className="w-44 md:w-64 rounded-2xl" src="https://www.worldotutor.com/wtadmin/uploads/New_Project3.png" alt="" />
    <div className="md:text-[2vmax] mt-4 font-bold">Name</div>
    </div>
    <div className="md:text-[1.1vmax] text-[1.6vmax]  font-medium md:w-1/2 md:px-[5vmax] md:pt-3 leading-normal">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Tenetur quasi recusandae, neque expedita iure perferendis. 
    Eum, quos dicta. Doloribus illum at in autem corrupti! Quo 
    cupiditate, earum ad nihil voluptatum cum, veritatis, nam 
    fugiat maxime perspiciatis unde fugit distinctio sunt.
    </div>
     </div>
    </div>


    <div className="md:flex mx-16 mb-12">
    <div className="h-auto w-full md:flex justify-center  ">
    <div className="text-cente flex flex-col justify-center items-center">
    <img  className="w-44 md:w-64 rounded-2xl" src="https://www.worldotutor.com/wtadmin/uploads/New_Project3.png" alt="" />
    <div className="md:text-[2vmax] mt-4 font-bold">Name</div>
    </div>
    <div className="md:text-[1.1vmax] text-[1.6vmax]  font-medium md:w-1/2 md:px-[5vmax] md:pt-3 leading-normal">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Tenetur quasi recusandae, neque expedita iure perferendis. 
    Eum, quos dicta. Doloribus illum at in autem corrupti! Quo 
    cupiditate, earum ad nihil voluptatum cum, veritatis, nam 
    fugiat maxime perspiciatis unde fugit distinctio sunt.
    </div>
     </div>
    </div>

    <div className="md:flex mx-16 mb-12">
    <div className="h-auto w-full md:flex justify-center  ">
    <div className="text-cente flex flex-col justify-center items-center">
    <img  className="w-44 md:w-64 rounded-2xl" src="https://www.worldotutor.com/wtadmin/uploads/New_Project3.png" alt="" />
    <div className="md:text-[2vmax] mt-4 font-bold">Name</div>
    </div>
    <div className="md:text-[1.1vmax] text-[1.6vmax]  font-medium md:w-1/2 md:px-[5vmax] md:pt-3 leading-normal">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Tenetur quasi recusandae, neque expedita iure perferendis. 
    Eum, quos dicta. Doloribus illum at in autem corrupti! Quo 
    cupiditate, earum ad nihil voluptatum cum, veritatis, nam 
    fugiat maxime perspiciatis unde fugit distinctio sunt.
    </div>
     </div>
    </div>

    <div className="md:flex mx-16 mb-12">
    <div className="h-auto w-full md:flex justify-center  ">
    <div className="text-cente flex flex-col justify-center items-center">
    <img  className="w-44 md:w-64 rounded-2xl" src="https://www.worldotutor.com/wtadmin/uploads/New_Project3.png" alt="" />
    <div className="md:text-[2vmax] mt-4 font-bold">Name</div>
    </div>
    <div className="md:text-[1.1vmax] text-[1.6vmax]  font-medium md:w-1/2 md:px-[5vmax] md:pt-3 leading-normal">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Tenetur quasi recusandae, neque expedita iure perferendis. 
    Eum, quos dicta. Doloribus illum at in autem corrupti! Quo 
    cupiditate, earum ad nihil voluptatum cum, veritatis, nam 
    fugiat maxime perspiciatis unde fugit distinctio sunt.
    </div>
     </div>
    </div>

    <div className="md:flex mx-16 mb-12">
    <div className="h-auto w-full md:flex justify-center  ">
    <div className="text-cente flex flex-col justify-center items-center">
    <img  className="w-44 md:w-64 rounded-2xl" src="https://www.worldotutor.com/wtadmin/uploads/New_Project3.png" alt="" />
    <div className="md:text-[2vmax] mt-4 font-bold">Name</div>
    </div>
    <div className="md:text-[1.1vmax] text-[1.6vmax]  font-medium md:w-1/2 md:px-[5vmax] md:pt-3 leading-normal">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Tenetur quasi recusandae, neque expedita iure perferendis. 
    Eum, quos dicta. Doloribus illum at in autem corrupti! Quo 
    cupiditate, earum ad nihil voluptatum cum, veritatis, nam 
    fugiat maxime perspiciatis unde fugit distinctio sunt.
    </div>
     </div>
    </div>

     
    
    </Carousel>
  }
     

    </section>
  );
}
export default Testimonials
