import React from 'react';
import ReactDom from 'react-dom';
import Navi from '../components/Navigation'



function Header(){
    return(
        <React.Fragment>
            <header>
                <Navi/>
            </header>
        </React.Fragment>
    );

};

export default Header