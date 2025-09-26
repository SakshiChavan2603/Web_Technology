// 3) write class Component 
//     with render method display 
// 	1 textField and 2 Buttons
// 			upper case , small case 
// 	when you click the button display output 
// 	in console in UPPERCASE / lowercase 
//     (use event handling )


import { Component } from "react";


export default class Case extends Component{
    constructor(props){
        super(props);
        this.state = {  // to store input text
            text: "",
            output: "",
        };
    }

    handleInput = (e)=>{
        this.setState({text: e.target.value})
    }

    Uppercase = ()=>{
        console.log(this.state.text.toUpperCase());
        this.setState({output: this.state.text.toUpperCase()});
    }

    Lowercase = ()=>{
        console.log(this.state.text.toLowerCase());
        this.setState({output: this.state.text.toLocaleLowerCase()});
    }

    render(){
        return(
            <>
            Enter Text: <input 
                            type="text" 
                            value={this.state.text} 
                            onChange={this.handleInput} 
                            placeholder="Enetr the Text">
                        </input><br></br>
                        
            <button type="submit" onClick={this.Uppercase}>Uppercase</button><br></br>
            <button type="submit" onClick={this.Lowercase}>Lowercase</button><br></br>

            <p>Output: {this.state.output || "No output"}</p>
            </>
        );
    }
}