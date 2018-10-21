import React from 'react';
import PropTypes from 'prop-types';
import '../static/css/ItemList.css';

const ItemList = (props) => {
  const items = props.items;
  return (<div>
    <p className="items">Items</p>
    <ol className="item-list">
      {items.map((item, index) => <li key={index}>{item}</li>)}</ol>
  </div>);
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemList;
