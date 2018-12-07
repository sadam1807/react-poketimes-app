import React from 'react';

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/about');
    },2000)

    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, culpa, quas illum facilis, nesciunt dolorem delectus ratione vel molestiae obcaecati expedita. Saepe, voluptate aliquam. Saepe ad magni facilis fuga esse!</p>
        </div>
    )
}

export default Contact