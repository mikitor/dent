import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div>
    <Link to={`/edit/${id}`}>{description}</Link>
    <p>Amount: {amount}</p>
    <p>CreatedAt: {moment(createdAt).format('LL')}</p>
  </div>
);

export default ExpenseListItem;
