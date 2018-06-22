import React, { Component } from 'react';

class DynamicListItem extends Component {
  render() {
    return (
      <div className="DynamicListItem">
        {this.props.item}
      </div>
    );
  }
}

export default DynamicListItem;
