import React, { Component } from 'react'
import coloredDoors from '../assets/many-colorful-doors.jpeg'

class Home extends Component {
  render() {
    return (
      <>
        <img src={coloredDoors} alt="series of colorful doors" className="colored-doors"/>
      </>
    )
  }
}
export default Home
