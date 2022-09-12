
import {Component} from 'react'
export default class Child extends Component {
 constructor() {
   super()
    this.state = {
      childCounter: 0
    }
  }

  incrementCount(){
    this.setState({
      childCounter:this.state.childCounter+1
    })
  }
render(){
    
  return (
    <div>
      This is the Child Component
      <p><button onClick={()=> this.incrementCount()}>Increment Child component</button></p>


      <pre>
          Child Counter : {this.state.childCounter}
          <br/>
          Parent Counter : {this.props.appCounter}
      </pre>
    </div>
  )
  } 
}