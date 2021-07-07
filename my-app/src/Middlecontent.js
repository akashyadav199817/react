import React from 'react';
import { Link } from 'react-router-dom';

const Hello = () =>{
    return(
        <>
          <div className="bannersection">
              <div className="bannercircle cir1"></div>
              <div className="bannercircle cir2"></div>
              <div className="bannercircle cir3"></div>
              <div className="bannercircle cir4"></div>
            <div className="container">
                <div className="bannercption">
                    <h2>the system manupulated</h2>
                    <p>the lorem ispsum text that more read the susm the easy ase way 
                    the lorem ispsum text that more read the susm the easy ase way
                    </p>
                    <div className="bannerbtn">
                        <ul className="reset">
                            <li className="btnhome"><Link to="/">Home</Link></li>
                            <li className="btnabt"><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="bannerimg">
                    <img src="baner2.png"/>
                </div>
                <div className="clear"></div>
            </div>
            </div>
            <div className="aboutsection">
                <div className="container">
                    <div className="aboutimg">
                        <img src="new.jpg" />
                    </div>
                    <div className="abouttext">
                        <h3>BEING <span>SMART</span></h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        </>
    );

    // return React.createElement(
    //     'div',
    //     {className:'new'},
    //     React.createElement('h1',null ,'Akash')
    //     )
}



export default Hello 
