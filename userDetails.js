import React, { Component } from "react";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
      // age: "",
      // gender: "",
      // dob: "",
      // mob: "",
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Enter Information</h3>

          <div className="mb-3">
            <label>Age</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Age"
              onChange={(e) => this.setState({ age: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Gender</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Gender"
              onChange={(e) => this.setState({ gender: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>DOB</label>
            <input
              type="date"
              className="form-control"
              placeholder="Enter DOB"
              onChange={(e) => this.setState({ dob: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label>Mobile</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Mobile"
              onChange={(e) => this.setState({ mob: e.target.value })}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            {/* <button className="btn btn-primary" onClick={logout}> */}
            Logout
            {/* </button> */}
          </div>
        </form>
      </div>
    );
  }
}
