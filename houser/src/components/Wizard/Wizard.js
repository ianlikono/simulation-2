import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createHouse } from "../../ducks/reducer";

class Wizard extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipCode: 0
    };
  }
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = () => {
    this.props.createHouse();
  };

  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={this.onChangeHandler}
          name="name"
          placeholder="name"
          type="text"
        />
        <input
          value={this.state.address}
          onChange={this.onChangeHandler}
          name="address"
          placeholder="address"
          type="text"
        />
        <input
          value={this.state.city}
          onChange={this.onChangeHandler}
          name="city"
          placeholder="city"
          type="text"
        />
        <input
          value={this.state.state}
          onChange={this.onChangeHandler}
          name="state"
          placeholder="state"
          type="text"
        />
        <input
          value={this.state.zipCode}
          onChange={this.onChangeHandler}
          name="zipCode"
          placeholder="zipCode"
          type="text"
        />
        <button onClick={this.onSubmit}>Submit</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  { createHouse }
)(Wizard);
