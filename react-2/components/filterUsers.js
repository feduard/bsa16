import React, { Component } from 'react'
import './filterUsers.css'

class FilterUsers extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="filter-users">
                <input type="text" placeholder="Searched name" id="filterInput" onInput={this.props.handleFilter}/>
            </div>
        )
    }
}

export default FilterUsers