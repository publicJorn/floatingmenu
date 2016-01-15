import React, {Component} from 'react';
import classnames from 'classnames';
import MenuItem from './MenuItem';

require('./MenuItemList.less');

export default class MenuItemList extends Component {
  constructor (props) {
    super(props);
  }

  formatText (name) {
    return name.replace(/-/, ' ');
  }

  render () {
    const MenuItemNodes = this.props.items.map((name, i) => {
      return (
        <MenuItem
          key={i}
          link={`#${name}`}
          text={this.formatText(name)} />
      )
    });
    const classes = classnames('MenuItemList', {'MenuItemList--open': this.props.open});

    return (
      <ul className={classes}>
        {MenuItemNodes}
      </ul>
    );
  }
}
