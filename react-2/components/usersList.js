import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./actions/listActions";

import AddingUsers from './addingUsers.js'
import FilterUsers from './filterUsers.js'
import AddedUsersList from './addedUsersList.js'
import './usersList.css'

class UsersList extends Component {
    constructor() {
        super();

        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleAdd() {
        if ( document.getElementById('addingInput').value ){
            const { users, counter } = this.props.stateFromReducer;
            var newUser = {
                name: document.getElementById('addingInput').value,
                id: counter,
                visibility: true
            };
            var newUsers = users; newUsers.push(newUser);
            this.props.userAdding(newUsers);
        }
    }

    handleRemove(id) {
        const { users } = this.props.stateFromReducer;
        var newUsers = [];
        for (var i = 0; i < users.length; i++) {
            if (users[i].id != id) {
                newUsers.push(users[i]);
            }
        }
        this.props.userRemoving(newUsers);
    }

    handleFilter() {
            const { users } = this.props.stateFromReducer;
            var compString = document.getElementById('filterInput').value;
            var newUsers = users;
            for (var i = 0; i < newUsers.length; i++) {
                if (!newUsers[i].name.indexOf(compString)) {
                    newUsers[i].visibility = true;
                }else{
                    newUsers[i].visibility = false;
                }
            }
            this.props.userFiltering(newUsers);
    }

    render() {
        return (
            <div className='app-content'>
                <AddingUsers handleAdd={this.handleAdd}/>
                <FilterUsers handleFilter={this.handleFilter}/>
                <AddedUsersList users={this.props.stateFromReducer.users} handleRemove1={this.handleRemove}/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}
const UsersListConnected = connect(mapStateToProps, mapDispatchToProps)(UsersList);
export default UsersListConnected;