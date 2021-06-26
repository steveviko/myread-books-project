import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class SearchButton extends Component {
    state = {  }
    render() { 
        return (  
            
            
            
                <div className="open-search">
                {/* <button onClick={() => this.props.showSearchPage(true)}>Add a book</button>
                 */}
                  <Link to="/search"><button>Add a book </button></Link>
                </div>
            

        );
    }
}
 
export default SearchButton;

