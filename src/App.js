import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import { SignUp } from './components/SignUp';
import RegisterUser from './components/RegisterUser';

function App() {
	return (
		<div className='App'>
			{/* <SignUp /> */}
			<RegisterUser />
		</div>
	);
}

export default App;
