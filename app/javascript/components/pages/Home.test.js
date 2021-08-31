import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'
import mockPic from '../fileMock.js'

Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", () => {
  it("displays an image", () => {
    const home = shallow(<Home />)
    expect(home.find("img").prop("src")).toEqual(mockPic);
  })
})
