import React, { Component } from 'react';

class FavoriteFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "Food Example",
      pic: './images/food/food.jpg'
    }
  }
  render() {
    return (
      <div>
        {this.state.type}
        <div>
          <img
            className="foodPic"
            src={require('./images/food/food.jpg')} //this needs to be part of the above
            alt="food"
          />
        </div>
        <div>
          this needs to be thought out more and cleverly designed
        </div>
      </div>
    );
  }
}

export default FavoriteFood;
