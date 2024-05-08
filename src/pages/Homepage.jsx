import Filter from "../components/Filter";
import useFetch from "../components/useFetch";
import CountriesList from "../components/CountriesList";

const Homepage = () => {
	const { data, isPending, error } =
		useFetch("../../data.json");
	return (
		<section className="homepage">
			<section className="subhomepage">
				<Filter />
				{isPending && (
					<section>
						<h1>Loading...</h1>
					</section>
				)}
				{error && (
					<section>
						<h1>{error}</h1>
					</section>
				)}
				{data && (
					<CountriesList
						data={data}
					/>
				)}
			</section>
		</section>
	);
};

export default Homepage;
