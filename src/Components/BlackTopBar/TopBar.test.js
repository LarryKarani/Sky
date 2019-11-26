import React from "react";
import TobBar from "./index";
import { shallow } from "enzyme";


it("renders without crashing", () => {
  const component = shallow(<TobBar />);
  expect(component).toMatchSnapshot();  
});
