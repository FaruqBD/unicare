import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { id, name, price, description, img } = service;
    return (
        <div className="service pb-3 rounded">
            <img src={img} alt="" />
            <h3 className="px-3 pt-3">{name}</h3>
            <h5 className="px-3">Charge: {price}</h5>
            <p className="px-3">{description}</p>
            <Link className="px-3" to={`/service/${id}`}>
                <button className="btn btn-primary">Show Details</button>
            </Link>
        </div>
    );
};

export default Service;