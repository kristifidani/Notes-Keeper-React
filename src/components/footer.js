import React from 'react';
import '../styles/styles.css';


const date = new Date();
const year = date.getFullYear();

function FooterComp() {
    return (
        <div>
            <footer>
                <p>Copyright <span>&#169;</span> {year}</p>
            </footer>
        </div>
    );
}

export default FooterComp;