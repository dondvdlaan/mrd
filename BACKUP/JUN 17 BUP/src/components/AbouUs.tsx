import { ReactElement } from "react";
import pic from "../images/eu-c-04.png";


interface Props{
  
  children?: ReactElement
}

export const AboutUs = (props: Props) => {

  return(
  <section className='relative'>
    <>
    {/* Backgound image projected */}
    <img 
        src={pic}
        alt=""
        className ="w-full h-96 object-cover bg-red-500 "
        />
        
    </>
      
  </section>
      
    )
}