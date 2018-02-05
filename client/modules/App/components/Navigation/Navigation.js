import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Navigation.css';
const Navigation = (props, context) => {
	return (
		<div className={styles['navigation']}>
	       <ul>
	            <li><Link to="/Home">Home</Link></li>
	            <li><Link to="/post">Post</Link></li>
	            <li><Link to="/About">About</Link></li>
	        </ul>
	        {props.children}
    	</div>
	)
};


Navigation.propTypes = {
};

export default Navigation;
