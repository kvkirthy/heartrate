import React, { Component } from 'react';
import Heatmap from './Heatmap';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      age: 35
    };
  }
  render() {

    let maxHeartRate = 211 - (0.64 * this.state.age);
    let minHeartRate = 60;
    let offset = (maxHeartRate - minHeartRate)/5;

    let bookmarks = [];
    let heartRateStop = minHeartRate;
    for(let i=0; i<= 5; i++){
      bookmarks.push(Math.round(heartRateStop));
      heartRateStop = heartRateStop+offset;      
    }

    return (
      <div className="App">
        <div className="App-header">          
          <h2>Heart Rate Calculator</h2>
        </div>
        <p className="App-intro">
          Age: <input type="text" onChange={ (e) => this.setState({age: e.target.value}) } />
          <br />
          <br />
          <Heatmap bookmarks={bookmarks} />
        </p>
      </div>
    );
  }
}

export default App;
