import React, { Component } from 'react'

export class Index extends Component {
    constructor(){
        super();
        this.state = {items: 0}
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

    buttonClick = ()=>{
        this.setState({items: this.state.items + 1})
    }

  render() {
    console.log("render called")
    return (
      <>
      <button onClick={this.buttonClick}>Count{this.state.items}</button>
      </>
    )
  }
}

export default Index