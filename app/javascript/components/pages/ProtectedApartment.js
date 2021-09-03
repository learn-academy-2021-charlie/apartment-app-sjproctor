import React, { Component } from 'react'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { faHome, faCity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ProtectedApartment extends Component {
  render() {
    return (
      <div className="page-body">
        <h3>My Apartments</h3>
        <br />
        <br />
        <Row className="cards">
          {this.props.apartments && this.props.apartments.map(apartment => {
            return (
              <Card key={apartment.id}>
                <div>
                  <FontAwesomeIcon icon={faHome} className="fa-icon" />
                    {apartment.street}
                </div>
                <div>
                  <FontAwesomeIcon icon={faCity} className="fa-icon" />
                    {apartment.city}, {apartment.state}
                </div>
                <br />
                <NavLink to={`/apartmentshow/${apartment.id}`}>
                  <Button>
                    More Info
                  </Button>
                </NavLink>
                <br />
                <br />
                <NavLink to={`/apartmentedit/${apartment.id}`}>
                  <Button>Edit Listing</Button>
                </NavLink>
              </Card>
            )
          })}
        </Row>
      </div>
    )
  }
}
export default ProtectedApartment
