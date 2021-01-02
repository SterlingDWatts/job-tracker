import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { BrowserRouter } from "react-router-dom";
import AddApplication from "./AddApplication";

describe("AddApplication Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <AddApplication />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const wrapper = shallow(<AddApplication />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
