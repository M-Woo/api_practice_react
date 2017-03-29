import React, { Component } from 'react';
import './App.css';
import CrimeResults from './CrimeResults';
var $ = require ('jquery')

class App extends Component {
  constructor(props) {
   super(props);

   this.state = {
     crimes: []
   };
 }

  _search = () => {
    return $.getJSON('https://data.seattle.gov/resource/y7pv-r3kh.json')
   .then((data) => {
     console.log(data);
     this.setState({ crimes: data });
   });
  }


  render() {
    return (
      <div className="App">
        <div className="searchField">
          <button onClick={() => this._search()}>Get</button>
        </div>
        <h2>Results</h2>
        {this.crimes()}
      </div>
    );
  }


  crimes(){
    return this.state.crimes.map(crime => {
      return <CrimeResults lat={crime.latitude} lon={crime.longitude} offense={crime.offense_type} />
    });
  }


}

export default App;
