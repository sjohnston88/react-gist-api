import React, {Component} from 'react';
import Gist from '../Gist/index';

class MainContent extends Component {
  
  render(){
    return (
      <main> 
          <div className="GistPreview">
            {this.props.dataFound ? 
              <Gist className="GistPreview" id={this.props.gistPreview} /> 
              : <h1><span role="img" aria-label="hmm emoji">🤔</span> Nothing found for user "{this.props.userName}"</h1> }
          </div>
        </main>
    );
  }
}

export default MainContent;