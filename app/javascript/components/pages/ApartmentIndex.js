import React, { Component } from 'react'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { faHome, faCity } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class ApartmentIndex extends Component {
  render() {
    return (
      <div className="page-body">
        <h3>All the Apartments</h3>
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
                  <NavLink to={`/apartmentShow/${apartment.id}`}>
                    <Button>
                      More Info
                    </Button>
                  </NavLink>
                </Card>
              )
            })}
        </Row>
      </div>
    )
  }
}
export default ApartmentIndex
