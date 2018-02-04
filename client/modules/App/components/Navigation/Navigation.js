import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Navigation.css';
const Navigation = (props, context) => {
	return (
		<div className={styles['navigation']}>
	       <ul>
	            <li><Link to="/Home"><a>Home</a></Link></li>
	            <li><Link to="/About"><a>About</a></Link></li>
	        </ul>
	        {props.children}
    	</div>
	)
};


Navigation.propTypes = {
};

export default Navigation;
