import React from "react";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import configureMockStore from "redux-mock-store";

import Dashboard from "../dashboard";

const mockStore = configureMockStore([]);

describe("DashBoard Component", () => {
  const store = mockStore({
    cart: {
      selected: []
    },
    products: {
      data: [],
      isLoading: false,
      hasLoaded: false,
      error: {
        hasError: false,
        error: ''
      }
    }
  });
  test("renders Dashboard component", () => {
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <Dashboard />
        </Router>
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Renders 2 children", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.children()).toHaveLength(2);
  });
});
