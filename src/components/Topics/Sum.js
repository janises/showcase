import React, {Component} from "react";

class Sum extends Component {
    constructor(){
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        };
    }


    updateNum1(val) {
        this.setState({
            number1: val
        })
    }

    updateNum2(val) {
        this.setState({
            number2: val
        })
    }

    calcSum(num1, num2) {
        var num1 = parseInt(this.state.number1);
        var num2 = parseInt(this.state.number2);
        var sum = num1 + num2;

        this.setState({sum: sum})
    }
    
    render(){
        return (
            <div className="puzzleBox sumPB">
                <h4> Sum </h4>
                <input className="inputLine" onChange={(e)=> {this.updateNum1(e.target.value)}}></input>
                <input className="inputLine" onChange={(e)=> {this.updateNum2(e.target.value)}}></input>
                <button className="confirmationButton" onClick={()=>{this.calcSum(this.state.number1, this.state.number2)}}>Add</button>
                <span className="resultsBox">Sum: {JSON.stringify(this.state.sum, null, 10)}</span>
            </div>
        )
    }
}

export default Sum;