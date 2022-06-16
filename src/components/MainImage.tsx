import pic from "../images/source-code-abstract.jpg";


export const MainImage = () => {

    return(
<>
 <section className='relative'>
        <img 
      src={pic}
      alt=""
      className ="w-full h-96 object-cover contrast-25 "
       />
       <h1 
       className='font-roboto font-bold absolute left-20 top-20 text-5xl text-white'>
        Fullstack Web applications
        </h1>
      </section>
      
      </>
    )
}