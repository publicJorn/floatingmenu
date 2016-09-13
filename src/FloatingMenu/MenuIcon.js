import React, {Component} from 'react';
import classnames from 'classnames';

require('./MenuIcon.less');

export default class MenuIcon extends Component {
  constructor (props) {
    super(props);
  }

  requestToggleOpenState () {
    // Inform parent
    this.props.onRequestToggleOpenState();
  }

  render () {
    const classes = classnames('MenuIcon', {'MenuIcon--open': this.props.open});

    // Spans use css transitions to animate between open and closed state
    return (
      <div className={classes} onClick={this.requestToggleOpenState.bind(this)}>
        <span className="MenuIcon-part"></span>
        <span className="MenuIcon-part"></span>
        <span className="MenuIcon-part"></span>
        <span className="MenuIcon-part"></span>
        <span className="MenuIcon-part"></span>
        <span className="MenuIcon-part"></span>
      </div>
    );
  }
}
