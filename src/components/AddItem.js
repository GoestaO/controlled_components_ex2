import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Controlled component
class AddItem extends Component {

  state = {
    value: ''
  }

  handleChange = event => {
    this.setState({value: event.target.value});
  };

  componentDidMount() {
    this
      ._inputField
      .focus();
  }

  addItem = event => {
    this
      .props
      .onAddItem(this.state.value);
    this.clearInputField();
    this
      ._inputField
      .focus();
    event.preventDefault();
  };

  clearInputField = () => {
    this.setState({value: ''})
  }

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  render() {
    return (<div>
      <form onSubmit={this.addItem}>
        <input type="text" ref={(a) => this._inputField = a} placeholder="Enter New Item" value={this.state.value} onChange={this.handleChange}/>
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    </div>);
  }
}

AddItem.propTypes = {
  onAddItem: PropTypes.func.isRequired
}

export default AddItem
