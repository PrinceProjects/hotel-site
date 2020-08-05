import React from 'react';
import {Link} from 'react-router-dom';

const SideNav = (props) => {
	if (!props.open){
		return null;
	}
	return(
		<div className="side-nav">
			<Link className="nav-link" to="/"> Home </Link>
			<Link className="nav-link" to="/rooms">Rooms</Link>
			<Link className="nav-link" to="/gallery"> Gallery </Link>
		</div>

	)
}
	
	

export default SideNav;