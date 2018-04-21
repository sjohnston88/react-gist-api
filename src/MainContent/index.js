import React, {Component} from 'react';
import Gist from '../Gist/index';
import DefaultMessage from '../DefaultMessage/index'

class MainContent extends Component {
  
  render(){
    return (
      <main> 
        <div className="GistPreview">
          {this.props.userName === 'defunkt' ? <DefaultMessage /> : <h2>Viewing Gists by {this.props.userName}</h2>}
          {this.props.dataFound ? 
            <Gist className="GistPreview" id={this.props.gistPreview} /> 
            : <div><h1><span role="img" aria-label="hmm emoji">🤔</span> Nothing found for user "{this.props.userName}"</h1><p>Try entering another username in the address bar.</p></div>
          }
        </div>
      </main>
    );
  }
}

export default MainContent;