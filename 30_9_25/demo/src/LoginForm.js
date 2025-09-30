import { useState } from "react";

function LoginForm(){

    const [fname, setfName] = useState('');
    const [lname, setlName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [gender, setGender] = useState('male');
    const [subject, setSubject] = useState({
        English:true,
        Maths:false,
        Physics:false
    });

    return(
        <div>
            <h1>Login Form</h1>

            First Name: <input
                type="text"
                name="FirstName"
                id="fnm"
                value={fname}    
                onChange={(e)=>{
                    setfName(e.target.value);
                }} 
            >
            </input><br></br>

            Last Name: <input
                type="text"
                name="lastName"
                id="lnm"
                value={lname}    
                onChange={(e)=>{
                    setlName(e.target.value);
                }} 
            >
            </input><br></br>

            Email: <input
                type="email"
                name="Email"
                id="email"
                value={email}    
                onChange={(e)=>{
                    setEmail(e.target.value);
                }} 
            >
            </input>

            Contact: <input
                type="text"
                name="contact"
                id="con"
                value={contact}    
                onChange={(e)=>{
                    setContact(e.target.value);
                }} 
            >
            </input>
            
            <label for="gender">Gender*</label>
            <input
                type="radio"
                name="gender"
                value="male"
                id="male"
                checked={gender === "male"}
                onChange={(e) =>
                setGender(e.target.value)
                }
            />
            Male

            <input
                type="radio"
                name="gender"
                value="female"
                id="female"
                checked={gender === "female"}
                onChange={(e) =>
                    setGender(e.target.value)
                }
            />
            Female

            <input
                type="radio"
                name="gender"
                value="other"
                id="other"
                checked={gender === "other"}
                onChange={(e) =>
                    setGender(e.target.value)
                }
            />
            Other

            <label for='lang'>
                your best Subject
            </label>
            <input
                type="checkbox"
                name="lang"
                id="english"
                checked={subjects.english === true}
                onChange={(e) =>
                    handleSubjectChange("english")
                }
            />
            English

            <input
                type="checkbox"
                name="lang"
                id="maths"
                checked={subjects.maths === true}
                onChange={(e) =>
                    handleSubjectChange("maths")
                }
            />
             Maths

             <input
                type="checkbox"
                name="lang"
                id="physics"
                checked={subjects.physics === true}
                onChange={(e) =>
                    handleSubjectChange("physics")
                }
                />
                 Physics

            
        </div>
    );
}