import React, {Component} from 'react';
class DefaultMessage extends Component {
  
  render(){
    return (
      <div> 
        <h3>Welcome to React-Gists-API App</h3>
        <p>By default you'll see GitHub user defunkts gists. You can open the drawer on the left to view more Gists.</p>
        <p>Enter a username in the URL bar in place of defunkts to fetch different Gists. Additionally, you can provide a <code>?since=YYYY-MM-DD</code> parameter to filter results by date.</p>
      </div>
    );
  }
}

export default DefaultMessage;