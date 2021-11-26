import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from "./components/Home/Home/Home";
import Header from './components/Shared/Header/Header';
import Login from './components/Login/Login/Login';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Services from './components/Services/Services';
import Footer from './components/Shared/Footer/Footer';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Consultants from './components/Consultants/Consultants';

function App() {
  return (
    <div className="App min-vh-100">
        <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/services">
              <Services limit="20"></Services>
            </PrivateRoute>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/consultants">
              <Consultants></Consultants>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
