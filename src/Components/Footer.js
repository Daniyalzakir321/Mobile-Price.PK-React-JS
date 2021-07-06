import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Social Icons
import socialicons1 from './social-icons/facebook.svg'
import socialicons2 from './social-icons/instagram.svg'
import socialicons3 from './social-icons/twitter.svg'
import socialicons4 from './social-icons/whatsapp.svg'
import socialicons5 from './social-icons/youtube.svg'

//  Footer Icons
import footericons1 from './footer-icons/location-pin.svg'
import footericons2 from './footer-icons/mail.svg'
import footericons3 from './footer-icons/phone.svg'

// Back To Top
import bbt from './mobile-images/backtotop.png'

// import Skeleton from 'react-loading-skeleton';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function Footer() {

    // const [data, setData] = useState();
    // const [loading, setLoading] = state(false);

    // useEffect(() => {

    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 5000)

    // }, [])




    return (
        <div>

            <div>

                <br /><br /><br />
                {/* ================ Footer ==================*/}
                <footer className="page-footer font-small unique-color-dark" style={{ color: 'white', backgroundColor: '#212121 !important' }}>
                    <div style={{ backgroundColor: '#3d5afe !important' }} id="footercolorblue">
                        <div className="container">
                            {/* Grid row*/}
                            <div className="row py-4 d-flex align-items-center">
                                {/* Grid column */}
                                <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">

                                    <h6 className="mb-0" style={{ fontFamily: '"Ubuntu", sans-serif' }}>Get connected with us on social networks!</h6>

                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-5 col-lg-7 text-center text-md-right">
                                    <a href="https://www.facebook.com/store.accessories.pk" target="_blank"><img src={socialicons1} alt="Loading ..." width={27} height={26} /> </a> &nbsp;&nbsp;&nbsp;
            <a href="https://twitter.com/vivopakistan" target="_blank"><img src={socialicons3} alt="Loading ..." width={27} height={26} /> </a> &nbsp;&nbsp;&nbsp;
            <a href="https://www.instagram.com/accessories.pk" target="_blank"><img src={socialicons2} alt="Loading ..." width={26} height={26} /> </a>  &nbsp;&nbsp;&nbsp;
            <a href="https://www.youtube.com/user/unboxtherapy" target="_blank"><img src={socialicons5} alt="Loading ..." width={29} height={27} /> </a>  &nbsp;&nbsp;&nbsp;
            <a href="https://www.whatsapp.com" target="_blank"><img src={socialicons4} alt="Loading ..." width={27} height={26} /> </a>
                                </div>
                                {/* Grid column */}
                            </div>
                            {/* Grid row*/}
                        </div>
                    </div>
                    {/* Footer Links */}
                    <div className="container text-center text-md-left mt-5">
                        {/* Grid row */}
                        <div className="row mt-3">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* Content */}
                                <h6 className="text-uppercase font-weight-bold">MOBILEPRICE.PK</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#304ffe !important' }} />
                                <p style={{ fontFamily: 'sans-serif', fontSize: '15px', color: 'white' }}>
                                    Here you will find all usefull &amp; reliable accessories
                                    that you need in daily life. Like, Mobile Phones, Laptop, Desktop PCs, Power Bank etc.
          </p>
                            </div>
                            {/* Grid column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase font-weight-bold">Products</h6>
                                <hr className=" mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#304ffe !important' }} />
                                <p>
                                    <Link to="/#samsung" style={{ fontFamily: 'sans-serif', fontSize: '14.5px', color: 'white' }} >
                                        Samsung
                                    </Link>

                                </p>
                                <p>
                                    <Link to="/#apple" style={{ fontFamily: 'sans-serif', fontSize: '14.5px', color: 'white' }}  >
                                        Apple
                                    </Link>

                                </p>
                                <p>
                                    <Link to="/#oppo" style={{ fontFamily: 'sans-serif', fontSize: '14.5px', color: 'white' }}  >
                                        Oppo
                                    </Link>

                                </p>
                            </div>
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#304ffe !important' }} />
                                <p>
                                    <Link to="/Blogs" style={{ fontFamily: 'sans-serif', fontSize: '14.5px', color: 'white' }}  >
                                        Latest Phone Blogs
                                    </Link>

                                </p>
                                <p>
                                    <Link to="/Contact#forqueries" style={{ fontFamily: 'sans-serif', fontSize: '14.5px', color: 'white' }}>
                                        For Queries
                                    </Link>

                                </p>
                                <p>
                                    <Link to="/Contact#contact-us-id-hash" style={{ fontFamily: 'sans-serif', fontSize: '14.5px', color: 'white' }}>
                                        Help
                                    </Link>

                                </p>
                            </div>
                            {/* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase font-weight-bold"> Contact</h6>
                                <hr className=" mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#304ffe !important' }} />
                                <p>
                                    <Link to="/Contact#contact-us-id-hash" style={{ fontFamily: 'sans-serif', fontSize: '14.5px', color: 'white' }}>

                                        <sup> <img src={footericons1} alt="" width={19} height={20} /></sup> Serena Mall, Sec 15-A, PK
                                    </Link>

                                </p>
                                <p>   <a href="mailto:" style={{ fontFamily: 'sans-serif', fontSize: '15px', color: 'white' }}>
                                    <img src={footericons2} alt="" width={21} height={19} /> info@mobileprice.com</a></p>
                                <p style={{ fontFamily: 'sans-serif', fontSize: '14.5px', color: 'white' }}>
                                    <img src={footericons3} alt="" width={19} height={20} /> + 92 876 7564</p>
                            </div>
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                    {/* Footer Links */}
                    {/* Copyright */}
                    <div className="footer-copyright text-center py-3" style={{ color: 'white', backgroundColor: '#090909' }}><span style={{ fontFamily: 'sans-serif', opacity: '0.8', fontSize: '14.4px', color: 'white' }}> © 2020 Copyright:
        <a href="https://github.com/Daniyalzakir321/Web-MobileApp-Development" target="_blank" style={{ color: 'white' }}>Muhammad Daniyal (WM5912)</a></span>
                    </div>
                    {/* Copyright */}
                </footer>
                {/*  */}
                {/* Back to top icon */}
                <a href="#"><img id="btt" src={bbt} alt="Go Top" /></a>
                {/*  */}
            </div>






        </div>
    )
}
