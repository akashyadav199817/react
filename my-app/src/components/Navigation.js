import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navi extends Component{
 render(){
     return (
    <div className="navigation">
        <div className="container">
            <div className="logo">
                 <img src="logo.png" />
            </div>
            <ul className="reset">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">login</Link></li>
            </ul>
            <div className="clear"></div>
        </div>
    </div>
     )
 }
}    

export default Navi