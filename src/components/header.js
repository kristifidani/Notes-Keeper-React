import React, { Component } from 'react';
import '../styles/styles.css';
import HighlightIcon from '@material-ui/icons/Highlight';

class HeaderComp extends Component {
    render() {
        return (
            <div>
            <header>
                <h1><HighlightIcon /> Keeper</h1>
            </header>
                
            </div>
        );
    }
}

export default HeaderComp;