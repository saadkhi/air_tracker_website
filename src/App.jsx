import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Download from './components/Download';
import Contributor from './components/Contributor';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Download />
                <Contributor />
            </main>
            <Footer />
        </div>
    );
}

export default App;
