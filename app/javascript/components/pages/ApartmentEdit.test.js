import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentEdit from './ApartmentEdit'

Enzyme.configure({adapter: new Adapter()})

describe("When ApartmentEdit renders", () => {
  let apartment = {
      id: 1,
      street: '123 Street',
      city: 'SD',
      state: 'CA',
      manager: 'Joe',
      email: 'joe@testing.com',
      price: '1000',
      bedrooms: 2,
      bathrooms: 3,
      pets: 'all pets welcome',
      user_id: 1
    }
  let user = {id: 1}
  it("displays a form", () => {
    const aptNew = shallow(<ApartmentEdit current_user={user} apartment={apartment} />)
    const formGroup = aptNew.find("FormGroup")
    expect(formGroup.length).toEqual(9)
    const label = aptNew .find("Label")
    expect(label.length).toEqual(9)
    const input = aptNew .find("Input")
    expect(input.length).toEqual(9)
  })
})
