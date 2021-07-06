import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Pin from './mobile-images/pin.jpg'



export default function Contact() {
    return (
        <div>


            <Header />


       {/* Style */}
       <style
                dangerouslySetInnerHTML={{
                    __html: `


                    @media only screen and (max-width: 700px) {
                        h1 {
                          font-size: 31px !important;
                          text-align: center !important;
                          margin: 10px 70px;
                        }
                  
                        #h6 {
                          font-size: 14px !important;
                          text-align: center !important;
                          padding: 2px 23px !important;
                         
                        }
                  
                        span>div {
                          width: 100% !important;
                         
                        }
                   
                      span>span>div{   /*   Queries    */
                        padding-left:36px !important;
                      }
                  
                      sup>img{
                        height: 14px !important;
                          width: 14px !important;
                      }
                     
                  #marginremove{
                  
                      margin-right: 0px;
                      margin-left: 0px;
                  }
                  
                      }
                  
                      
                  
                  
                      #body-contact-us {
                        overflow-x: hidden;
                      }


                    ` }} />


            <div>
                {/* Contact Us */}
                <br /><br />
                <h1 style={{ textAlign: 'center', fontFamily: '"Ubuntu", sans-serif' }} id="contact-us-id-hash">Contact Us</h1>
                <br />
                <h6 id="h6" style={{ textAlign: 'center', fontWeight: 'bold' }}><sup><img id="imgpin " src={Pin} alt="" height="25px" width="25px" /></sup>Serena Mobile Mall, Sakhi
    &nbsp;Hassan, Opp Samanzar Banquet Shahra e Sher Shah Suri، Sector 15 A 1 Buffer Zone, Karachi, Karachi City, Sindh</h6>
                <span>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14469.474695113848!2d67.0583448!3d24.9535683!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xca42f3ba074b489c!2sSerena%20Mobile%20Mall!5e0!3m2!1sen!2s!4v1589372070715!5m2!1sen!2s" />
                    </div>
                </span>
                {/*  */}
                <br />
                <br />
                <br id="usefullink" />
                {/* Form */}
                <h1 style={{ textAlign: 'center', fontFamily: '"Ubuntu", sans-serif' }} id="forqueries">For Queries</h1>
                <br />
                <form method="POST" autoComplete="off" style={{ alignItems: 'center' }}>
                    <div className="container-fluid row col-md-12 col-sm-12 align-content-center" id="marginremove">
                        {/* Extra Dic For  */}
                        <div className="container col-md-2 col-sm-12 align-content-center" />
                        {/*  */}
                        <div className="container col-md-4 col-sm-12 align-content-center">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Full Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" maxLength={25} size={25} pattern="[A-z]{3,30}" title="Enter Your Full Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Your Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email" size={25} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Your Phone</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone" pattern="[0-9]{10}" maxLength={10} size={25} title="Minimum 10 digits" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Subject</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Subject" pattern="[A-z]{2,30}" title="Enter Subject" />
                            </div>
                        </div>
                        <div className="container col-md-4 col-sm-12 align-content-center">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Message</label>
                                <textarea cols={25} rows={12} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Message" defaultValue={""} />
                            </div>
                        </div>
                        {/* Extra Dic For  */}
                        <div className="container col-md-2 col-sm-12 align-content-center" />
                        {/*  */}
                    </div>
                    <span>
                        <span>
                            <div style={{ padding: '1px 240px 1px 240px' }}>
                                <button type="#?" className="btn btn-primary">Submit</button>
                            </div>
                        </span>
                    </span>
                </form>
                {/*  */}
                <br />
                <br />
            </div>











            <Footer />


        </div>
    )
}
