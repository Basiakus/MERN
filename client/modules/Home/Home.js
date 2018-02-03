import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
//import styles from './Home.css';

class Home extends Component {
  render() {
    return (
    	<div>
    		<h2>Strona startowa HOME</h2>
    		<p>Komponent "Home.js"</p>
    	</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Home.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
