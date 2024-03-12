import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './views/Home/Home';
import { Projects } from './views/projects/Projects';
import { ProjectsText } from './views/projects/ProjectsText';

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<ProjectsText />
			<Projects />
			<Footer />
		</>
	);
}

export default App;
