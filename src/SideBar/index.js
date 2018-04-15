import React from 'react';
import './SideBar.css';

class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id, e){
    e.preventDefault();
    this.props.preview(id)
  }

  render(){
    return (
      <div className="SideBar">
        {this.props.content.slice(0, 10).map(item => {
          return (
            <div key={item.id} className="Blob" onClick={(e) => this.handleClick(item.id, e)}>
              <b>{item.owner.login}</b>
              <br />
              <span className="italic">{item.description ? item.description : 'No Description'}</span>
              <hr />
            </div>
          ) 
        })}
      </div>
    );
  }
}

export default SideBar;