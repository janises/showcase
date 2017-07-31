import React, {Component} from "react";

class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            userInput: "",
            palindrome: ""
        };
    }

    updateUserInput(val) {
        this.setState({userInput: val})
    }

    makeAPalindrome() {
        var reverse = "";
        var bool = false;
        var userInput = this.state.userInput;
        reverse = userInput.split("").reverse().join("");
        if(userInput === reverse) {
            bool = true;
        }
        this.setState({palindrome: bool})
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e)=> {this.updateUserInput(e.target.value)}}></input>
                <button className="confirmationButton" onClick={()=>{this.makeAPalindrome(this.state.userInput)}}>Palindromify</button>
                <span className="resultsBox">Palindrome: {JSON.stringify(this.state.palindrome, null, 10)}</span>
            </div>
        )
    }
}

export default Palindrome;