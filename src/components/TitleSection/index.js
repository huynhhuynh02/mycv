import React, { useState, useEffect }  from 'react';
import './TitleSection.scss';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function TitleSection(props) {
    const data = props.breadcrumb;
    const listBreadcrumb = data.map((item, index) => 
        <Breadcrumb.Item href="#" key={index}>{item}</Breadcrumb.Item>
    );
    return (
        <div className="Title-Section">
            <h2 className="title-large glitch" data-text={props.title}>{props.title}</h2>
            <Breadcrumb>
                {listBreadcrumb}
            </Breadcrumb>
        </div>
    );
}
export default TitleSection;