import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentNew from './ApartmentNew'

Enzyme.configure({adapter: new Adapter()})

describe("When ApartmentNew renders", () => {
  let user = {id: 1}
  it("displays a form", () => {
    const aptNew = shallow(<ApartmentNew current_user={user}/>)
    const formGroup = aptNew.find("FormGroup")
    expect(formGroup.length).toEqual(9)
    const label = aptNew .find("Label")
    expect(label.length).toEqual(9)
    const input = aptNew .find("Input")
    expect(input.length).toEqual(9)
  })
})
