import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
  //key:value
  state = {
    firstName: "",
    lastName: "",
    arrJobs: [
      { id: "abcJob1", title: "Developers", salary: "500" },
      { id: "abcJob2", title: "Testers", salary: "400" },
      { id: "abcJob3", title: "Project managers", salary: "1000" },
    ],
  };

  /* 
    JSX => return block
    fragment
    */

  //re-render
  render() {
    console.log(">>> call render: ", this.state);
    return (
      <>
        <AddComponent />
        <ChildComponent
          name={this.state.firstName}
          age={"25"}
          address={"Ha noi"}
          arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}

export default MyComponent;
