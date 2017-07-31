import React, {Component} from "react";

class FilterString extends Component {
    constructor(){
        super();

        this.state = {
            unFilteredArray: ["dogs", "cats", "hedgehogs", "groundhogs"],
            userInput: "",
            filteredArray: []
        };
    }
    
    updateInput(val) {
        this.setState({
            userInput: val
        })
    }

    filterArray(prop) {
       var filteredArray = [];
       var unFilteredArray = this.state.unFilteredArray;
       
       for(var i = 0; i < unFilteredArray.length; i++) {
           if(unFilteredArray[i].match(prop)) {
               filteredArray.push(unFilteredArray[i]);
           }
       }
        
       this.setState({
           filteredArray: filteredArray
       })
    }


    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(e)=> this.updateInput(e.target.value) }></input>
                <button className="confirmationButton" onClick={()=>{this.filterArray(this.state.userInput)}}>Filter</button>
                <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray, null, 10)}</span>    
            </div>
        )
    }
}

export default FilterString;