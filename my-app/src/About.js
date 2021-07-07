import React from 'react'
const newDate = new Date().toLocaleDateString();
const newTime = new Date().toLocaleTimeString();


function About(){
    return (
        <>
          <p> The Current Date {newDate}</p>
          <p> The Current Time {newTime}</p>
        </>
    )
}

export default About