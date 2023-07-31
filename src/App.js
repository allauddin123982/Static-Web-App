
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import News from './components/News';
import Plans from './components/Plans';
import ReactTailwind from './components/ReactTailwind';


function App() {
  return (
    <>
      <Header />
      <Banner />
      <ReactTailwind />
      <News/>
      <Plans />
      <Footer />
      
    </>
  );
}


export default App;
