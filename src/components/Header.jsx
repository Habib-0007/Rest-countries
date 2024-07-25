const Header = ({
	lightmode,
	setLightmode,
}) => {
	return (
		<header>
			<section>
				<p>Where in the world?</p>
				<p
					onClick={() => {
						if (lightmode === "light") {
							
						setLightmode("dark");
						} else {
						setLightmode("light");
					}}}
				>
					<i className="far fa-moon"></i>{" "}
					Dark Mode
				</p>
			</section>
		</header>
	);
};

export default Header;
