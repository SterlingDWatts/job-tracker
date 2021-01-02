import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { BrowserRouter } from "react-router-dom";
import Column from "./Column";

describe("Column Comopnent", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Column />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const wrapper = shallow(<Column id={0} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
