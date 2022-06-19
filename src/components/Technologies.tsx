import { ReactElement } from "react";
import { CheckIcon } from "./icons/icon";
import pic from "../images/JAVA-SPRING.jpg";

interface Props{
  
  children?: ReactElement
}

export const Technologies = (props: Props) => {

  return(
  <section className='relative bg-mrd-beige'>
    <>
        <h1 id="technologies"
          className='font-roboto font-bold pt-14 pl-5 text-5xl text-mrd-light-blue'>
          Technologies
        </h1>
        {/* Set up Icon list */}
        <div className="pt-10 pl-5 flex justify-start">
          <CheckIcon />
          <p className="text-2xl font-raleway font-bold text-mrd-blue">
          Modern programming languages
          </p>
        </div>
        <div className="pt-5 pl-5 flex flex-row">
          <CheckIcon />
          <p className=" text-2xl font-raleway font-bold text-mrd-blue">
          Best frameworks and libraries available
          </p>
        </div>
        <div className="pt-5 pl-5 flex flex-row">
          <CheckIcon />
          <p className=" text-2xl font-raleway font-bold text-mrd-blue">
          Front-End and Back-End in one hand
          </p>
        </div>
          {/* Set up grid */}
          <div className="grid grid-cols-2 pt-28 pl-5 ">
            <div className=" ">
              <h1 
              className='font-roboto font-bold  text-5xl text-mrd-yellow'>
              JAVA and SPRING BOOT
              </h1>
              <p className='font-raleway pt-10  text-2xl text-mrd-blue'>
              The Java™ Programming Language is a general-purpose, concurrent, strongly typed, class-based object-oriented language.  
              <br />
              <br />
              Java Spring Boot is an opensource framework for enterprises that runs on JVM (Java Virtual Machine)
              </p> 
            </div>
            {/* Image inserted */}
            <img 
                src={pic}
                alt=""
                className ="
                px-10
                w-full 
                h-auto
                "
                />
          </div>
    </>
  </section>
      
    )
}