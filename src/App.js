
import './App.css';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import {Separation} from "./components/header/Header.js"
import {Div} from "./components/Contains"

function App() {
  return (
    <Div>
      <Header/>
      <Separation/>
      <Footer/>
    </Div>
  );
}

export default App;
