import React, {Component} from 'react';
import queryString from 'query-string';
import moment from 'moment';
import axios from 'axios';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import SideBar from '../SideBar/index';
import MainContent from '../MainContent/index'

import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      dataFound: true,
      open: false,
      siteName: 'GitHub Gists',
      invalidDate: false,
      userName: '',
      gistPreview: '',
      gistData: []
    }
    
    this.handleMenuIcon = this.handleMenuIcon.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getPublicGists = this.getPublicGists.bind(this);
  }

  handleClick(id, e){
    e.preventDefault();
    this.setState({ 
      open: false,
      gistPreview: id
    })
    window.scrollTo(0, 0)
  }
  
  handleMenuIcon(e, open){
    this.setState({ 
      open: !open,
    })
  }
  
  handleOverlayClick(e, open){
    this.setState({ 
      open: !open,
    })
  }

  async getPublicGists(userName, since) {
    try {
      let gistData = await axios.get(`https://api.github.com/users/${userName}/gists${since ? `?since=${since}` : ''}`);
      return gistData;
    } catch (error) {
      //console.error(error);
    }
  }

  async componentDidMount(){ 
    const userName = this.props.match.params.username;
    let since;
    if (this.props.location.search){
      let parsedQuery = queryString.parse(this.props.location.search);
      if (parsedQuery.since){
        if (moment(parsedQuery.since).isValid()){
          since = moment(parsedQuery.since).toISOString();
        } else {
          this.setState({ 
            invalidDate: true,
          })
        }
      }
    }
    let gistData = await this.getPublicGists(userName, since)
    if(gistData && gistData.data.length){
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
        <div>
          <AppBar title={this.state.siteName} onLeftIconButtonClick={this.handleMenuIcon} style={{ position: "fixed" }} />
          <SideBar 
            open={this.state.open} 
            title={this.state.siteName} 
            dataFound={this.state.dataFound} 
            gistData={this.state.gistData} 
            onRequestChange={this.handleOverlayClick} 
            onClick={this.handleClick}
          />
          <MainContent 
            userName={this.props.match.params.username}
            dataFound={this.state.dataFound}
            gistPreview={this.state.gistPreview}
            invalidDate={this.state.invalidDate}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
