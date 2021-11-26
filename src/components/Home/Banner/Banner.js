import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/9HTmkPD/banner1.jpg"
                        alt="Our Services"
                    />
                    <Carousel.Caption>
                        <h3>Quick Service</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/TP5Yk1K/banner2.jpg"
                        alt="Our Services"
                    />

                    <Carousel.Caption>
                        <h3>Quality Treatment</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/5xR0S02/banner3.jpg"
                        alt="Our Services"
                    />

                    <Carousel.Caption>
                        <h3>100% Satisfaction</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;