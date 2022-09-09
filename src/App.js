
import './App.css';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import {Separation} from "./components/header/Header.js"

function App() {
  return (
    <div className="App">
      <Header/>
      <Separation/>
      <div style={{
        position : "fixex",
        bottom : 0
      }}>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
