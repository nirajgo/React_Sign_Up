import React from 'react';
import { Form } from 'react-bootstrap';

class DropDown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: [],
			states: [],
			cities: [],
			selectedCountry: '--Choose Country--',
			selectedState: '--Choose State--',
		};
		this.changeCountry = this.changeCountry.bind(this);
		this.changeState = this.changeState.bind(this);
	}

	componentDidMount() {
		this.setState({
			countries: [
				{
					name: 'Germany',
					states: [
						{
							name: 'A',
							cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'],
						},
					],
				},
				{ name: 'Spain', states: [{ name: 'B', cities: ['Barcelona'] }] },
				{ name: 'USA', states: [{ name: 'C', cities: ['Downers Grove'] }] },
				{ name: 'Mexico', states: [{ name: 'D', cities: ['Puebla'] }] },
				{
					name: 'India',
					states: [
						{ name: 'E', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore'] },
					],
				},
			],
		});
	}

	changeCountry(event) {
		this.setState({ selectedCountry: event.target.value });
		this.setState({
			states: this.state.countries.find(
				(country) => country.name === event.target.value
			).states,
		});
	}

	changeState(event) {
		this.setState({ selectedState: event.target.value });
		const stats = this.state.countries.find(
			(country) => country.name === this.state.selectedCountry
		).states;
		this.setState({
			cities: stats.find((stat) => stat.name === event.target.value).cities,
		});
	}

	render() {
		return (
			<>
				<Form>
					<Form.Group>
						<Form.Label>Country</Form.Label>
						<select
							class='form-control'
							placeholder='Country'
							value={this.state.selectedCountry}
							onChange={this.changeCountry}>
							<option>{this.state.selectedCountry}</option>
							{this.state.countries.map((e, key) => {
								return <option key={key}>{e.name}</option>;
							})}
						</select>
						<br></br>
						<select
							placeholder='State'
							class='form-control'
							value={this.state.selectedState}
							onChange={this.changeState}>
							<option>--Choose State--</option>
							{this.state.states.map((e, key) => {
								return <option key={key}>{e.name}</option>;
							})}
						</select>

						<select placeholder='City' class='form-control'>
							<option>--Choose City--</option>
							{this.state.cities.map((e, key) => {
								return <option key={key}>{e}</option>;
							})}
						</select>
					</Form.Group>
				</Form>
			</>
		);
	}
}

export default DropDown;
