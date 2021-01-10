import React, { createContext, Component } from "react";
import { v4 as uuidv4 } from "uuid";

const ApplicationsContext = createContext({
  applications: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setApplications: () => {},
  removeApplication: () => {},
  addStatus: () => {},
});

export default ApplicationsContext;

export class ApplicationsProvider extends Component {
  state = {
    error: null,
    applications: [
      {
        id: uuidv4(),
        column: [{ id: 0, date: new Date(2020, 4, 13) }],
        company: "Ultimate Software",
        job: "Sotware Engineer 2",
        site: "https://www.ultimatesoftware.com/",
      },
      {
        id: uuidv4(),
        column: [
          { id: 0, date: new Date(2020, 4, 14) },
          { id: 4, date: new Date(2020, 4, 14) },
        ],
        company: "Art & Logic",
        job: "Full Stack Web Developer",
        site: "https://artandlogic.com/",
      },
      {
        id: uuidv4(),
        column: [{ id: 0, date: new Date(2020, 4, 14) }],
        company: "GitStart",
        job: "Full Stack JavaScript Developer - Junior",
        site: "https://www.gitstart.com/",
      },
      {
        id: uuidv4(),
        column: [{ id: 0, date: new Date(2020, 4, 14) }],
        company: "CyberCoders",
        job: "Web Developer",
        site: "https://www.cybercoders.com/",
      },
      {
        id: uuidv4(),
        column: [{ id: 0, date: new Date(2020, 4, 14) }],
        company: "Digital Media Solutions",
        job: "Frontend Developer",
        site: "https://digitalmediasolutions.com/",
      },
      {
        id: uuidv4(),
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
  };

  removeApplication = (id) => {
    let { applications } = this.state;
    applications = applications.filter((app) => app.id !== id);
    this.setApplications(applications);
  };

  addStatus = (appId, statusId) => {
    const { applications } = this.state;
    statusId = parseInt(statusId);
    const status = {
      id: statusId,
      date: new Date(),
    };
    const column = applications.find((app) => app.id === appId).column;
    column.push(status);
    this.setState({
      applications: [...this.state.applications],
    });
  };

  getApplicationIdx = (id) => {
    const { applications } = this.state;
    return applications.findIndex((app) => app.id === id);
  };

  render() {
    const value = {
      applications: this.state.applications,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setApplications: this.setApplications,
      removeApplication: this.removeApplication,
      addStatus: this.addStatus,
    };
    return (
      <ApplicationsContext.Provider value={value}>
        {this.props.children}
      </ApplicationsContext.Provider>
    );
  }
}
