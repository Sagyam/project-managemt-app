import React from "react";

import logo from "./assets/logo.png";

function Header() {
	return (
		<header className="navbar bg-light mb-4 p-0">
			<div className="container">
				<a className="navbar-brand" href="/">
					<div className="d-flex">
						<img src={logo} className="mr-2" alt="logo" />
						<div className="">PMA</div>
					</div>
				</a>
			</div>
		</header>
	);
}

export default Header;
