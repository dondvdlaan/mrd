import { NavigationBar } from './navbar/NavigationBar';
import { MainImage } from './MainImage';
import pic from "../images/source-code-abstract.jpg";
import { AboutUs } from './AbouUs';

function Home() {

//Constants and variables
const title = "Fullstack Web applications";

  return (
    <>
    <NavigationBar menuPage = {0} />
    <MainImage title = {title} menuPage = {0} pic={pic}/>
    {/* <AboutUs /> */}
    </>
  );
}

export default Home;
