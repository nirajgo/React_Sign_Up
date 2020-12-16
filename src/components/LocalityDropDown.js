import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import localityService from '../services/locality.service';

const LocalityDropDown = (props) => {
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
		props.onChange(e);
	};

	return (
		<Form.Group>
			<Form.Label>Select Locality</Form.Label>
			<select className='form-control' onChange={onChangeHandler} required>
				<option value='' defaultChecked>
					--Select State--
				</option>
				{states.map(({ stateId, stateName }) => (
					<option key={stateId} value={stateId}>
						{stateName}
					</option>
				))}
			</select>
			<select
				className='form-control'
				onChange={handleCityIdChange}
				required
				name='cityId'>
				<option value='' defaultChecked>
					--Select City--
				</option>
				{filteredCities.map(({ cityId, cityName }) => (
					<option key={cityId} value={cityId}>
						{cityName}
					</option>
				))}
			</select>
		</Form.Group>
	);
};

export default LocalityDropDown;
