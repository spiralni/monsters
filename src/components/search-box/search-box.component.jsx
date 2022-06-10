import { Component } from "react";

class SearchBox extends Component {

    onSearchChange = (e) => {
        this.props.onSearchChange(e.target.value.toLowerCase())
    }

    render() {
        const { placeholder, className } = this.props

        return <input 
          type="search"
          placeholder={placeholder}
          className={className}
          onChange={this.onSearchChange}
        ></input>
    }
}

export default SearchBox