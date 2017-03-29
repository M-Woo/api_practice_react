import React, {Component} from 'react';
const Link = require('react-router').Link;

class CrimeResults extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }



  render(){
    return (
    <div>
 	<p>Latitude: {this.props.lat}</p>
    <p>Longitude: {this.props.lon}</p>
    <p>Offense Type: {this.props.offense}</p>
    </div>
    );
  }
}



export default CrimeResults;