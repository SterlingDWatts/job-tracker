import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Options from "./Options";

describe("Options Component", () => {
  const columns = [
    [
      { id: 0, name: "Applied" },
      { id: 1, name: "Intro Interview" },
      { id: 2, name: "Recruiter Call" },
      { id: 3, name: "Sent Follow-up" },
      { id: 4, name: "Coding Challenge" },
      { id: 5, name: "Sent Follow-up" },
      { id: 6, name: "Technical Interview" },
      { id: 7, name: "Sent Follow-up" },
      { id: 8, name: "Onsite Interview" },
      { id: 9, name: "Offer Letter Date" },
    ],
  ];
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <MemoryRouter initialEntries={[{ pathname: "/applications/4" }]}>
          <Options options={columns} selected={4} />
        </MemoryRouter>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const wrapper = shallow(
      <MemoryRouter
        initialEntries={[{ pathname: "/applications/4", key: "1" }]}
      >
        <Options options={columns} selected={4} />
      </MemoryRouter>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
