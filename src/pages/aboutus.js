import UserContext from "../components/ContextProvider";
import { useContext } from "react";


const AboutUs = () => {
    const text = useContext(UserContext);
    return ( 
        <>
            <h1>This is About Us</h1>
            {text[1].name}
        </>
     );
}
 
export default AboutUs;