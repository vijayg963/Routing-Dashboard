import { Route, BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import Articles from './Articles';
import Help from './Help';
import Home from './Home';
import NotFound from './NotFound';

class Main extends Component {
  render() {
    return (
      <div className='page-content'>
        <h1>hotload is working</h1>
        <BrowserRouter>
          <Route path='/' exact component={Home} />
          <Route path='/help' component={Help} />
          <Route path='/articles' component={Articles} />
          <Route path='*' component={NotFound} />
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;
