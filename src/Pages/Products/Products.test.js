import React from "react";
import Products from "./index";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const component = shallow(<Products />);
  expect(component).toMatchSnapshot();
});

