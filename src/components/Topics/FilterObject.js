import React, {Component} from "react";

export default class FilterObject extends Component {

  constructor() {
    super();

    this.state = {
      people: [
        {
          name: 'Jim',
          title: 'CFO',
          age: 67,
        },
        {
          name: 'Bob',
          age: 43,
          carColor: 'red'
        },
        {
          name: 'Jill',
          title: 'CEO',
        }
      ],

      userInput: '',
      filteredPeople: []
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterPeople(prop) {
    var people = this.state.people;
    var filteredPeople = [];
    
    for ( var i = 0; i < people.length; i++ ) {
      if ( people[i].hasOwnProperty(prop) ) {
        filteredPeople.push(people[i]);
      }
    }

    this.setState({ filteredPeople: filteredPeople });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.people, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterPeople(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredPeople, null, 10) } </span>
      </div>
    )
  }
}