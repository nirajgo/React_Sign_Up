import React, { useState, useEffect } from 'react';
import localityService from '../services/locality.service';

const CharacterDropDown = () => {
	const [states, setStates] = useState([]);
	const [cities, setCities] = useState([]);
	const [selectedState, setChangeState] = useState(null);
	const [selectedCity, setChangeCity] = useState(null);
	const [filteredCities, setFilteredCities] = useState([]);

	useEffect(() => {
		async function getLocality() {
			const stateResponse = await localityService.getStates();
			const cityResponse = await localityService.getCities();
			// console.log(stateResponse.data);
			// console.log(cityResponse.data);

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
		setChangeState(event.target.value);
		let mycity = [];
		for (let i = 0; i < cities.length; i++) {
			if (cities[i].cityStateId === selectedState) {
				mycity.push(cities[i]);
				console.log(cities[i].cityName);
			}
		}
		setFilteredCities(mycity);
	};
	console.log(filteredCities);
	// const newCities = cities.find((city) => city.s_id === selectedState).states;

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
				onChange={(e) => setChangeCity(e.target.value)}>
				{cities.map(({ cityId, cityName }) => {
					return (
						<option key={cityId} value={cityId}>
							{cityName}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default CharacterDropDown;
