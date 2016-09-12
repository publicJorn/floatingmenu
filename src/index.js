require('./main.less');

import React from 'react';
import { render } from 'react-dom';
import { FloatingMenu, findMenuItemsInDom } from './FloatingMenu/FloatingMenu';

render(
  <FloatingMenu menuItems={findMenuItemsInDom()} open={false} />,
  document.querySelector('.jsFloatingMenuContainer')
);
