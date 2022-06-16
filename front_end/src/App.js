import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login/Login";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Mask from "./components/Mask/index";
import Congratulations from "./pages/Congratulations/Congratulations";
import ResetPasswordConfrimed from "./pages/ResetPasswordConfirmed";
import ApplicationForm from "./pages/ApplicationForm/ApplicationForm";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/reset" element={<ResetPassword />} />
        <Route exact path="/done" element={<ResetPasswordConfrimed />} />
        <Route exact path="/signup" element={<CreateAccount />} />
        {/* <Route exact path="/accountcreated" element={<Cre} */}
        <Route exact path="/congrats" element={<Congratulations />} />
        <Route exact path="/apply" element={<ApplicationForm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
