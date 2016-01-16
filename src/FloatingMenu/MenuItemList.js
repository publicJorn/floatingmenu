import React, {Component} from 'react';
import classnames from 'classnames';
import MenuItem from './MenuItem';

require('./MenuItemList.less');

export default class MenuItemList extends Component {
  constructor (props) {
    super(props);
    this.leftPos = '';
  }

  componentDidMount () {
    // const width = this.refs.list.clientWidth;
    // this.refs.list
  }

  setCssLeft (listEl) {
    if (!listEl) return;

    if (this.props.open) {
      console.log('open');
      this.leftPos = -listEl.clientWidth;
    } else {
      console.log('close');
      this.leftPos = 0;
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
      <ul className={classes} style={{left:this.leftPos}} ref={this.setCssLeft.bind(this)}>
        {MenuItemNodes}
      </ul>
    );
  }
}
