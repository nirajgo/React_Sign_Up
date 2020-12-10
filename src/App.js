import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SignUp } from './components/SignUp';
import Login from './components/ReactiveForm';

function App() {
	return (
		<div className='App'>
			<p>Hello React</p>
			<SignUp></SignUp>
			<Login />
		</div>
	);
}

export default App;
