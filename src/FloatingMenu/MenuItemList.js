import React, {Component} from 'react';
import classnames from 'classnames';
import MenuItem from './MenuItem';

require('./MenuItemList.less');

export default class MenuItemList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      animationStyle: {}
    };
  }

  componentDidMount () {
    // Overwrite initial css styles
    this.setAnimationStyle();
  }

  componentWillReceiveProps (newProps) {
    this.setAnimationStyle(newProps);
  }

  /**
   * We need this._itemsList to calculate actual width of list
   * This makes the transition smoother
   */
  setAnimationStyle (newProps) {
    if (newProps && newProps.open) {
      this.setState({ animationStyle: {left: 0} });
    } else {
      this.setState({ animationStyle: {left: -this._itemsList.clientWidth} });
    }
  }

  formatText (name) {
    return name.replace(/-/, ' ');
  }

  render () {
    console.info('render menuItemList');
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
      <ul className={classes} style={this.state.animationStyle} ref={(c) => this._itemsList = c}>
        {MenuItemNodes}
      </ul>
    );
  }
}
