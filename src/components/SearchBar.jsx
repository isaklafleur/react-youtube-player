import React, { Component } from 'react';

// Class Based Components (ES6 class) - Internal record keeping in React.


// Remove the common functional component and replace it with
// ES6 Class Component
// const SearchBar = () => <input />;

// When adding extends Components, the customs class component
// receives more functions from React core.
class SearchBar extends Component {

  // code cleaned up
  render() {
    return <input onChange={event => console.log(event.target.value)} />;
  }
}
/*
  // Event handler (event listener for change events)
  onInputChange(event) {
    console.log(event.target.value);
  }
  // All Class Components must have a render method
  render() {
    // onChange is a React defined property
    return <input onChange={this.onInputChange} />;
  }
*/


export default SearchBar;

