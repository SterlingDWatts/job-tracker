import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { BrowserRouter } from "react-router-dom";
import Card from "./Card";

describe("Card Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Card
          application={{
            id: "1",
            column: [{ id: 0, date: new Date(2020, 4, 13) }],
            company: "Ultimate Software",
            job: "Sotware Engineer 2",
            site: "https://www.ultimatesoftware.com/",
          }}
        />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const wrapper = shallow(
      <Card
        application={{
          id: "1",
          column: [{ id: 0, date: new Date(2020, 4, 13) }],
          company: "Ultimate Software",
          job: "Sotware Engineer 2",
          site: "https://www.ultimatesoftware.com/",
        }}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
