// import { Link } from "react-router-dom";
import "./Math.css";
import Testimonials from "../Components/Testimonials/Testimonials";
import Newsletter from "../Components/Newsatter/Newslatter";
function Mathes() {
  return (
    <div>
    <section style={{
      backgroundImage:
        'URL("https://www.whitehatjr.com/maths/media/math-banner/background.png")',
    }} className=" bg-[-190px]">
      <header className=" text-center text-orange-700   cursor-pointer " >
        <div>
          <h1 className="p-1 text-[1.6vmax] font-medium animate-pulse ">
            {" "}
            REGISTER ONLY FOR &#x20b9; 99
          </h1>{" "}
        </div>
        <div className="p-1 text-[1.6vmax] font-medium">
          2-HOUR WORKSHOP OF 2X2 RUBIK`S CUBE
        </div>
      </header>

        <div
          className=" flex justify-center t-[5vmax] md:h-[30vmax] relative md:px-11"   >
          <div className="grid md:grid-cols-2  w-full mx-auto my-0 md:p-0 md:px-9    ">
            <div className="md:px-11 px-4">
              <h1 className="text-[3vmax]  font-extrabold text-orange-500 ">
               LEARN FROM BEST TEACHERS
              </h1>            
              <button className="border-2 bg-orange-400 text-white  px-[2vmax] py-3 font-bold animate-pulse  border-yellow-700 rounded-xl hover:bg-blue-700 hover:text-white">
                Book Now
              </button>
            </div>
            <div className="">
               <video className="rounded-xl relative h-96" src="/src/assets/vieo.mp4" width="600" height="300" autoPlay='true' loop muted controls type="video/mp4" ></video>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white w-full h-auto mx-auto md:px-32 relative">
        <header className="text-center ">
          <h1 className="text-[2.2vmax] font-medium pt-20">
            Why Create with Math?
          </h1>
          <p className="text-[1.4vmax] font-normal mt-11">
            Our curriculum is activity based to enable kids to get to the “Why”
            behind Math. We build enquiry, focus on depth over speed, and see
            mistakes as opportunities.Your child develops a strong foundation by
            building real-world applications with Math, falling in love with it
            forever.
          </p>
          <p className="text-[2vmax] text-slate-500 mt-20">
            What makes our curriculum different
          </p>
        </header>
        <div className="md:flex block md:m-auto cursor-pointer py-8 w-full relative ">
          <div className="px-11 py-5 mx-2  bg-gray-400 hover:scale-110 rounded-2xl  shadow-xl flex-1 mb-2 w-full">
            <img
              className="block m-auto"
              src="https://www.whitehatjr.com/maths/media/why-create-with-maths/leading-edge-research.svg"
              alt=""
            />
            <p className="text-xl font-normal">Provide with all the matrial</p>
          </div>
          <div className="px-11 py-5 mx-2  bg-gray-400 hover:scale-110 rounded-2xl  shadow-xl flex-1 mb-2 w-full">
            <img
              className="block m-auto"
              src="https://www.whitehatjr.com/maths/media/why-create-with-maths/leading-edge-research.svg"
              alt=""
            />
            <p className="text-xl font-normal">Live Q/A Session</p>
          </div>
          <div className="px-11 py-5 mx-2 text-center bg-gray-400 hover:scale-110 rounded-2xl  shadow-xl flex-1 mb-2 w-full">
            <img
              className="block m-auto"
              src="https://www.whitehatjr.com/maths/media/why-create-with-maths/leading-edge-research.svg"
              alt=""
            />
            <p className="text-xl font-normal">Certification.</p>
          </div>
          <div className="px-11 py-5 mx-2 text-center bg-gray-400 hover:scale-110 rounded-2xl  shadow-xl flex-1 mb-2 w-full">
            <img
              className="block m-auto"
              src="https://www.whitehatjr.com/maths/media/why-create-with-maths/leading-edge-research.svg"
              alt=""
            />
            <p className="text-xl font-normal">100% Refund if unable to solve</p>
          </div>
          
            </div>
        
      </section>
    <section>
    <Testimonials/>
    <Newsletter/>
    </section>
    
 
    
    </div>
  );
}

export default Mathes;
