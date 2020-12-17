import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import RegisterUser from './components/RegisterUser';
import SimpleButton from './components/SimpleButton';

function App() {
	return (
		<div className='App'>
			<RegisterUser />
			<SimpleButton />
		</div>
	);
}

export default App;
