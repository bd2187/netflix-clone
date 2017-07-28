import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovieByGenre } from '../actions';

class DocumentariesContainer extends Component {
  componentDidMount() {
    this.props.fetchMovieByGenre(99);
  }
  render() {
    return (
      <div>
        Documentaries
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchMovieByGenre}, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(DocumentariesContainer);
