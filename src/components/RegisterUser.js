/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import UserService from '../services/user.service';
import LocalityDropDown from './LocalityDropDown';
import PasswordShowHide from './PasswordShowHide';
// import './register_user.css';

const RegisterUser = () => {
	const initialState = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		dateOfBirth: '',
		securityKeyword: '',
		cityId: '',
	};
	const formErrors = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		cityId: '',
		dateOfBirth: '',
		fileUpload: '',
	};
	const [userData, setUserData] = useState(initialState);
	const [errors, setErrors] = useState(formErrors);
	const [file, setFile] = useState('');
	const [ifExistsMail, setIfExistsMail] = useState([]);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setUserData({ ...userData, [name]: value });

		switch (name) {
			case 'firstName':
				errors.firstName = value.length < 2
					? 'First name must be at least 2 characters long!'
					: validName.test(value)
						? ''
						: 'Name is not valid';
				break;
			case 'lastName':
				errors.lastName = value.length < 2
					? 'Last name must be at least 2 characters long!'
					: validName.test(value)
						? ''
						: 'Name is not valid';
				break;
			case 'password':
				errors.password = validPassword.test(value)
					? ''
					: 'Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:';
				break;
			case 'dateOfBirth':
				const permittedAge = 21;
				const totalDaysToAge = permittedAge * 365;
				errors.dateOfBirth = validDate(value) > totalDaysToAge
					? ''
					: 'Date of birth is not valid!';
				break;
			case 'fileUpload':
				setFile(event.target.files[0]);
				errors.fileUpload = validFileExtension.test(value)
					? ''
					: 'Invalid file type';
				break;
			default:
				break;
		}
		setErrors(errors);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(userData);
		console.log(`C_ID: ${userData.cityId}`);

		const formData = new FormData();
		formData.append('fname', userData.firstName);
		formData.append('lname', userData.lastName);
		formData.append('email', userData.email);
		formData.append('password', userData.password);
		formData.append('dob', userData.dateOfBirth);
		formData.append('c_id', userData.cityId);
		formData.append('mothername', userData.securityKeyword);
		formData.append('certificates', file.name);
		formData.append('file', file);

		if (validateForm(errors)) {
			UserService.createUser(formData)
				.then(() => {
					console.info('Valid Form', userData.firstName);
					setUserData(initialState);
				})
				.catch((e) => {
					console.log(e);
				});
		} else {
			console.error('Invalid Form');
		}
	};

	//check if user is already register
	const onBLurChange = (e) => {
		e.preventDefault();
		const myJson = JSON.stringify({ checkMail: e.target.value });
		UserService.checkIfUserMailExist(myJson)
			.then((res) => {
				setIfExistsMail(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		if (e.target.name === "email") errors.email = validateEmail(e.target.value);
	};

	//email validation
	const validateEmail = (value) => {
		if (validEmailRegex.test(value)) {
			if (ifExistsMail.length !== 0) {
				return "Email already exists!";
			} else {
				return true;
			}
		}
		return "Email is invalid";
	};
	return (
		<div className="backgroundImage">
			<div className="signUpForm">
				<Form onSubmit={handleSubmit}>
					<h1>Create an account</h1>
					<h6>
						Already a member?
					<a href="./success.html"> Login here.</a>
					</h6>
					<Form.Group>
						<Form.Label>First name</Form.Label>
						<Form.Control
							type="text"
							name="firstName"
							value={userData.firstName}
							onChange={handleChange}
							required
							autoFocus
						/>
						{errors.firstName.length > 0 && (
							<span className="error">{errors.firstName}</span>
						)}
					</Form.Group>
					<Form.Group>
						<Form.Label>Last name</Form.Label>
						<Form.Control
							type="text"
							name="lastName"
							value={userData.lastName}
							onChange={handleChange}
							required
						/>
						{errors.lastName.length > 0 && (
							<span className="error">{errors.lastName}</span>
						)}
					</Form.Group>
					<Form.Group>
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							name="email"
							value={userData.email}
							onChange={handleChange}
							onBlur={onBLurChange}
							required
							autoComplete='false'
						/>
						{errors.email.length > 0 && (
							<span className="error">{errors.email}</span>
						)}
					</Form.Group>
					<Form.Group>
						<PasswordShowHide onChange={handleChange} />
						{errors.password !== null && (
							<span className="error">{errors.password}</span>
						)}
					</Form.Group>

					<Form.Group>
						<Form.Label>Date of Birth</Form.Label>
						<Form.Control
							type="date"
							name="dateOfBirth"
							value={userData.dateOfBirth}
							onChange={handleChange}
							required
						/>
						<small>Age must be 21 years and above.</small>
						{errors.dateOfBirth.length > 0 && (
							<p className="error">{errors.dateOfBirth}</p>
						)}
					</Form.Group>

					<LocalityDropDown onChange={handleChange} />

					<Form.Group>
						<Form.Label>Upload certificate</Form.Label>
						<Form.Control
							type="file"
							name="fileUpload"
							value={userData.fileUpload}
							onChange={handleChange}
							required
						/>
						<small>Upload certificate in PDF format only.</small>
						{errors.fileUpload.length > 0 && (
							<p className="error">{errors.fileUpload}</p>
						)}
					</Form.Group>
					<Form.Group>
						<Form.Label>Mother's Name</Form.Label>
						<Form.Control
							type="text"
							name="securityKeyword"
							value={userData.securityKeyword}
							onChange={handleChange}
							required
						/>
						<small>We are collecting mother's name for security purpose.</small>
					</Form.Group>
					<Button
						as="input"
						type="submit"
						value="Create account"
						variant="success"
						block
					/>
					<small>
						<p>
							By clicking Create account, I agree that:I have read and accepted
							the Terms of Use.
          </p>
					</small>
				</Form>
			</div>
		</div>
	);
};

const validName = RegExp(/^[a-z,.'-]+$/i);

const validPassword = RegExp(
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
);
const validEmailRegex = RegExp(
	/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
);
// allows only pdf type file
const validFileExtension = RegExp(/^.*\.(pdf|PDF)$/);

const validDate = (date) => {
	const newDate = new Date();
	const userDate = new Date(date);
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
		(val) => val.length > 0 && (valid = false),
	);
	return valid;
};

export default RegisterUser;
