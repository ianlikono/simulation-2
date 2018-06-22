import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getHouses } from "../../ducks/reducer";

class Dashboard extends Component {
  componentDidMount() {
    !this.props.isLoading && this.props.getHouses();
  }
  render() {
    const housesDisplay = this.state.houses.map(house => (
      <p key={house.house_id}>{house.name}</p>
    ));
    return (
      <div>
        <h1>Dashboard Component</h1>
        {housesDisplay}
        <Link to="/wizard">
          <button>Add New Property</button>
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
  { getHouses }
)(Dashboard);
