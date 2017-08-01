import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchFilm } from '../actions';
import Header from '../components/Header/Header';

function HeaderContainer (props) {
  const search = props.search;
  return <Header search={search} history={props.history} match={props.match}/>
}

HeaderContainer.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  search: PropTypes.func.isRequired
}

function mapDispatchToProps (dispatch) {
  return {
    search: (query) => dispatch(searchFilm(query))
  }
}

export default connect(null, mapDispatchToProps)(HeaderContainer);
