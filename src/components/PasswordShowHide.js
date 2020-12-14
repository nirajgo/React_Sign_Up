import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
class PasswordShowHide extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hidden: true,
			password: '',
		};
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.toggleShow = this.toggleShow.bind(this);
	}
	handlePasswordChange(e) {
		this.setState({ password: e.target.value });
	}
	toggleShow() {
		this.setState({ hidden: !this.state.hidden });
	}
	componentDidMount() {
		if (this.props.password) {
			this.setState({ password: this.props.password });
		}
	}
	render() {
		return (
			<Form.Group>
				<Form.Control
					type={this.state.hidden ? 'password' : 'text'}
					value={this.state.password}
					onChange={this.handlePasswordChange}
				/>
				<button onClick={this.toggleShow}>Show / Hide</button>
			</Form.Group>
		);
	}
}
export default PasswordShowHide;
