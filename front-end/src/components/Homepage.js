import React, { Component } from 'react'

class Homepage extends Component {
    render() {
        return (
     <><><><section className={`py-4 my-4`} id="first-section">
                <div className={`container-fluid`}>
                    <div className={`row height`}>
                        <div className={`col-md-6 col-sm-12 d-flex justify-content-center align-items-center  text-blue py-3`}>
                            <div>
                                <h2>Find the right </h2>
                                <h2>internship for you.</h2>
                                <p className={`lead text-dark`} id="kickstart">Gain work experience & kickstart your career.</p>
                                <a className={`btn btn-blue text-white`} href="/">Apply Now </a>
                            </div>
                        </div>
                        <div className={`col-md-6 col-sm-12`}>
                            <img src="static/images/intro.png" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                    <div className={`container jumbotron py-4 my-4`}>
                        <div className={`row`}>
                            <div className={`mx-auto text-blue`}>
                                <h3>All you need to know about the internship application</h3>
                                <div className={`title-underline bg-warning `}></div>
                            </div>
                        </div>
                        <div className={`row`}>
                            <div className={`col-md-6 col-sm-12`}>
                                <img className={`m-2`} src="static/images/reading-book.png" />
                            </div>
                            <div className={`col-md-6 col-sm-12 mx-auto`}>
                                <h4>General Requirements</h4>
                                <div>
                                    <span className="">
                                        <i className={`mr-2 far fa-check-circle text-blue`}></i>
                                        A person applying must be a student of University of Cape Coast.
                                    </span>
                                </div>
                                <div>
                                    <span className="">
                                        <i className={`mr-2 far fa-check-circle text-blue`}></i>
                                        A student must have completed at least 1 academic year in University of Cape Coast.
                                    </span>
                                </div>
                                <div>
                                    <span className="">
                                        <i className={`mr-2 far fa-check-circle text-blue`}></i>Applicant must have read the Place of internship.
                                     </span>
                                </div>
                                <div>
                                <span className=""><i className={`mr-2 far fa-check-circle text-blue`}></i> Applicant must have updated their profile details for easy application.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section></>
                <section>
                    <div className={`container py-5 my-5`}>
                        <div className={`row`}>
                            <div className={`col-12 text-blue text-center py-4 mt-4`}>
                                <h4>HOW TO APPLY</h4>
                            </div>
                        </div>
                        <div className={`row`}>
                            <div className={`col-md-4 col-lg-4 text-center  my-2`}>
                                <div className={`bg-step1`}>
                                    <img className={`rounded-circle bg-light w-25 m-3`} src="static/images/business-3d-new-step-man-2.png" />
                                    <h4>Step 1</h4>
                                    <p className={`py-4`}>Create account using the "Create account" button</p>
                                </div>
                            </div>
                            <div className={`col-md-4 col-lg-4 text-center text-white my-2`}>
                                <div className={`bg-step2`}>
                                    <img className={`rounded-circle bg-light w-25 m-3`} src="static/images/business-3d-new-step-man-2.png" />
                                    <h4>Step 2</h4>
                                    <p className={`py-4`}>Complete the application form, add necessary documents and update your profile details</p>
                                </div>
                            </div>
                            <div className={`col-md-4 col-lg-4 text-center text-white my-2`}>
                                <div className={`bg-step3`}>
                                    <img className={`rounded-circle bg-light w-25 m-3`} src="static/images/business-3d-new-step-man-2.png" />
                                    <h4>Step 3</h4>
                                    <p className={`py-4`}>Shortlisted Applicants for the internship will be notified.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section></>
                <section>
                    <div className={`container`}>
                        <div className={`row`}>
                            <div className={`col text-center text-blue py-4 my-4`}>
                                <h4>What other students have to say about their internship.</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div className={`col mx-auto text-center`}>
                                <div id="example" className={`carousel slide`} data-ride="carousel">
                                    {/* indicators */}
                                    <ul className={`carousel-indicators`}>
                                        <li data-target="#example" data-slide-to='0' className={`active`}></li>
                                        <li data-target="#example" data-slide-to='1'></li>
                                        <li data-target="#example" data-slide-to='2'></li>
                                    </ul>
                                    {/* images */}
                                    <div className={`carousel-inner`}>
                                        <div className={`carousel-item active`}>
                                            <div className={`text-shift`}>
                                                <h4 classname="">Kingsley Twum</h4>
                                            </div>
                                            <img src="static/images/student1.png" className={`w-50 d-block`} />
                                        </div>
                                        <div className={`carousel-item`}>
                                            <img src="static/images/student2.png" className={`w-50 d-block`} />
                                        </div>
                                        <div className={`carousel-item`}>
                                            <img src="static/images/student5.png" className={`w-50 d-block`} />
                                        </div>
                                    </div>
                                    {/* end of images */}
                                    {/* controls */}
                                    <a href="#example" className={`carousel-control-prev`} data-slide="prev">
                                        <span><i className={`fa-2x fas fa-chevron-circle-left text-blue`}></i></span>
                                    </a>
                                    <a href="#example" className={`carousel-control-next`} data-slide="next">
                                        <span><i className={`fa-2x fas fa-chevron-circle-right text-blue`}></i></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section></>
       )
    }
}

export default Homepage
