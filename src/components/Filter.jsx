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
			<button className="filter-btn">
				Filter by region
				<i className="fa fa-chevron-down"></i>
			</button>
		</section>
	);
};

export default Filter;
