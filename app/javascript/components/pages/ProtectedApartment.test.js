import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProtectedApartment from './ProtectedApartment'

Enzyme.configure({adapter: new Adapter()})

describe("When protected index renders", () => {
  it("displays a header", () => {
    const indexHeading = shallow(<ProtectedApartment />).find("h3")
    expect(indexHeading.text()).toEqual("My Apartments")
  })
})
