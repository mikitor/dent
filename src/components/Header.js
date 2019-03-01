import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Dent</h1>
    <ul>
      <li>
        <NavLink to="/" activeClassName="selected" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/add" activeClassName="selected">
          Add Expense
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
