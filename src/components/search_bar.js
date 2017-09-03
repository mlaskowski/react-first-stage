import React, { Component } from 'react';

//functional component
// const SearchBar = () => {
//     return <input />;
// }

//class component have state and more
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    render() {
        return <input
            onChange={event => this.setState({term: event.target.value})}
            value={this.state.term}
        />
    }
}

export default SearchBar;