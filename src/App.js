import './App.css';
import { MainRoute } from './Routes/MainRoute';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <MainRoute/>
    </div>
  );
}

export default App;
