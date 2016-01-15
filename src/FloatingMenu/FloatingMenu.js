import React, { Component } from 'react';
import MenuIcon from './MenuIcon';
import MenuItemList from './MenuItemList';

require('./FloatingMenu.less');

export class FloatingMenu extends Component {
  constructor (props) {
    super(props);
    this.state = {open: this.props.open || false};
  }

  toggleOpenState () {
    this.setState({
      open: !this.state.open
    });

    return this.state.open;
  }

  render () {
    return (
      <div className="FloatingMenu">
        <MenuIcon
          open={this.state.open}
          onRequestToggleOpenState={this.toggleOpenState.bind(this)}
        />
        <MenuItemList
          items={this.props.menuItems}
          open={this.state.open}
          onItemClicked={this.toggleOpenState.bind(this)} // TODO
        />
      </div>
    );
  }
}


/**
 * Searches current DOM for menu items.
 * Should be links with this format: `<a href="#ItemName"></a>`
 * @return {Array} List of `name` attibutes
 */
export function findMenuItemsInDom (selector = '[data-menuItem]') {
  const menuItemLinks = document.querySelectorAll(selector);
  const menuItems = Array.prototype.map.call(menuItemLinks, (el) => {
    return el.getAttribute('name');
  });

  return menuItems;
}
