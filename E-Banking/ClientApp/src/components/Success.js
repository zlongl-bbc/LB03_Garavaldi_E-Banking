import React, { Component } from 'react';

export class Success extends Component {
    static displayName = Success.name;
   

  render () {
    return (
        <div class="container">
            <div class="main">
                <h2>Login</h2>
                <label>Ueberweisung erfolgreich</label>    
            </div>
        </div>
    );
  }
}
