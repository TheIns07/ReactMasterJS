import logo from './logo.svg';
import './App.css';

function App() {
  const [usuario, setUsuario] = useState("Arturo Cervantes")
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

    </div>
  );
}

export default App;
