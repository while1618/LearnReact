import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onSearchSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onSearchSubmit} className="ui form">
          <div className="field">
            <label htmlFor="videoSearch">Video Search:</label>
            <input type="text" id="videoSearch" value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
