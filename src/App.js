import './App.css';
import NavbarComponent from './components/navbar';
import Banner from './components/Banner';
import Content from './components/Content';
import GetHelp from './components/GetHelp';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
      <div className="App">
        <NavbarComponent/>
        <Banner/>
        <Content/>
        <GetHelp/>
      </div>
  );
}

export default App;