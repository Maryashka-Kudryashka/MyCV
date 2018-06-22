import React, { Component } from 'react';
import DynamicListItem from './DynamicListItem';

class DynamicList extends Component {
  render() {
    console.log(this.props.items)
    return (
      <section className="DynamicList">
        <ul>
          <h3>{this.props.label}</h3>
          {this.props.items.map((item) => <li><DynamicListItem item={item}/></li>)}
        </ul>
      </section>
    );
  }
}

export default DynamicList;
