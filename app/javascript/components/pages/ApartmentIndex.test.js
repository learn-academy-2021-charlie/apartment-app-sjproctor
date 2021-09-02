import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentIndex from './ApartmentIndex'

Enzyme.configure({adapter: new Adapter()})

describe("When index renders", () => {
  it("displays a header", () => {
    const indexHeading = shallow(<ApartmentIndex />).find("h3")
    expect(indexHeading.text()).toEqual("All the Apartments")
  })
})
