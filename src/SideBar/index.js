import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import CodeIcon from 'material-ui/svg-icons/action/code';

class SideBar extends Component {

  render(){
    return (
      <Drawer open={this.props.open} onRequestChange={this.props.onRequestChange} docked={false} style={{ paddingTop: "60px" }}>
        <AppBar title={this.props.title} showMenuIconButton={false} />
        {this.props.dataFound ? this.props.gistData.slice(0, 10).map((item, index) => {
          return (
            <MenuItem
              key={index}
              leftIcon={<CodeIcon />}
              primaryText={item.id}
              onClick={(e) => this.props.onClick(item.id, e)} 
            />
          ) 
        }) : (
            <MenuItem 
              primaryText="Nothing to see here..."
              disabled={true}
            />
        )}
      </Drawer>
    );
  }
}

export default SideBar;