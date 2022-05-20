import Header from './pages/home/Header';
import Slider from './pages/home/Slider';
import Services from './pages/home/Services';
import AboutUs from './pages/home/AboutUs';
import Blogs from './pages/home/Blogs';
import ContactUs from './pages/home/ContactUs';
import Footer from './pages/home/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Services />
      <AboutUs />
      <Blogs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
