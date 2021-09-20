import React, {useEffect } from 'react';
import './ServiceItem.scss';
function ServiceItem(props) {
    return (
        <div className="service-item">
            <div className="icon">
                {props.children}
            </div>
            <div className="name">
                <h5 className="text-light">{props.name}</h5>
            </div>
            <div className="text">
                <p>{props.text}</p>
            </div>
        </div>
    );
}
export default ServiceItem;