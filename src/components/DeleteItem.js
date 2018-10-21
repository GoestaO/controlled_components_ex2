import React from 'react';
import PropTypes from 'prop-types';

const DeleteItem = (props) => {

  return (<div>
    <button onClick={props.deleteLastItem} disabled={props.buttonDisabled}>
      Delete Last Item
    </button>
  </div>);

}

DeleteItem.propTypes = {
  deleteLastItem: PropTypes.func.isRequired,
  buttonDisabled: PropTypes.bool.isRequired
}

export default DeleteItem;
