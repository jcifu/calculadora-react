import './App.css';
import React, {Component} from 'react';
import {Button} from './components/Button';
import {Input} from './components/Input';


/*
  reset(){
    this.setState({result:'0'});
  }

  addtoCurrent(symbol){
    this.setState({this.state.current + symbol})

  }
*/
class App extends Component{
  constructor(props){
    super(props);
    
      this.state={
        input: "0"
      };  
  }

  render(){
    return(
      <div className="app">
        <div className="container">
          <div className="calc-container">
            <div className="row">
              <input className="input" type="text" input={this.state.input} disabled/>
            </div>
            <div className="row">
              <button className="btn-container operator">C</button>
              <button className="btn-container operator">%</button>
              <button className="btn-container operator">&radic;</button>
              <button className="btn-container operator">÷</button>
            </div>
            <div className="row">
              <button className="btn-container">7</button>
              <button className="btn-container">8</button>
              <button className="btn-container">9</button>
              <button className="btn-container operator">x</button>
            </div>  
            
            <div className="row">
              <button className="btn-container">4</button>
              <button className="btn-container">5</button>
              <button className="btn-container">6</button>
              <button className="btn-container operator">-</button>
            </div>

            <div className="row">
              <button className="btn-container">1</button>
              <button className="btn-container">2</button>
              <button className="btn-container">3</button> 
              <button className="btn-container operator">+</button> 
              </div>

              <div className="row">
              <button className="btn-container">±</button>
              <button className="btn-container">0</button>
              <button className="btn-container">,</button>
              <button className="btn-container operator">=</button> 
              </div>
          </div>
        </div>
      </div>);
  }
}


export default App;
