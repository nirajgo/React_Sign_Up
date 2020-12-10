// import './signup.css';
// //*****************BASIC**************************/

// import React, { Component } from 'react';
// import {
// 	FieldControl,
// 	FieldGroup,
// 	FormBuilder,
// 	FormControl,
// 	Validators,
// } from 'react-reactive-form';
// import { Form } from 'react-bootstrap';

// const TextInput = ({ handler, touched, hasError, meta }) => (
// 	<div>
// 		<input placeholder={`Enter ${meta.label}`} {...handler()} />
// 		<span>
// 			{touched && hasError('required') && `${meta.label} is required`}
// 		</span>
// 	</div>
// );
// export default class Login extends Component {
// 	loginForm = FormBuilder.group({
// 		username: ['', Validators.required],
// 		password: ['', Validators.required],
// 		rememberMe: false,
// 	});
// 	handleReset = () => {
// 		this.loginForm.reset();
// 	};
// 	handleSubmit = (e) => {
// 		e.preventDefault();
// 		console.log('Form values', this.loginForm.value);
// 	};
// 	render() {
// 		return (
// 			<FieldGroup
// 				control={this.loginForm}
// 				render={({ get, invalid }) => (
// 					<Form onSubmit={this.handleSubmit}>
// 						<FieldControl
// 							name='username'
// 							render={TextInput}
// 							meta={{ label: 'Username' }}
// 						/>

// 						<Form.Control
// 							name='password'
// 							render={TextInput}
// 							meta={{ label: 'Password' }}
// 						/>

// 						<FieldControl
// 							name='rememberMe'
// 							render={({ handler }) => (
// 								<div>
// 									<input {...handler('checkbox')} />
// 								</div>
// 							)}
// 						/>
// 						<button type='button' onClick={this.handleReset}>
// 							Reset
// 						</button>
// 						<button type='submit' disabled={invalid}>
// 							Submit
// 						</button>
// 					</Form>
// 				)}
// 			/>
// 		);
// 	}
// }

//***********Form Generator with React-Bootstrap***************/

// import React, { Component } from 'react';
// import { Validators, FormGenerator } from 'react-reactive-form';
// import { Form, Container } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';

// // Input component
// const TextInput = ({ handler, touched, hasError, meta }) => (
// 	<Form.Group>
// 		<Form.Label>{meta.label}</Form.Label>
// 		<Form.Control
// 			placeholder={`Enter ${meta.label}`}
// 			type={meta.type}
// 			{...handler()}
// 		/>
// 		<span>
// 			{touched && hasError('required') && `${meta.label} is required`}
// 		</span>
// 	</Form.Group>
// );

// // Checkbox component
// const CheckBox = ({ handler }) => (
// 	<div>
// 		<input {...handler('checkbox')} />
// 	</div>
// );

// // Field config to configure form
// const fieldConfig = {
// 	controls: {
// 		firstName: {
// 			options: {
// 				validators: Validators.required,
// 			},
// 			render: TextInput,
// 			meta: { label: 'Username', type: 'text' },
// 		},
// 		password: {
// 			meta: {
// 				label: 'Password',
// 				type: 'password',
// 			},
// 			options: {
// 				validators: Validators.required,
// 			},
// 			render: TextInput,
// 		},
// 		rememberMe: {
// 			render: CheckBox,
// 		},
// 		$field_0: {
// 			isStatic: false,
// 			render: ({ invalid, meta: { handleReset } }) => (
// 				<div>
// 					{/* <Button type='reset' onClick={handleReset}>
// 						Reset
// 					</Button> */}
// 					<Button
// 						as='input'
// 						type='submit'
// 						value='Create account'
// 						variant='success'
// 						block
// 						disabled={invalid}
// 					/>
// 				</div>
// 			),
// 		},
// 	},
// };

// export default class Login extends Component {
// 	handleReset = () => {
// 		this.loginForm.reset();
// 	};
// 	handleSubmit = (e) => {
// 		e.preventDefault();
// 		console.log('Form values', this.loginForm.value);
// 	};

// 	setForm = (form) => {
// 		console.log('Hello');
// 		this.loginForm = form;
// 		this.loginForm.meta = {
// 			handleReset: this.handleReset,
// 		};
// 	};
// 	render() {
// 		return (
// 			<Container className='signUpForm'>
// 				<Form onSubmit={this.handleSubmit}>
// 					<FormGenerator onMount={this.setForm} fieldConfig={fieldConfig} />
// 				</Form>
// 			</Container>
// 		);
// 	}
// }

/*******************Form Generative *******************/

import React, { Component } from 'react';
import { Validators, FormGenerator } from 'react-reactive-form';
// Input component
const TextInput = ({ handler, touched, hasError, meta }) => (
	<div>
		<input placeholder={`Enter ${meta.label}`} {...handler()} />
		<span>
			{touched && hasError('required') && `${meta.label} is required`}
		</span>
	</div>
);
// Checkbox component
const CheckBox = ({ handler }) => (
	<div>
		<input {...handler('checkbox')} />
	</div>
);
// Field config to configure form
const fieldConfig = {
	controls: {
		username: {
			options: {
				validators: Validators.required,
			},
			render: TextInput,
			meta: { label: 'Username' },
		},
		password: {
			options: {
				validators: Validators.required,
			},
			render: TextInput,
			meta: { label: 'Password' },
		},
		rememberMe: {
			render: CheckBox,
		},
		$field_0: {
			isStatic: false,
			render: ({ invalid, meta: { handleReset } }) => (
				<div>
					<button type='button' onClick={handleReset}>
						Reset
					</button>
					<button type='submit' disabled={invalid}>
						Submit
					</button>
				</div>
			),
		},
	},
};
export default class Login extends Component {
	handleReset = () => {
		this.loginForm.reset();
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form values', this.loginForm.value);
	};
	setForm = (form) => {
		this.loginForm = form;
		this.loginForm.meta = {
			handleReset: this.handleReset,
		};
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<FormGenerator onMount={this.setForm} fieldConfig={fieldConfig} />
			</form>
		);
	}
}
