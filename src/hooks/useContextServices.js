import { useEffect, useState } from 'react';

const useContextServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        [
            services
        ]
    );
};

export default useContextServices;