import React, {useEffect } from 'react';
import './ResumeItem.scss';
function ResumeItem(props) {
    return (
        <div className={props.active ? 'resume-item active' : 'resume-item'}>
            <div className="date">{props.startdate} - {props.enddate}</div>
            <div className="name"><h5 className="text-light">{props.name}</h5></div>
            <div className="description">{props.description}</div>
        </div>
    );
}
export default ResumeItem;