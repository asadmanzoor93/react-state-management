import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem';

class UsersListing extends Component {
    state = {
        show_games_counter: true,
    };

    handleGamesPlayedStatus = () => {
        this.setState((state) => ({
            show_games_counter: !state.show_games_counter,
        }));
    };

    render() {
        const {show_games_counter} = this.state;
        const {users_list} = this.props;
        const games_played = (
            <div>
                <button className="smallButton" onClick={this.handleGamesPlayedStatus}>
                    {show_games_counter ? 'Hide ' : 'Show '} the Number of Games Played
                </button>
            </div>
        );
        const users = users_list.map(user => (
            <UserItem key={user.username} user={user} show_games_counter={show_games_counter}/>
        ));

        return (
            <div>
                <h1>Users Listing</h1>
                {users && users.length > 0 ? games_played : ''}
                <ol>{users}</ol>
            </div>
        );
    }
}

UsersListing.propTypes = {
    users_list: PropTypes.array.isRequired,
};

export default UsersListing;
