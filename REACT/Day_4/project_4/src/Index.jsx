import React, { Component } from 'react'

export class Index extends Component {
    constructor(){
        super();
        this.state = {
            items : 0
        }
        console.log("constructor called")
    }

    componentDidMount(){
        console.log("componentDidMount called")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate called")

    }

    componentWillUnmount(){
      console.log("componentWillUnmount called")
    }

    handleClick = ()=>{
        this.setState({items : this.state.items + 1})
    }
  render() {
    console.log("render called")
    return (
      <>
      <div>{this.state.items}</div>
      {/* <button onClick={this.handleClick}>Click here</button> */}
      </>
    )
  }
}

export default Index