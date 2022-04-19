import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login/Login';
import CreateAccount from "./pages/CreateAccount/CreateAccount"
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Mask from './components/Mask/index';
import Congratulations from './pages/Congratulations/Congratulations';
import ResetPasswordConfrimed from './pages/ResetPasswordConfirmed';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <CreateAccount/> */}
      <Login/>
      {/* <Congratulations/> */}
      {/* <ResetPassword/> */}
      {/* <ResetPasswordConfrimed/> */}
    </div>
  );
}

export default App;
