import { useState } from "react";

const FormSetter = (props) => {
    const [firstName, setFirstName] = useState ("Julius");
    const [lastName, setLastName] = useState ("Alidon");

    const giveData = (e) => {
        e.preventDefault();
        props.functionInformation({fname: firstName, lname: lastName});
    }
    return ( 
        <>
    
            <div className="container mt-5">
                <div className="card">
                    <div className="card-body">
                        <form action="" method="">
                            <label htmlFor="">First Name</label>
                            <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                            <label htmlFor="" method="" >Last Name</label>
                            <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                            <hr />
                            <button className="btn btn-primary w-100" onClick={giveData}>
                                Show Data
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default FormSetter;