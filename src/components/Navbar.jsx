import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="nav">
			<ul className="navbar">
				<li className="navbar-item">
					<Link
						to="/"
						className="navbar-link"
					>
						Home
					</Link>
				</li>
				<li className="navbar-item">
					<Link
						to="/about"
						className="navbar-link"
					>
						About
					</Link>
				</li>
				<li className="navbar-item">
					<Link
						to="/support"
						className="navbar-link"
					>
						Support
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
