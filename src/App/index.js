import React from 'react';
import Gist from 'react-gist';
import axios from 'axios';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      dataFound: true,
      siteName: 'GitHub Gists',
      userName: '',
      gistPreview: '',
      gistData: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.getPublicGists = this.getPublicGists.bind(this);
  }

  handleClick(id, e){
    e.preventDefault();
    this.setState({ 
      gistPreview: id
    })
  }

  async getPublicGists(userName) {
    try {
      let gistData = await axios.get(`https://api.github.com/users/${userName}/gists`);
      return gistData;
    } catch (error) {
      console.error(error);
    }
  }

  async componentDidMount(){ 
    const userName = this.props.match.params.username;
    let gistData = await this.getPublicGists(userName)
    console.log(gistData);
    if(gistData.data[0]){
      this.setState({
        userName: userName,
        gistPreview: gistData.data[0].id,
        gistData: gistData.data
      });
    } else {
      this.setState({
        dataFound: false
      });
    }
  }
  
  render() {
    return (
      <MuiThemeProvider>
        <AppBar showMenuIconButton={false} style={{ position: "fixed" }} />
        <Drawer docker={true} style={{ paddingTop: "70px" }}>
        <AppBar title={this.state.siteName} showMenuIconButton={false} />
          {this.state.dataFound ? this.state.gistData.slice(0, 10).map(item => {
            return (
              <MenuItem 
                primaryText={`ID: ${item.id}`}
                onClick={(e) => this.handleClick(item.id, e)} 
                style={{
                  whiteSpace:"nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              />
            ) 
          }) : null }
        </Drawer>
        <main>
          <div className="GistPreview">
            {this.state.dataFound ? 
              <Gist className="GistPreview" height="500px" id={this.state.gistPreview} /> 
              : <h1><span role="img" aria-label="hmm emoji">🤔</span> Nothing found for {this.props.match.params.username}</h1> }
          </div>
        </main>
      </MuiThemeProvider>
    );
  }
}

export default App;
