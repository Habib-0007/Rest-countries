const Filter = () => {
	return (
		<section className="filter">
			<p className="search-container">
				<i className="fa fa-search"></i>
				<input
					type="text"
					placeholder="Search for a country"
				/>
			</p>
			<select className="filter-btn">
				<option value="">
					Filter by none
				</option>
				<option value="africa">
					Africa
				</option>
				<option value="america">
					America
				</option>
				<option value="asia">
					Asia
				</option>
				<option value="europe">
					Europe
				</option>
				<option value="oceania">
					Oceania
				</option>
			</select>
		</section>
	);
};

export default Filter;
