import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;
   

  render () {
    return (
        <div class="container">
            <div class="main">
                <h2>Login</h2>
                <form id="form_id" method="post" name="myform">
                    <label>Betrag :</label>
                    <input type="text" name="betrag" id="betrag" />
                    <label>Währung :</label>
                    <input type="password" name="wahrung" id="wahrung" />
                    <label>Zu :</label>
                    <input type="text" name="zu" id="zu" />
                    <input type="button" value="Login" id="submit" onclick="validate()" />
                </form>       
            </div>
        </div>
    );
  }
}
