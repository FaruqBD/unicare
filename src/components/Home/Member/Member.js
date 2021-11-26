import React from 'react';

const Member = ({ member }) => {
    const { name, img, specialize } = member;
    return (
        <div className="col-lg-3 col-sm-6 col-12">
            <div className="team-member mx-1 rounded p-2">
                <img className="img-fluid rounded-circle px-5 my-3" src={img} alt="{name}" />
                <h3 className="text-center">{name}</h3>
                <h5 className="text-center">{specialize}</h5>
                <p>{name} is one of the most common heart tests which monitors your heart rate, rhythm and electrical activity.</p>
            </div>
        </div>
    );
};

export default Member;