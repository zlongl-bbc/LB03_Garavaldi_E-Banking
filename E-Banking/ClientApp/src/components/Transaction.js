import React, { Component } from 'react';

export class Transaction extends Component {
    static displayName = Transaction.name;
   
  render () {
    return (
        <div class="container">
            <div class="main">
                <h2>Transaktion</h2>
                <form id="form_id" method="post" name="myform">
                    <label>Betrag :</label>
                    <input type="text" name="betrag" id="betrag" />
                    <label>Waehrung :</label>
                    <br/>
                    <select name="Waehrung">
                        <option value="EUR">EUR</option>
                        <option value="CHF">CHF</option>
                    </select>
                    <br />
                    <br />
                    <label>Zu :</label>
                    <input type="text" name="zu" id="zu" />
                    <input type="button" value="Login" id="submit" onclick="validate()" />
                </form>       
            </div>
        </div>
    );
  }
}
