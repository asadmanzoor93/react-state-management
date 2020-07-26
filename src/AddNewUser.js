import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddNewUser extends Component {
  state = {
    user: {
      first_name: '',
      last_name: '',
      username: '',
    },
    duplicate_user: false,
  };

  checkUserAlreadyExist = (new_username) => {
    const users_list = this.props.users_list;
    for (let user of users_list) {
      if (user.username === new_username) {
        return true;
      }
    }
    return false;
  };

  handleSubmit = event => {
    event.preventDefault();
    let checkUserAlreadyExist = this.checkUserAlreadyExist(this.state.user.username);
    this.setState(() => ({
      duplicate_user: checkUserAlreadyExist,
    }));

    if (!checkUserAlreadyExist) {
      let user = this.state.user;
      user.games_played = 0;
      this.props.createUser(user);
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState(state => ({
      ...state,
      user: {
        ...state.user,
        [name]: value,
      },
    }));
  };

  isDisabled = () => {
    const { first_name, last_name, username } = this.state.user;
    return first_name === '' || last_name === '' || username === '';
  };

  render() {
    const { first_name, last_name, username } = this.state.user;

    return (
      <div>
        <h1>New User</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="first_name"
              placeholder="Enter User First Name"
              value={first_name}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="last_name"
              placeholder="Enter User Last Name"
              value={last_name}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Enter unique username"
              value={username}
              onChange={this.handleInputChange}
            />
          </div>
          <button disabled={this.isDisabled()}>Add</button>
        </form>
        {this.state.duplicate_user ? (
          <p className="error">Please select a unique Username. A user with same username already exist.</p>
        ) : (
          ''
        )}
      </div>
    );
  }
}

AddNewUser.propTypes = {
  createUser: PropTypes.func.isRequired,
  users_list: PropTypes.array.isRequired,
};

export default AddNewUser;
