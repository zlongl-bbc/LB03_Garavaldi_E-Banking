import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Transaction } from './Transaction';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
