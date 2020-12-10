import React, { useState, useEffect } from 'react';
import localityService from '../services/locality.service';

const CharacterDropDown = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		async function getCharacters() {
			// const response = await fetch('http://localhost:8080/api/states');
			const response = await localityService.getStates();
			console.log(response.data);
			setItems(
				response.data.map((data) => ({ label: data.s_name, value: data.s_id }))
			);
		}
		getCharacters();
	}, []);

	return (
		<select>
			{items.map(({ label, value }) => (
				<option key={value} value={value}>
					{label}
				</option>
			))}
		</select>
	);
};

export default CharacterDropDown;
