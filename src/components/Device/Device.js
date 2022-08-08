import React from 'react';
import DeviceDataile from '../DeviceDataile/DeviceDataile';

const Device = (props) => {
    return (
        <div>
            <h2>I have: {props.name}</h2>
            <DeviceDataile price={props.price}></DeviceDataile>
        </div>
    );
};

export default Device;