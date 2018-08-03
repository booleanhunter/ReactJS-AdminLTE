import React, { Component } from 'react';
import Dashboard from './layouts/dashboard/dashboard.jsx';


class App extends Component {

  render() {
    return (
      //get token from local storage
      //restore session
      // if(!user.authenticated){
      // <Login /> 
      // }else{
      <Dashboard />
      // }
    );
  }
}

export default App;
