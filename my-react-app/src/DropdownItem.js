import React, { Component } from 'react';

class DropdownItem extends Component {

    constructor(props){
        super(props)
    }


    handleItemC(item)
     {
        this.props.dropClicked(item)
     }   


    state = {  }
    render() {
        return (
              <a className="dropdown-item"  onClick={this.handleItemC.bind(this, this.props.text)} href="#">{this.props.text}</a>
            
        );
    }
}
export default DropdownItem;