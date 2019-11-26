import React from "react";
import Banner from "./index";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const component = shallow(<Banner />);
  expect(component).toMatchSnapshot();
});
