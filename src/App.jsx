import './App.css';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './views/Home/Home';

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<Footer />
		</>
	);
}

export default App;
