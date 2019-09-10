import React from "react";
import { shallow } from "enzyme";

import Dashboard from "../dashboard";

describe("DashBoard Component", () => {
  const wrapper = shallow(<Dashboard />);

  test("renders Dashboard component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
