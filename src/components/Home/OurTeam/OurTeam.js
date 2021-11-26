import React from 'react';
import Member from '../Member/Member';
const teamMember = [
    {
        id: '1',
        img: "http://medicare.bold-themes.com/clinic/wp-content/uploads/sites/2/2015/12/pic-team-1.jpg",
        name: 'Sussie Wolff',
        specialize: 'Pediatrician'
    },
    {
        id: '2',
        img: 'http://medicare.bold-themes.com/clinic/wp-content/uploads/sites/2/2015/12/pic-team-2.jpg',
        name: 'Ashley Willson',
        specialize: 'Dental surgeon'
    },
    {
        id: '3',
        img: 'http://medicare.bold-themes.com/clinic/wp-content/uploads/sites/2/2015/12/pic-team-3.jpg',
        name: 'Gabriela Beckett',
        specialize: 'Cosmetic Surgeon'
    },
    {
        id: '4',
        img: 'http://medicare.bold-themes.com/clinic/wp-content/uploads/sites/2/2015/12/pic-team-4.jpg',
        name: 'George Button',
        specialize: 'General Doctor'
    },
]

const OurTeam = () => {
    return (
        <div id="experts" className="container">
            <h2 className="fw-bolder text-primary text-uppercase text-center mt-5 mb-4">Our Team</h2>
            <div className="row mb-5">
                {
                    teamMember.map(member => <Member
                        key={member.id}
                        member={member}
                    >

                    </Member>)
                }
            </div>
        </div>
    );
};

export default OurTeam;