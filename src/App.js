import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SignUp } from './components/SignUp';
import CharacterDropDown from './components/HooksDropDown';

function App() {
	return (
		<div className='App'>
			<p>Hello React</p>
			<CharacterDropDown />
			<SignUp />
		</div>
	);
}

export default App;
