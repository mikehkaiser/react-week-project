import React from 'react';
import ReactDOM from 'react-dom';
import { Home, SignIn, Dashboard, DataTable } from './components';
import './styles.css';
import reportWebVitals from './reportWebVitals';
// import from react-router-dom, which was installed in terminal
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import store and reducers
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
      <Router>
        <Switch>

          <Route exact path='/'>
            <Home title={'Ride ur bike'} />
          </Route>

          <Route path='/dashboard'>
            <Dashboard />
          </Route>

          <Route path='/signin'>
            <SignIn />
          </Route>

        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
