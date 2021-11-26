import React from 'react';

const Consultant = ({consultant}) => {
    console.log(consultant);
    const { drName, img, drCat } = consultant;
    return (
        <div className="col-lg-3 col-sm-6 col-12">
            <div className="team-member mx-1 my-3 rounded p-2">
                <img className="img-fluid" src={img} alt="{name}" />
                <h3 className="text-center mt-3">{drName}</h3>
                <h5 className="text-center">{drCat}</h5>
                <p>{drName} is one of the most common heart tests which monitors your heart rate, rhythm and electrical activity.</p>
            </div>
        </div>
    );
};

export default Consultant;