import React, { Component } from 'react';
import MenuIcon from './MenuIcon';
import MenuItemList from './MenuItemList';
import classnames from 'classnames';

require('./FloatingMenu.less');

export class FloatingMenu extends Component {
  constructor (props) {
    super(props);

    // Position on initial load of page
    this.relativeDomScrollPosition = NaN;
    this.state = {
      open: this.props.open || false,
      floating: false
    };
  }

  componentDidMount () {
    this.relativeDomScrollPosition = this._menu.getBoundingClientRect().top + document.body.scrollTop;
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll (evt) {
    const scrolledFromTop = event.srcElement.body.scrollTop;

    if (scrolledFromTop > this.relativeDomScrollPosition && !this.state.floating) {
      this.setState({ floating: true });
    } else
    if (scrolledFromTop <= this.relativeDomScrollPosition && this.state.floating) {
      this.setState({ floating: false });
    }
  }

  toggleOpenState () {
    const newOpenState = !this.state.open;
    this.setState({
      open: newOpenState
    });

    return newOpenState;
  }

  render () {
    const classes = classnames('FloatingMenu', {'FloatingMenu--floating': this.state.floating});

    // Note to self: `ref` is called each time the component is rendered. This happens initially,
    // but also if something (eg. prop|state) changes.
    return (
      <div className={classes} ref={(c) => this._menu = c}>
        <div className="FloatingMenu-Inner">
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
      </div>
    );
  }
}


/**
 * Searches current DOM for menu items.
 * Should be links with this format: `<a href="#ItemName"></a>`
 * @return {Array} List of names
 */
export function findMenuItemsInDom (selector = '[data-menuItem]') {
  const menuItemLinks = document.querySelectorAll(selector);
  const menuItems = Array.from(menuItemLinks, (el) => {
    return el.getAttribute('name');
  });

  return menuItems;
}
