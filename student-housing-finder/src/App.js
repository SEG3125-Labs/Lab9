import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Footer from './Footer';

function App() {




  return (
    <div className="App">    
      {/*Header*/}
      <div style={{height: "50px"}}></div>
      <div id="google_translate_element"></div>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
