import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Transaction } from './components/Transaction';
import { Success } from './components/Success';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/transaction' component={Transaction} />
        <Route path='/success' component={Success} />
      </Layout>
    );
  }
}
