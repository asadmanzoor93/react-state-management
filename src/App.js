import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AddNewUser from './AddNewUser';
import UsersListing from './UsersListing';

class App extends Component {
    state = {
        users_list: [],
    };

    createUser = (user) => {
        this.setState(state => ({
            users_list: [...state.users_list, user],
        }));
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <AddNewUser users_list={this.state.users_list} createUser={this.createUser}/>
                <UsersListing users_list={this.state.users_list}/>
            </div>
        );
    }
}

export default App;
