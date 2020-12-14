import React, { useState, useEffect } from 'react';
import localityService from '../services/locality.service';

const CharacterDropDown = (props) => {
	const [states, setStates] = useState([]);
	const [cities, setCities] = useState([]);
	// const [selectedCity, setChangeCity] = useState(null);
	const [filteredCities, setFilteredCities] = useState([]);

	useEffect(() => {
		async function getLocality() {
			const stateResponse = await localityService.getStates();
			const cityResponse = await localityService.getCitiesByState();

			setStates(
				stateResponse.data.map((data) => ({
					stateName: data.s_name,
					stateId: data.s_id,
				}))
			);
			setCities(
				cityResponse.data.map((data) => ({
					cityName: data.c_name,
					cityId: data.c_id,
					cityStateId: data.s_id,
				}))
			);
		}

		getLocality();
	}, []);

	const onChangeHandler = (event) => {
		// console.log(cities.filter((city) => city.cityStateId === selectedState));
		const filtered = cities.filter(
			(city) => city.cityStateId === parseInt(event.target.value)
		);
		setFilteredCities(filtered);
	};

	const handleLanguageCode = (e) => {
		console.log(e.target.value);
		let lang = parseInt(e.target.value);
		this.props.getCityId(lang);
		console.log(e.target.value);
	};

	console.log(filteredCities);
	// console.log(selectedCity);

	return (
		<div>
			<select className='form-control' onChange={onChangeHandler}>
				{states.map(({ stateId, stateName }) => (
					<option key={stateId} value={stateId}>
						{stateName}
					</option>
				))}
			</select>
			<select
				className='form-control'
				// onChange={(e) => setChangeCity(e.target.value)}
				onChange={handleLanguageCode}>
				{filteredCities.map(({ cityId, cityName }) => (
					<option key={cityId} value={cityId} defaultChecked>
						{cityName}
					</option>
				))}
			</select>
		</div>
	);
};

export default CharacterDropDown;
