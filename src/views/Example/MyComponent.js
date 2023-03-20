import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  //key:value
  state = {
    arrJobs: [
      { id: "abcJob1", title: "Developers", salary: "500" },
      { id: "abcJob2", title: "Testers", salary: "400" },
      { id: "abcJob3", title: "Project managers", salary: "1000" },
    ],
  };
  //Thêm hàm add new job
  addNewJob = (job) => {
    console.log("check job from parent: ", job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  /* 
    JSX => return block
    fragment
    */

  //re-render
  // hàm addnewJob có tham số truyền vào nên không để dấu () và không dùng arrow function
  render() {
    console.log(">>> call render: ", this.state);
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent arrJobs={this.state.arrJobs} />
      </>
    );
  }
}

export default MyComponent;
