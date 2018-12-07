import React from 'react';
import RainBow from '../Hoc/Rainbow'


const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, culpa, quas illum facilis, nesciunt dolorem delectus ratione vel molestiae obcaecati expedita. Saepe, voluptate aliquam. Saepe ad magni facilis fuga esse!</p>
        </div>
    )
}

export default RainBow(About)