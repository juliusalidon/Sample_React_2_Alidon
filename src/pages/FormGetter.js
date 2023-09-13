import FormSetter from "../components/FormSetter";
import { useState } from "react";
import UserContext from "../components/ContextProvider";
import { useContext } from "react";
const FormGetter = () => {
    const [information, setInformation] = useState({});

    const text = useContext(UserContext);

    const getInformation = (data) => {
        setInformation(data);
    }
    return ( 
        <>
            <FormSetter functionInformation={getInformation}></FormSetter>
            {information.fname}  ||  {information.lname} {text[0].name}
        </>
     );
}
 
export default FormGetter;