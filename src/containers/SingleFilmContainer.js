import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleFilm } from '../actions';
import SingleFilm from '../components/SingleFilm/SingleFilm';

class SingleFilmContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log( this.props.fetchSingleFilm(id) );
    // console.log( this.props.fetchTrailers(id) );
  }
  render() {
    return (
      <SingleFilm />
    );
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchSingleFilm}, dispatch);
}

export default connect(null, mapDispatchToProps)(SingleFilmContainer);
