import React, { useState, useEffect } from 'react';
import localityService from '../services/locality.service';

const CharacterDropDown = (props) => {
	const [states, setStates] = useState([]);
	const [cities, setCities] = useState([]);
	const [filteredCities, setFilteredCities] = useState([]);
	const [selectedCity, setChangeCity] = useState(null);

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
		console.log(e.target.value + ' c_id: ');
		// props.cityId = e.target.value;
		console.log(props.cityId);
	};

	console.log(filteredCities);
	console.log(props.setCityId);
	// console.log(selectedCity);

	return (
		<div>
			<select className='form-control' onChange={onChangeHandler}>
				<option defaultChecked>--Select State--</option>
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
				<option defaultChecked>--Select City--</option>
				{filteredCities.map(({ cityId, cityName }) => (
					<option key={cityId} value={cityId}>
						{cityName}
					</option>
				))}
			</select>
		</div>
	);
};

export default CharacterDropDown;
