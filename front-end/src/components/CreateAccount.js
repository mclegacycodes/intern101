import React, { Component } from 'react'
import Navbar from './Navbar'

 class CreateAccount extends Component {
    render() {
        return (
            <><div>
                <Navbar />
            </div>
            <section className={`py-5 bg-account`}>
                    <div className={`container`}>
                        <div className={`row height`}>
                            <div className={`col-md-6 col-lg-6 col-sm-12 no-gutter`}>
                                <img className={``} src="static/images/account.png" />
                            </div>
                            <div className={`col-md-12 col-lg-6 col-sm-12 col-xs-12 mx-auto bg-white`}>
                                <div className={`text-blue my-5`}>
                                    <h3>Create Your Account</h3>
                                </div>
                                <div className={`mr-4`}>
                                    <form className={``}>
                                       <span className={` d-flex justify-content-between mx-5`}>
                                           <label className={`firstname_label`}>First Name</label>
                                           <label className={`lastname_label`}>Last Name</label>
                                       </span>
                                       <div>
                                           <input type="text" className={`firstname_input mr-4`} name="f_name" />
                                           <input type="text" className={`lastname_input ml-4`} name="f_name" />
                                       </div>
                                       <br/>
                                       <div className={`index_label`}>
                                           <label>Index Number</label>
                                       </div>
                                       <div>
                                           <input type="text" className={`index_input`} name="index_number"/>
                                       </div>
                                       <br/>
                                       <div className={`email_label`}>
                                           <label>Student Email</label>
                                       </div>
                                       <div>
                                           <input type="email" className={`index_input`} name="index_number"/>
                                       </div>
                                       <br/>
                                       <div className={`password_label`}>
                                           <label>Password</label>
                                       </div>
                                       <div>
                                           <input type="password" className={`index_input`} name="index_number"/>
                                       </div>
                                       <br/>
                                       <div className={`passwordConfirm_label`}>
                                           <label>Comfirm Password</label>
                                       </div>
                                       <div>
                                           <input type="password" className={`index_input`} name="index_number"/>
                                       </div>
                                       <button type="submit" className={`btn btn-blue text-white m-4 w-50`}>Create Account</button>
                                    </form>
                                    <div>
                                        <small className={`lead`}>
                                            Already Have an account? <a className={``} href="#">Sign In here</a>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section></>
        )
    }
}

export default CreateAccount
