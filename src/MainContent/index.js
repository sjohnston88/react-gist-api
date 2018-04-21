import React, {Component} from 'react';
import Gist from '../Gist/index';
import DefaultMessage from '../DefaultMessage/index'

class MainContent extends Component {
  
  render(){
    return (
      <main> 
        <div className="GistPreview">
          {this.props.invalidDate ? <p><b>Error:</b> Please enter a valid ISO 8601 date</p> : null }
          {this.props.userName === 'defunkt' ? <DefaultMessage /> : null}
          
          {this.props.dataFound ? 
            <div><h2>Viewing Gists by {this.props.userName}</h2><Gist className="GistPreview" id={this.props.gistPreview} /></div>
            : <div><h1><span role="img" aria-label="hmm emoji">🤔</span> Nothing found for user "{this.props.userName}"</h1><p>Try entering another username in the address bar.</p></div>
          }
        </div>
      </main>
    );
  }
}

export default MainContent;