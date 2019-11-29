import React, {Component} from "react";
import Products from "./index";
import { shallow, mount } from "enzyme";

it("renders without crashing", () => {
  const component = shallow(<Products />);
  expect(component).toMatchSnapshot();
});

it("should update state when the load more button is clicked", () => {
  const component = mount(<Products />);
  component.find("button.btn").simulate("click");

  expect(component.state("visible")).toEqual(24);
  component.unmount();
});

// it("should call get product when the component is mounted", () => {
//     const component = mount(<Products/>);
//     const spy = jest.spyOn(Component.prototype, "getProduct");
//     component.instance().getProduct();
//     expect(spy).toHaveBeenCalled();
// })
