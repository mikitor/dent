import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <div>
    <h3>Page not found</h3>
    <Link to="/">Home</Link>
  </div>
);

export default NoMatch;
