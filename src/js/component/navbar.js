import React from "react";
import { Link } from "react-router-dom";
import starWars from "../../img/starWarsLoogo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
				<img style={{width: "7vw", minWidth: "100px"}} src={starWars} />
				</span>
			</Link>

			<div className="dropdown">
				<a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
					Dropdown link
				</a>

				<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
					<li><a className="dropdown-item" href="#">Action</a></li>
					<li><a className="dropdown-item" href="#">Another action</a></li>
					<li><a className="dropdown-item" href="#">Something else here</a></li>
				</ul>	
			</div>
			{/* <div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div> */}
		</nav>
	);
};
