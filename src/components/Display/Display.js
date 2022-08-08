import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div style={{ border: '2px solid red', margin: '10px' }}>
            <h3>Name: {props.name}</h3>
            <p>Today for steps: {props.steps}</p>
            <Dial steps={props.steps}></Dial>
        </div>

    );
};

export default Display;