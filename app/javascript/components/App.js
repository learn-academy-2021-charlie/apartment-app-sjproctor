import React, { Component } from 'react'
import Header from './components/Header'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import Home from './pages/Home'

import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }
  componentDidMount(){
    this.readApartment()
  }
  readApartment = () => {
    fetch("/apartments")
    .then(response => response.json())
    .then(payload => this.setState({apartments: payload}))
    .catch(errors => console.log("index errors:", errors))
  }
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <Router>
        <Header
          logged_in={logged_in}
          sign_in_route={sign_in_route}
          sign_out_route={sign_out_route}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/apartmentIndex" render={(props) => {
            return <ApartmentIndex apartments={this.state.apartments} />
          }}/>
          <Route path="/apartmentShow/:id" render={ (props) => {
            let id = +props.match.params.id
            let apartment = this.state.apartments.find(a => a.id === id)
            return <ApartmentShow apartment={apartment} />
          }}/>
        </Switch>
      </Router>
    )
  }
}
export default App
