import "./styles.css";
import { Component } from 'react' 
import Child from './Child'
export default class App extends Component {
  constructor() {
   super()
    this.state = {
      appCounter: 0
    }
  }
  incrementCount(){
    this.setState({
      appCounter:this.state.appCounter+1
    })
  }
  render(){
    return (
    <div className="App">
      This is the parent component..!!!

        <p><button onClick={()=> this.incrementCount()}>Increment Parent component</button></p>
     <Child appCounter = {this.state.appCounter}></Child>
    </div>
  );
}
}
