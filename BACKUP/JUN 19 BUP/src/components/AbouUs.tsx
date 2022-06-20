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
        className ="
        w-full 
        h-144
        object-cover 
        bg-mrd-blue 
        bg-opacity-60 
        contrast-100
        brightness-125"
        />
        {/* Absolute div */}
      <div className = "absolute left-0 top-0" >
        <h1 
          className='font-roboto font-bold pt-28 pl-5 text-5xl text-mrd-light-blue'>
          About us
        </h1>
          {/* Set up grid */}
          <div className="grid grid-cols-2">
            <p className='font-raleway pt-5 pl-5 text-2xl text-mrd-blue'>
              Many Roads Developers helps you with the Design, Planning, Implementation and 
              Launching of custom Web Applications. We work remote or at customer site in 
              Europe and our contracts are hourly freelance or lumpsum based.
            <br />
            <br />
              Many Roads Developers offers you Front-End and Back-End services 
              applying the latest technologies like Java/Spring, Nodejs and React, 
              PHP, libraries like Ant D, Next, Express, Laravel, etc.
            </p> 
          </div>
        </div> 
    </>
  </section>
      
    )
}