import { useState } from "react";

function PopPage() {
    const [position,setPosition] = useState(false);
    // const [close,setClose] = useState(false);
    const Closebutton=()=>{
      document.querySelector('section').style.display="none";
      
    }
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
        <section className={position?"bg-white z-50 w-[550px] px-10 py-8 fixed -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-xl":"bg-white z-50 w-[550px] px-10 py-8 absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-xl" }>
          <button onClick={Closebutton}  className="border-2 border-black px-4 text-2xl rounded-xl font-medium hover:bg-red-600 text-white bg-blue-600">Close</button>
           <h1 className="text-2xl font-bold py-2"> vel obcaecati exercitationem.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rerum asperiores 
            repellendus laudantium ullam tenetur, perferendis omnis architecto 
            veniam accusantium? Fugit similique voluptas accusamus quo 
            consectetur minima magnam autem officiis?</p>
        </section> 
    </div>
  )
}

export default PopPage
