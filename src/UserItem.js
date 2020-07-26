import React from 'react';
import PropTypes from 'prop-types';


const UserItem = props => {
  return (
    <li className="user">
      <p>Username: {props.user.username}</p>
      <p>Number of Games Played: {props.show_games_counter ? props.user.games_played : '*'}</p>
    </li>
  );
};

UserItem.propTypes = {
  show_games_counter: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default UserItem;
