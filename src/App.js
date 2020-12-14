import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SignUp } from './components/SignUp';
import './App.css';
import PasswordShowHide from './components/PasswordShowHide';
function App() {
	return (
		<div className='App'>
			<SignUp />
			<PasswordShowHide />
		</div>
	);
}

export default App;
