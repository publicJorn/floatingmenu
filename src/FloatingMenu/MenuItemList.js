import React, {Component} from 'react';
import classnames from 'classnames';
import MenuItem from './MenuItem';

require('./MenuItemList.less');

export default class MenuItemList extends Component {
  constructor (props) {
    super(props);
    this.aniimationStyle = {};
  }

  setCssLeft (listEl) {
    if (!listEl) return;

    if (this.props.open) {
      this.animationStyle = {left: -listEl.clientWidth};
    } else {
      this.animationStyle = {left: 0};
    }
  }

  formatText (name) {
    return name.replace(/-/, ' ');
  }

  render () {
    // Build an array of `MenuItem` nodes to inject in the list
    const MenuItemNodes = this.props.items.map((name, i) => {
      return (
        <MenuItem
          key={i}
          link={`#${name}`}
          text={this.formatText(name)} />
      )
    });
    // Class name depends on property `open`
    const classes = classnames('MenuItemList', {'MenuItemList--open': this.props.open});

    return (
      <ul className={classes} style={{this.animationStyle}} ref={this.setAnimationStyle.bind(this)}>
        {MenuItemNodes}
      </ul>
    );
  }
}
