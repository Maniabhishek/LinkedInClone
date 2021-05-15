import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router ,Switch , Route} from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import {getUserAuth} from "./actions"
import { connect } from 'react-redux';
import {useEffect} from 'react';

function App(props) {

  useEffect(()=>{
    props.getUserAuth();
  },[]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ="/">
            <Login/>
          </Route>

        <Route exact path = "/home">
          <Header/>
          <Home/>
        </Route>

        </Switch>
      </Router>
    </div>
  )

}

const mapStateToProps = (props)=>{
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth :()=>dispatch(getUserAuth()),
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
