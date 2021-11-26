import React from 'react';
import useContextServices from '../../hooks/useContextServices';
import Service from '../Service/Service';
import './Services.css';

const Services = (props) => {
    const [services] = useContextServices();
    return (
        <div id="services" className="container mt-5">
            <h2 className="fw-bolder text-primary mb-4 text-center">OUR SERVICES</h2>
            <div className="service-container">
                {services.filter(selectedServices =>
                    selectedServices.id <= parseInt(props?.limit)).map(service => <Service
                        key={service.id}
                        service={service}></Service>
                    )
                }
            </div>
        </div>
    );
};

export default Services;