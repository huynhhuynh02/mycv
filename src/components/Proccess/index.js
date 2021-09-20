import React, {useEffect } from 'react';
import './Process.scss';
function Process(props) {
    return (
        <div className="process-box circle">
            <div className="name">{props.name}</div>
            <div className="process">
                <span>{props.limit}</span>
                <div className="fill"></div>
                <div className="bar"></div>
            </div>
        </div>
    );
}
export default Process;