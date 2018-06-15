import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchPets } from '../actions';
import PetsNew from './PetsNew';
import PetsShow from './PetsShow';
import PetsList from '../components/PetsList';

class PetsPage extends Component {

  componentDidMount() {
    this.props.onFetchPets();
  }

  render() {
      const { pets, match } = this.props
      console.log("[containers/PetsPage] this.props:", this.props)
    return (
      <div>
        <PetsList pets={pets} />
        <Switch>
          <Route path={`${match.url}/new`} component={PetsNew} />
          <Route path={`${match.url}/:petId`} component={PetsShow} />
        </Switch>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    pets: state.pets
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchPets: () => dispatch(fetchPets())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PetsPage);
