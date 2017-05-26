import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import AppNav from './AppNav';

import { SERVER_URL, CLIENT_VERSION, REACT_VERSION } from './config';
import 'whatwg-fetch';

class App extends Component {

  constructor() {
    super();

    this.state = {
      serverInfo: {},
      clientInfo: {
        version: CLIENT_VERSION,
        react: REACT_VERSION
      }
    }
  }

  componentDidMount() {
    fetch(SERVER_URL + '/application')
      .then(r => r.json())
      .then(json => this.setState({serverInfo: json}))
      .catch(error => console.error('Error connecting to server: ' + error));

  }

  render() {
    const serverInfo = this.state.serverInfo;
    const clientInfo = this.state.clientInfo;

    return (
      <div>
        <AppNav serverInfo={serverInfo} clientInfo={clientInfo}/>


        <Grid>
          <div>
            <Jumbotron>
              <h1 style={{textAlign: 'center'}}>Welcome to the Book Store!</h1>
              <br/>
            </Jumbotron>



          </div>
        </Grid>
      </div>
    );
  }
}

export default App;
