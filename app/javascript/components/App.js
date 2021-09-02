import React, { Component } from 'react'
import Header from './components/Header'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import Home from './pages/Home'
import ProtectedApartment from './pages/ProtectedApartment'
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
  createApartment = (newApartment) => {
    fetch("/apartments", {
      body: JSON.stringify(newApartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if(response.status === 422){
        alert("There is something wrong with your submission.")
      }
      return response.json()
    })
    .then(() => this.readApartment())
    .catch(errors => console.log("create errors:", errors))
  }
  render() {
    return (
      <Router>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/apartmentindex" render={(props) => {
            return <ApartmentIndex apartments={this.state.apartments} />
          }}/>
          <Route path="/apartmentshow/:id" render={ (props) => {
            let id = +props.match.params.id
            let apartment = this.state.apartments.find(a => a.id === id)
            return <ApartmentShow apartment={apartment} />
          }}/>
          {this.props.logged_in &&
            <Route path="/apartmentnew" render={(props) => {
              return <ApartmentNew createApartment={this.createApartment} current_user={this.props.current_user} />
            }}/>
          }
          {this.props.logged_in &&
            <Route path="/myapartments" render={(props) => {
              let apartments = this.state.apartments.filter(a => a.id === this.props.current_user.id)
              return <ProtectedApartment apartments={apartments} />
            }}/>
          }
        </Switch>
      </Router>
    )
  }
}
export default App
