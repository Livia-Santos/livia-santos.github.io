import {myVariable, css} from './modules/utils.js';

  let head = document.head || document.getElementsByTagName('head')[0];
  let style = document.createElement('style');

  head.appendChild(style);

  style.type = 'text/css';
  if (style.styleSheet){
  // This is required for IE8 and below.
  } else {
    style.appendChild(document.createTextNode(css));
  }

  console.log(`From modules: ${myVariable}`);
