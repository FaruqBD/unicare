import React from 'react';
import useContextServices from '../../hooks/useContextServices';
import Consultant from '../Consultant/Consultant';

const Consultants = () => {
    const [services] = useContextServices();
    return (
        <div id="experts" className="container">
            <h2 className="fw-bolder text-primary text-uppercase text-center mt-5 mb-4">Our Consultants</h2>
            <div className="row my-5">
                {services.filter(selectedServices =>
                    selectedServices.consultantId <= 1).map(consultant => <Consultant
                        key={consultant.id}
                        consultant={consultant}></Consultant>
                    )
                }
            </div>
        </div>
    );
};

export default Consultants;