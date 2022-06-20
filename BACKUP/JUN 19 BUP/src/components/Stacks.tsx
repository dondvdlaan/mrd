import { MainImage } from "./MainImage"
import { NavigationBar } from "./navbar/NavigationBar"
import pic from "../images/webTech.jpg"



export const Stacks = () =>{

//Constants and variables
const title = "Web Stacks";

return(
<>
    <NavigationBar menuPage ={1}/>
    <MainImage title = {title}  menuPage = {1} pic={pic}/>
</>

)
}