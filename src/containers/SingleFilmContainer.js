import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleFilm } from '../actions';
import SingleFilm from '../components/SingleFilm/SingleFilm';

class SingleFilmContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchSingleFilm(id);
  }
  render() {
    return (
      <SingleFilm {...this.props}/>
    );
  }
}

function mapStateToProps (state) {
  return {
    film: state.singleFilm.film,
    error: state.singleFilm.error,
    isFetching: state.singleFilm.isFetching,
    trailers: state.singleFilm.trailers
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchSingleFilm}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleFilmContainer);
