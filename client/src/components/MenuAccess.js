import React, { Component } from 'react';

class MenuAccess extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "Lunch/Dinner",
      link: './images/menus/main-menu.pdf'
    }
  }
  render() {
    return (
      <button>
        {this.state.type}
      </button>
    );
  }
}

export default MenuAccess;
