import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import userService from '../services/user.service';
import './signup.css';
import CharacterDropDown from './HooksDropDown';

export class SignUp extends React.Component {
	constructor() {
		super();
		this.state = {
			firstName: null,
			lastName: null,
			email: null,
			password: null,
			confirmPassword: null,
			dateOfBirth: null,
			cityId: 1,
			securityKeyword: null,
			fileUpload: null,
			errors: {
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				confirmPassword: '',
				dateOfBirth: '',
				fileUpload: '',
			},
			handleLanguageCode: function (getId) {
				this.setState({ cityId: getId });
			},
		};
	}

	//handlechange
	handleChange = (event) => {
		event.preventDefault();
		//destructuring

		const { name, value } = event.target;
		let errors = this.state.errors;
		switch (name) {
			case 'firstName':
				errors.firstName =
					value.length < 2
						? 'First name must be at least 2 characters long!'
						: validName.test(value)
						? ''
						: 'Name is not valid';
				break;
			case 'lastName':
				errors.lastName =
					value.length < 2
						? 'Last name must be at least 2 characters long!'
						: validName.test(value)
						? ''
						: 'Name is not valid';
				break;
			case 'email':
				errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
				break;
			case 'password':
				errors.password = validPassword.test(value)
					? ''
					: 'Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:';
				break;
			case 'confirmPassword':
				const pass1 = this.state.password;
				const pass2 = this.state.confirmPassword;
				errors.confirmPassword = pass1.match(pass2)
					? ''
					: 'Password do not match!';
				break;
			case 'dateOfBirth':
				const permittedAge = 21;
				const totalDaysToAge = permittedAge * 365;
				errors.dateOfBirth =
					validDate(value) > totalDaysToAge
						? ''
						: 'Date of birth is not valid!';
				break;
			case 'fileUpload':
				errors.fileUpload = validFileExtension.test(value)
					? ''
					: 'Invalid file type';
				break;
			default:
				break;
		}

		this.setState({ errors, [name]: value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		let data = {
			fname: this.state.firstName,
			lname: this.state.lastName,
			email: this.state.email,
			password: this.state.password,
			dob: this.state.dateOfBirth,
			cityId: this.state.cityId,
			certificates: this.state.fileUpload,
			mothername: this.state.securityKeyword,
		};
		if (validateForm(this.state.errors)) {
			console.log(
				'Valid Form',
				this.state.dateOfBirth + ' c_id' + this.state.cityId
			);
			userService
				.createUser(data)
				.then(() => {
					console.info('Valid Form', this.state.dateOfBirth);
				})
				.catch((e) => {
					console.log(e);
				});
		} else {
			console.error('Invalid Form');
		}
	};

	render() {
		const { errors } = this.state;
		return (
			<Container className='signUpForm'>
				<Form onSubmit={this.handleSubmit}>
					<h1>Create an account</h1>
					<h6>
						Already a member? <a href='./success.html'> Login here.</a>
					</h6>
					<Form.Group>
						<Form.Label>First name</Form.Label>
						<Form.Control
							type='text'
							name='firstName'
							onChange={this.handleChange}
							required
							autoFocus
						/>
						{errors.firstName.length > 0 && (
							<span className='error'>{errors.firstName}</span>
						)}
					</Form.Group>
					<Form.Group>
						<Form.Label>Last name</Form.Label>
						<Form.Control
							type='text'
							name='lastName'
							onChange={this.handleChange}
							required
						/>
						{errors.lastName.length > 0 && (
							<span className='error'>{errors.lastName}</span>
						)}
					</Form.Group>
					<Form.Group>
						<Form.Label>Email</Form.Label>
						<Form.Control
							type='email'
							name='email'
							onChange={this.handleChange}
							required
						/>
						{errors.email.length > 0 && (
							<span className='error'>{errors.email}</span>
						)}
					</Form.Group>
					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							name='password'
							onChange={this.handleChange}
							required
						/>
						{errors.password !== null && (
							<span className='error'>{errors.password}</span>
						)}
					</Form.Group>
					<Form.Group>
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							type='password'
							name='confirmPassword'
							onChange={this.handleChange}
							required
						/>
						{errors.confirmPassword !== null && (
							<span className='error'>{errors.confirmPassword}</span>
						)}
					</Form.Group>
					<Form.Group>
						<Form.Label>Date of Birth</Form.Label>
						<Form.Control
							type='date'
							name='dateOfBirth'
							onChange={this.handleChange}
							required
						/>
						<small>Age must be 21 years and above.</small>
						{errors.dateOfBirth.length > 0 && (
							<p className='error'>{errors.dateOfBirth}</p>
						)}
					</Form.Group>
					<Form.Group>
						<Form.Label>Select Locality</Form.Label>
						{/* <select
							className='form-control'
							onChange={this.handleChange}
							name='localState'>
							<option defaultValue>Select State</option>
							{local_states.map((local_state) => (
								<option key={local_state}>{local_state}</option>
							))}
						</select> */}
						<CharacterDropDown
							cityId={this.state.cityId}
							setCityId={this.state.cityId}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Upload certificate</Form.Label>
						<Form.Control
							type='file'
							name='fileUpload'
							onChange={this.handleChange}
							required
						/>
						<small>Upload certificate in PDF format only.</small>
						{errors.fileUpload.length > 0 && (
							<p className='error'>{errors.fileUpload}</p>
						)}
					</Form.Group>
					<Form.Group>
						<Form.Label>Mother's Name</Form.Label>
						<Form.Control
							type='text'
							name='securityKeyword'
							onChange={this.handleChange}
							required
						/>
						<small>We are collecting mother's name for security purpose.</small>
					</Form.Group>
					<Button
						as='input'
						type='submit'
						value='Create account'
						variant='success'
						block
					/>
					<small>
						<p>
							By clicking Create account, I agree that:I have read and accepted
							the Terms of Use.
						</p>
					</small>
				</Form>
			</Container>
		);
	}
}

const validEmailRegex = RegExp(
	/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validName = RegExp(/^[a-z,.'-]+$/i);

const validPassword = RegExp(
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
);

//allows only pdf type file
const validFileExtension = RegExp(/^.*\.(pdf|PDF)$/);

const validDate = (date) => {
	const newDate = new Date();
	const userDate = new Date(date);
	console.log(userDate + ' ' + date);

	// To calculate the time difference of two dates
	const Difference_In_Time = newDate.getTime() - userDate.getTime();

	// To calculate the no. of days between two dates
	const Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));

	// return Difference_In_Days >= totalDaysToAge ? true : false;

	return Difference_In_Days;
};

const validateForm = (errors) => {
	let valid = true;
	Object.values(errors).forEach(
		// if we have an error string set valid to false
		(val) => val.length > 0 && (valid = false)
	);
	return valid;
};
