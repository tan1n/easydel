import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Header from './components/Header';
import Faq from './components/Faq';
import Services from './components/Services';
import Tracking from './components/Tracking';
import CalculatePricing from './components/CalculatePricing';

function App() {
  return (
    <div className="mt-2" style={{ backgroundColor: "#f8f8f8" }}>
      <Header />
      <Tracking />
      <Services />
      <CalculatePricing />
      <About />
      <Faq />
    </div>

  );
}

export default App;
