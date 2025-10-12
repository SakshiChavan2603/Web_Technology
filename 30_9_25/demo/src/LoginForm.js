import React, { useState } from "react";

function LoginForm() {
    // 1. State for form fields
    const [fname, setfName] = useState('');
    const [lname, setlName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [gender, setGender] = useState('male');
    const [subjects, setSubject] = useState({
        English: true,
        Maths: false,
        Physics: false
    });
    
    // 2. State for submitted data
    const [submittedData, setSubmittedData] = useState(null);

    // 3. Subject Checkbox Handler
    const handleSubjectChange = (subjectName) => {
        setSubject(prevSubjects => ({
            ...prevSubjects,
            // Toggle the boolean value for the specific subject
            [subjectName]: !prevSubjects[subjectName]
        }));
    };

    // 4. Form Submission Handler
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default page reload behavior

        // Compile all current state into a single object
        const data = {
            firstName: fname,
            lastName: lname,
            email: email,
            contact: contact,
            gender: gender,
            subjects: subjects
        };

        // Set the state to display the data
        setSubmittedData(data);
        
        // Optional: Clear the form fields after submission
        // setfName('');
        // setlName('');
        // setEmail('');
        // setContact('');
        // setGender('male');
        // setSubject({ English: false, Maths: false, Physics: false });
    };

    return (
        <div>
            <h1>Login Form</h1>
            
            {/* 5. Wrap all inputs in an HTML <form> element and attach handleSubmit */}
            <form onSubmit={handleSubmit}>

                <label htmlFor="fnm">First Name:</label>
                <input
                    type="text"
                    name="FirstName"
                    id="fnm"
                    value={fname}
                    onChange={(e) => setfName(e.target.value)} 
                /><br />

                <label htmlFor="lnm">Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    id="lnm"
                    value={lname}
                    onChange={(e) => setlName(e.target.value)} 
                /><br />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="Email"
                    id="email"
                    value={email}    
                    onChange={(e) => setEmail(e.target.value)} 
                /><br />

                <label htmlFor="con">Contact:</label>
                <input
                    type="text"
                    name="contact"
                    id="con"
                    value={contact}    
                    onChange={(e) => setContact(e.target.value)} 
                /><br /><br />
                
                <label>Gender*</label>
                {/* Note: The 'name' attribute must be the same for radio buttons to work correctly */}
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    id="male"
                    checked={gender === "male"}
                    onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="male">Male</label>

                <input
                    type="radio"
                    name="gender"
                    value="female"
                    id="female"
                    checked={gender === "female"}
                    onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="female">Female</label>

                <input
                    type="radio"
                    name="gender"
                    value="other"
                    id="other"
                    checked={gender === "other"}
                    onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="other">Other</label>
                <br /><br />

                <label>Your Best Subject(s):</label><br />

                {/* Checkboxes - Corrected property names */}
                <input
                    type="checkbox"
                    name="English"
                    id="english"
                    checked={subjects.English}
                    onChange={() => handleSubjectChange("English")}
                />
                <label htmlFor="english">English</label>

                <input
                    type="checkbox"
                    name="Maths"
                    id="maths"
                    checked={subjects.Maths}
                    onChange={() => handleSubjectChange("Maths")}
                />
                <label htmlFor="maths">Maths</label>

                <input
                    type="checkbox"
                    name="Physics"
                    id="physics"
                    checked={subjects.Physics}
                    onChange={() => handleSubjectChange("Physics")}
                />
                <label htmlFor="physics">Physics</label>
                <br /><br />
                
                {/* The button to submit the form */}
                <button type="submit">Submit Data</button>

            </form>

            <hr />

            {/* 6. Display the Data (Conditional Rendering) */}
            {submittedData ? (
                <div>
                    <h2>Submitted Data:</h2>
                    <p><strong>First Name:</strong> {submittedData.firstName}</p>
                    <p><strong>Last Name:</strong> {submittedData.lastName}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Contact:</strong> {submittedData.contact}</p>
                    <p><strong>Gender:</strong> {submittedData.gender}</p>
                    <p><strong>Subjects:</strong> 
                        {/* Filter and join subjects that are true */}
                        {Object.keys(submittedData.subjects)
                               .filter(key => submittedData.subjects[key])
                               .join(', ') || 'None selected'}
                    </p>
                </div>
            ) : (
                <p>Please fill out the form and click "Submit Data" to see the output.</p>
            )}
        </div>
    );
}

export default LoginForm;