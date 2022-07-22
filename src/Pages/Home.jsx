import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {
  componentDidMount(){
    document.title = "Home"
  }
  render() {
    return (
      <Link to="/"></Link>
    )
  }
}

export default Home