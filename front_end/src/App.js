import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login/Login';
import CreateAccount from "./pages/CreateAccount/CreateAccount"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CreateAccount/>
    </div>
  );
}

export default App;
