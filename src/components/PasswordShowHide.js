import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
// class PasswordShowHide extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			hidden: true,
// 			password: '',
// 		};
// 		this.handlePasswordChange = this.handlePasswordChange.bind(this);
// 		this.toggleShow = this.toggleShow.bind(this);
// 	}
// 	handlePasswordChange(e) {
// 		this.setState({ password: e.target.value });
// 	}
// 	toggleShow() {
// 		this.setState({ hidden: !this.state.hidden });
// 	}
// 	componentDidMount() {
// 		if (this.props.password) {
// 			this.setState({ password: this.props.password });
// 		}
// 	}
// 	render() {
// 		return (
// 			<Form.Group>
// 				<Form.Control
// 					type={this.state.hidden ? 'password' : 'text'}
// 					value={this.state.password}
// 					onChange={this.handlePasswordChange}
// 				/>
// 				<Button onClick={this.toggleShow} size='sm'>
// 					Show / Hide
// 				</Button>
// 			</Form.Group>
// 		);
// 	}
// }

const PasswordShowHide = ({ getPassword }, props) => {
	const [hidden, setHidden] = useState(true);
	const [password, setPassword] = useState('');

	const handleChange = (e) => {
		setPassword(e.target.value);
		getPassword(password);
	};

	return (
		<>
			<Form.Control
				type={hidden ? 'password' : 'text'}
				value={password}
				onChange={handleChange}
			/>
			<Button onClick={() => setHidden(!hidden)} size='sm'>
				<i className={hidden ? 'fa fa-eye' : 'fa fa-eye-slash'}></i>
			</Button>
		</>
	);
};
export default PasswordShowHide;
