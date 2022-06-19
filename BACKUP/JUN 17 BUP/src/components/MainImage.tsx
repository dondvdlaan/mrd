import { ReactElement } from "react";

interface Props{
  pic: string,
  menuPage: number,
  title: string,
  children?: ReactElement
}

export const MainImage = (props: Props) => {

  return(
  <section className='relative'>
    <>
    {/* Backgound image projected */}
    <img 
        src={props.pic}
        alt=""
        className ="w-full h-96 object-cover contrast-25 "
        />
        {/* Home page has different headers */}
        {props.menuPage === 0 ? 
        <>
        <h1 
         className='font-roboto font-bold absolute left-12 top-20 text-6xl text-white'>
         {props.title}
        </h1>
        <h3 
         className='font-roboto font-bold absolute left-12 top-36 text-4xl text-white'>
         Customized Software
        </h3>
        <button 
         className="absolute left-1/3 top-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
         FOR MORE INFORMATION OR AN OFFER
        </button>
        </>
         :
         <h1
        className='font-roboto font-bold absolute left-1/3 top-1/2 text-6xl text-white'>
         {props.title}
         </h1>
        }
    </>
      
  </section>
      
    )
}