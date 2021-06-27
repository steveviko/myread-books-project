import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import '../Header.css';

class Header extends Component {
    state = {  }
    render() { 
        return (
            <div className="list-books-title">
                 
                 <div className="header">
                     <div className="logo">
                    < MenuIcon className="menu_icon"/>
                    <Link to="/"  className="link">                    
                    <span className="title"> MyReads</span>
                    </Link>
                    </div>
                 </div>
            
              
            </div>
        );
    }
}
 
export default Header;