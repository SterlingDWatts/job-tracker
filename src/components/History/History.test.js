import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { BrowserRouter } from "react-router-dom";
import History from "./History";

describe("History Component", () => {
  const columns = [
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
  ];
  const column = [
    { id: 0, date: new Date(2020, 4, 14) },
    { id: 4, date: new Date(2020, 4, 14) },
  ];
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <History columns={columns} column={column} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const wrapper = shallow(<History column={column} columns={columns} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
