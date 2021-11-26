import React from 'react';

const Contact = () => {
    return (
        <div className="contact-section pb-4" id="contact">
            <div className="container my-3">
                <div className="text-center">
                    <h1 className=" pt-4 fw-bolder text-primary text-uppercase">Contact Us</h1>
                </div>
                <div className="row pt-2">
                    <div className="col-md-6 col-sm-12 my-auto">
                        <h2 className="text-center py-3 fw-bolder primary-color">We'd love to here from you</h2>
                        <p className="text-center mx-5">Whenever you have any question about our service. Just leave a
                            message. We will contact you soon.</p>
                    </div>
                    <div className="col-md-6 col-sm-12">

                        <form className="mx-5">
                            <h3 className="uppercase py-3 primary-color fw-bolder">Leave a message</h3>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputName"
                                    aria-describedby="emailHelp" placeholder="Name" />
                            </div>
                            <br />
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder=" email" />
                            </div>
                            <br />

                            <div className="form-group">
                                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message"
                                    rows="3"></textarea>
                            </div>
                            <br />

                            <button type="submit" className="btn btn-primary px-3">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;