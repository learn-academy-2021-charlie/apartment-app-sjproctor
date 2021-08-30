import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <>
        <header>
          <NavLink to="/">
            <h1>Apartment App</h1>
          </NavLink>
          <div className="nav-links">
            <ul>
              <NavLink to="/apartmentIndex">See All the Apartments</NavLink>
            </ul>
            <ul>
              {logged_in &&
                <a href={sign_out_route}>Sign Out</a>
              }
              {!logged_in &&
                <a href={sign_in_route}>Sign In</a>
              }
            </ul>
          </div>
        </header>
      </>
    )
  }
}
export default Header
