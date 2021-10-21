import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Doctors from './Pages/Doctors/Doctors';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import SingleDoctor from './Pages/Home/SingleDoctor/SingleDoctor';
import Login from './Pages/Login/Login';
import PageNotFound from './Pages/NotFound/PageNotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route exact path="/home">
                            <Home></Home>
                        </Route>
                        <Route exact path="/doctors">
                            <Doctors></Doctors>
                        </Route>
                        <Route exact path="/about">
                            <About></About>
                        </Route>
                        <Route exact path="/contact">
                            <Contact></Contact>
                        </Route>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <Route path="/register">
                            <Register></Register>
                        </Route>
                        <PrivateRoute path="/single-doctor/:doctorId">
                            <SingleDoctor></SingleDoctor>
                        </PrivateRoute>
                        <Route path="*">
                            <PageNotFound></PageNotFound>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;