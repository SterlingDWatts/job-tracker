import React, { createContext, Component } from "react";

const ApplicationsContext = createContext({
  applications: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setApplications: () => {},
  addStatus: () => {},
});

export default ApplicationsContext;

export class ApplicationsProvider extends Component {
  state = {
    error: null,
    applications: [
      {
        id: 0,
        column: [{ id: 0, date: new Date(2020, 4, 13) }],
        company: "Ultimate Software",
        job: "Sotware Engineer 2",
        site: "https://www.ultimatesoftware.com/",
      },
      {
        id: 1,
        column: [
          { id: 0, date: new Date(2020, 4, 14) },
          { id: 3, date: new Date(2020, 4, 14) },
        ],
        company: "Art & Logic",
        job: "Full Stack Web Developer",
        site: "https://artandlogic.com/",
      },
      {
        id: 2,
        column: [{ id: 0, date: new Date(2020, 4, 14) }],
        company: "GitStart",
        job: "Full Stack JavaScript Developer - Junior",
        site: "https://www.gitstart.com/",
      },
      {
        id: 3,
        column: [{ id: 0, date: new Date(2020, 4, 14) }],
        company: "CyberCoders",
        job: "Web Developer",
        site: "https://www.cybercoders.com/",
      },
      {
        id: 4,
        column: [{ id: 0, date: new Date(2020, 4, 14) }],
        company: "Digital Media Solutions",
        job: "Frontend Developer",
        site: "https://digitalmediasolutions.com/",
      },
      {
        id: 5,
        column: [{ id: 0, date: new Date(2020, 11, 1) }],
        company: "Fake",
        job: "Fake",
        site: "https://www.google.com",
      },
    ],
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setApplications = (applications) => {
    this.setState({ applications });
  }

  addStatus = (appId, statusId) => {
    const { applications } = this.state;
    statusId = parseInt(statusId);
    appId = parseInt(appId)
    const status = {
      id: statusId,
      date: new Date(),
    };
    const column = applications.find((app) => app.id === appId).column;
    column.push(status);
    this.setState({
      applications: [...this.state.applications]
    });
  }

  render() {
    const value = {
      applications: this.state.applications,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setApplications: this.setApplications,
      addStatus: this.addStatus,
    };
    return (
      <ApplicationsContext.Provider value={value}>
        {this.props.children}
      </ApplicationsContext.Provider>
    );
  }
}
