import { useParams } from "react-router-dom";

const countryDetails = () => {
	const { id } = useParams();
	return (
		<section>
			<h1>
				CountryDetails id is {id}
			</h1>
		</section>
	);
};

export default countryDetails;
