import React from 'react';
import { useParams } from 'react-router';
import useContextServices from '../../hooks/useContextServices';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [services] = useContextServices()
    
    console.log(services);
    return (
        <div id="services">
            <h2 className="text-primary text-center mt-5">Our services</h2>
            <div className="service-container">
                <h3 className="my-5 text-center">Service Id : {serviceId}</h3>
                {/* console.log(detailServices);
                {detailServices.filter(selectedServices =>
                    selectedServices.id = parseInt(serviceId)).map(service => <Service
                        key={service.id}
                        service={service}></Service>
                    )
                } */}
            </div>
        </div>
    );
};

export default ServiceDetails;