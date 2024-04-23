import './App.css';
import NavbarComponent from './components/navbar';
import Banner from './components/Banner';
import Content from './components/Content';
import GetHelp from './components/GetHelp';
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