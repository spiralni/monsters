import { Component } from "react";

import './search-box.styles.css'

class SearchBox extends Component {

    onSearchChange = (e) => {
        this.props.onSearchChange(e.target.value.toLowerCase())
    }

    render() {
        const { placeholder, className } = this.props

        return <input 
          type="search"
          placeholder={placeholder}
          className={`search-box ${className}`}
          onChange={this.onSearchChange}
        ></input>
    }
}

export default SearchBox