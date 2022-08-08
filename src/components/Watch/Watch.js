import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }
    useEffect(() => {
        console.log(steps)
    }, [steps])
    return (
        <div style={{ border: '2px solid blue', margin: '20px' }}>
            <h2>This my smart watch</h2>
            <h4>My Current Steps: {steps}</h4>
            <button onClick={increaseSteps}>Run........</button>
            <Display name="garmin" steps={steps}></Display>
        </div>
    );
};

export default Watch;