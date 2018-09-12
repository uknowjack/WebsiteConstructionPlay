import React, { Component } from 'react'
import MenuAccess from './MenuAccess'
import FavoriteFood from './FavoriteFood'
import './css/Menu.css'

class Menu extends Component {
  render() {
    return (
      <div id="menuContainer">
        <br/>
        MENUS
        <br/>
        <br/>
        Click for full menu
        <br/>
        <br/>
        <div id="menuButtons">
          <MenuAccess />
          <button>
            Drinks
          </button>
          <button>
            Brunch
          </button>
          <button>
            Wine Bar
          </button>
          <button>
            Happy hour
          </button>
          <button>
            Rooftop
          </button>
        </div>
        <br/>
        <div>
          Favorite Items
        </div>
        <br/>
        <FavoriteFood />
        <br/>
      </div>
    );
  }
}

export default Menu;
