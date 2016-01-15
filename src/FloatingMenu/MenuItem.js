import React, {Component} from 'react';

export default class MenuItem extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <li className="MenuItem">
        <a className="MenuItem-link" href={this.props.link}>{this.props.text}</a>
      </li>
    );
  }
}
