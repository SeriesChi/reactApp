// import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Navbar from "./component/pages/Navbar";
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import NotiStack from "./component/NotiStact";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  const getToken = localStorage.getItem("token");
  console.log(getToken, "__________________________")

  return (
    <div className="App">
      <BrowserRouter>
        
      <Navbar />
      <Switch>

        <Route exact path="/signIn" component={Login} />
        <Route exact path="/signUp" component={SignUp} />
        {console.log(getToken, "__")}
        <ProtectedRoute 
          path="/home"
          component={Home}
          redirectionPage="/signIn"
        />
        <ProtectedRoute 
          path="/contact"
          component={Contact}
          redirectionPage="/signIn"
        />
        <ProtectedRoute 
          path="/aboutUs"
          component={AboutUs}
          redirectionPage="/signIn"
        />
        <ProtectedRoute 
          path="/signIn"
          component={Login}
          redirectionPage="/signIn"
        />
      </Switch>
          
      </BrowserRouter>
    </div>
  );
}

export default App;
