import React from "react";
import Loaders from "./index";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const component = shallow(<Loaders />);
  expect(component).toMatchSnapshot();
});
