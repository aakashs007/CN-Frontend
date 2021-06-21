import React from 'react';
import './style.scss';

const Navbar = (props) => {
	return (
		<div className="mainnav">
			<img className="ml-3" src="/cn_small.jpeg" width="40" height="auto" />

			<span className="ml-4">
				{props.heading || ''}
      </span>

			<button className="float-right mr-4 logout-btn">
				Logout
			</button>
		</div>
	);
}

export default Navbar;