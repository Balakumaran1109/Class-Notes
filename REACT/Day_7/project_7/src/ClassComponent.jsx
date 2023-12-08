import React, { Component } from 'react'

export class ClassComponent extends Component {
    componentDidMount(){
        console.log("Component is mounted")
    }
    componentDidUpdate(){
        console.log("Component is updated")
    }
    componentWillUnmount(){
        console.log("component is removed")
    }
  render() {
    return (
      <div>ClassComponent</div>
    )
  }
}

export default ClassComponent