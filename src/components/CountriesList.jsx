const CountriesList = ({ data }) => {
//	data = data.splice(0, 20);
	return (
		<section className="countries-list">
			{data.map(value => {
				return (
					<section key={value.name}>
						<img
							src={value.flags.svg}
							alt={value.name}
						/>
						<div className="details">
							<h1>{value.name}</h1>
							<div className="others">
								<div>
									<strong>
										Population:
									</strong>
									<p>
										{value.population}
									</p>
								</div>
								<div>
									<strong>
										Region:
									</strong>
									<p>{value.region}</p>
								</div>
								<div>
									<strong>
										Capital:
									</strong>
									<p>{value.capital}</p>
								</div>
							</div>
						</div>
					</section>
				);
			})}
		</section>
	);
};

export default CountriesList;
