import { useState } from "react";

const PasswordGenerator = ()=>{
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const loweCase = 'abcdefghijklmnopqrstuvwxyz';
    const Numbers = '0123456789';
    const specialCharas = '!@#$%*&^()~';
    const passLength = 8;

    const [password, setPassword] = useState('');
    const [allowChars,setAllowChars] = useState(true);
    const [allowNumber,setAllowNumber] = useState(true);
    const [allowSpecialChar,setAllowSpecialChar] = useState(true);

    const generatePassword = ()=>{
        let charset = '';

        if(allowChars){
            charset += upperCase + loweCase;
        }

        if(allowNumber){
            charset += Numbers;
        }

        if(allowSpecialChar){
            charset += specialCharas;
        }

        if(charset.length === 0){
            setPassword("Select at least one option");
            return;
        }

        let newPassword = '';
        for(let i=0;i<passLength;i++){
            const index = Math.floor(Math.random()*charset.length);
            newPassword += charset[index];
        }

        setPassword(newPassword);
    }

    return(

        <>
            <h3>Passowrd Generator</h3><br></br>

            <label>
                <input
                    type="checkbox"
                    checked={allowChars}
                    onChange={()=>setAllowChars(!allowChars)}
                />
                Allow A-Z and a-z characters
        
            </label><br></br><br></br>

            <label>
                <input
                    type="checkbox"
                    checked={allowNumber}
                    onChange={()=>setAllowNumber(!allowNumber)}
                />
                Allow 0-9 numbers
            </label><br></br><br></br>

            <label>
                <input
                    type="checkbox"
                    checked={allowSpecialChar}
                    onChange={()=>setAllowSpecialChar(!allowSpecialChar)}
                />
                Allow Special characters(!@#$%^&*())
            </label><br></br> <br></br>

            <button onClick={generatePassword}>Generate Password</button><br></br><br></br>
            <h4>Generated Password:</h4>
            <p>{password || 'Click Genertae Password'}s</p>
        </>
    )
}

export default PasswordGenerator