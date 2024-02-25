import { useState } from 'react';

import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './views/Home/Home';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Navbar />
			<Home />
		</>
	);
}

export default App;
