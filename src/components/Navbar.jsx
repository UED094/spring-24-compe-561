const Navbar = () => {
	return (
		<nav className="nav">
			<ul className="navbar">
				<li className="navbar-item">
					<a
						className="navbar-link"
						href="index.html"
					>
						Home
					</a>
				</li>
				<li className="navbar-item">
					<a
						className="navbar-link"
						href="about.html"
					>
						About
					</a>
				</li>
				<li className="navbar-item">
					<a
						className="navbar-link"
						href="support.html"
					>
						Support
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
