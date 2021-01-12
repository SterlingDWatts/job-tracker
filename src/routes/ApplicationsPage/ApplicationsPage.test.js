import React from "react";
import ReactDOM from "react-dom";
import { render } from "enzyme";
import toJson from "enzyme-to-json";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import ApplicationsPage from "./ApplicationsPage";

describe("ApplicationsPage Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <ApplicationsPage />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const wrapper = render(
      <MemoryRouter initialEntries={["/?app=1"]}>
        <ApplicationsPage />
      </MemoryRouter>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
