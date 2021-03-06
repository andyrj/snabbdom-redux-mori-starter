'use strict';
import {h, links} from '../../utils';
import '../../styles/core.scss';
import './style.scss';

// const init = (store) => {
const init = () => {
  /*
  if (!isNode) {
  }
 */
};

// TODO: fix styling for currently selected route in menu
const render = (props) => {
  return h('header.centered-navigation', {attrs: {role: 'banner'}}, [
    h('div.centered-navigation-wrapper', [
			h('nav', {attrs: {role: 'navigation'}}, [
        h('ul.center-navigation-menu show', links(props.routes).map((entry) => {
          return h('li.nav-link', [
            h('a.pushstate', {attrs: {href: entry[0]}}, entry[1]),
          ]);
        }))
			])
		])
  ]);
};
/*  from refills.bourbon.io - Centered Navigation
<header class="centered-navigation" role="banner">
  <div class="centered-navigation-wrapper">
    <a href="javascript:void(0)" class="mobile-logo">
      <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="Logo image">
    </a>
    <a href="javascript:void(0)" id="js-centered-navigation-mobile-menu" class="centered-navigation-mobile-menu">MENU</a>
    <nav role="navigation">
      <ul id="js-centered-navigation-menu" class="centered-navigation-menu show">
        <li class="nav-link"><a href="javascript:void(0)">Products</a></li>
        <li class="nav-link"><a href="javascript:void(0)">About Us</a></li>
        <li class="nav-link"><a href="javascript:void(0)">Contact</a></li>
        <li class="nav-link logo">
          <a href="javascript:void(0)" class="logo">
            <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="Logo image">
          </a>
        </li>
        <li class="nav-link"><a href="javascript:void(0)">Testimonials</a></li>
        <li id="js-centered-more" class="nav-link more"><a href="javascript:void(0)">More</a>
          <ul class="submenu">
            <li><a href="javascript:void(0)">Submenu Item</a></li>
            <li><a href="javascript:void(0)">Another Item</a></li>
            <li class="more"><a href="javascript:void(0)">Item with submenu</a>
              <ul class="submenu fly-out-right">
                <li><a href="javascript:void(0)">Sub-submenu Item</a></li>
                <li><a href="javascript:void(0)">Another Item</a></li>
              </ul>
            </li>
            <li class="more"><a href="javascript:void(0)">Another submenu</a>
              <ul class="submenu fly-out-right">
                <li><a href="javascript:void(0)">Sub-submenu</a></li>
                <li><a href="javascript:void(0)">An Item</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="nav-link"><a href="javascript:void(0)">Sign up</a></li>
      </ul>
    </nav>
  </div>
</header>
*/

module.exports = {init, render};
