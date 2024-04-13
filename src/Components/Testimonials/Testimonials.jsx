import { Carousel } from "@material-tailwind/react";
 
 function Testimonials() {
  return (
    <section className=" bg-gradient-to-r from-blue-800 to-orange-800  text-white rounded-lg" >
    <div className="text-center relative p-2 w-full">
    <p className="text-[2.2vmax] py-4  font-bold mb-4 text-white">
    Testimonials
       </p>
           </div>
    <Carousel transition={{ duration: 2 }}  autoplay="true" className="rounded-xl py-[2.2vmax]" loop="true" >
    <div className="h-auto w-full flex flex-col items-center px-[8vmax]">
    <div className="text-[1.1vmax] font-normal pb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quasi recusandae, neque expedita iure perferendis. Eum, quos dicta. Doloribus illum at in autem corrupti! Quo cupiditate, earum ad nihil voluptatum cum, veritatis, nam fugiat maxime perspiciatis unde fugit distinctio sunt.</div>
    <img  className="rounded-full w-[12vmax]" src="https://www.worldotutor.com/wtadmin/uploads/New_Project3.png" alt="" />
    <div className="text-[3vmax]">Name</div>
    </div>
    <div className="h-auto w-full flex flex-col items-center px-[8vmax]">
    <div className="text-[1.1vmax] font-normal pb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quasi recusandae, neque expedita iure perferendis. Eum, quos dicta. Doloribus illum at in autem corrupti! Quo cupiditate, earum ad nihil voluptatum cum, veritatis, nam fugiat maxime perspiciatis unde fugit distinctio sunt.</div>
    <img className="rounded-full w-[12vmax]" src="https://www.worldotutor.com/wtadmin/uploads/New_Project3.png" alt="" />
    <div className="text-[3vmax]">Name</div>
    </div>
    <div  className="h-auto w-full flex flex-col items-center px-[8vmax]">
    <div className="text-[1.1vmax] font-normal pb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quasi recusandae, neque expedita iure perferendis. Eum, quos dicta. Doloribus illum at in autem corrupti! Quo cupiditate, earum ad nihil voluptatum cum, veritatis, nam fugiat maxime perspiciatis unde fugit distinctio sunt.</div>
    <img className="rounded-full w-[12vmax]" src="https://www.worldotutor.com/wtadmin/uploads/New_Project3.png" alt="" />
    <div className="text-[3vmax]">Name</div>
    </div>
    
    </Carousel>
    </section>
  );
}
export default Testimonials
