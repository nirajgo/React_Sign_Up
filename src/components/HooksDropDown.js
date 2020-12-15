import React, { useState, useEffect } from 'react';
import localityService from '../services/locality.service';

const CharacterDropDown = ({ getValue }) => {
	const [states, setStates] = useState([]);
	const [cities, setCities] = useState([]);
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
		const filtered = cities.filter(
			(city) => city.cityStateId === parseInt(event.target.value)
		);
		setFilteredCities(filtered);
	};

	const handleCityIdChange = (e) => {
		const cityValue = parseInt(e.target.value);
		getValue(cityValue);
	};

	return (
		<div>
			<select className='form-control' onChange={onChangeHandler} required>
				<option defaultChecked>--Select State--</option>
				{states.map(({ stateId, stateName }) => (
					<option key={stateId} value={stateId}>
						{stateName}
					</option>
				))}
			</select>
			<select className='form-control' onChange={handleCityIdChange} required>
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
