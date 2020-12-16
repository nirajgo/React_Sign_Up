import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const PasswordShowHide = (props) => {
	const [hidden, setHidden] = useState(true);

	const handleChange = (e) => {
		props.onChange(e);
	};

	return (
		<>
			<Form.Label>Password</Form.Label>
			<Form.Control
				type={hidden ? 'password' : 'text'}
				name='password'
				onChange={handleChange}
				required
			/>
			<span className='eyeSpan'>
				<i
					onClick={() => setHidden(!hidden)}
					className={hidden ? 'fa fa-eye' : 'fa fa-eye-slash'}></i>
			</span>
		</>
	);
};
export default PasswordShowHide;
