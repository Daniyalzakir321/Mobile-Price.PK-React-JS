import React from 'react'
import { Link } from 'react-router-dom'

// Mobile Images
import mobileimage1 from './mobile-images/a.jpg'
import mobileimage2 from './mobile-images/b.jpg'
import mobileimage3 from './mobile-images/c.jpg'
import mobileimage4 from './mobile-images/d.jpg'
import mobileimage5 from './mobile-images/e.jpg'
import mobileimage6 from './mobile-images/f.jpg'
import mobileimage7 from './mobile-images/ia.jpg'
import mobileimage8 from './mobile-images/ib.jpg'
import mobileimage9 from './mobile-images/ic.jpg'
import mobileimage10 from './mobile-images/id.jpg'
import mobileimage11 from './mobile-images/ie.jpg'
import mobileimage12 from './mobile-images/if.jpg'
import mobileimage13 from './mobile-images/l1.jpg'
import mobileimage14 from './mobile-images/l2.jpg'
import mobileimage15 from './mobile-images/l3.jpg'
import mobileimage16 from './mobile-images/l4.jpg'
import mobileimage17 from './mobile-images/l5.jpg'
import mobileimage18 from './mobile-images/l6.jpg'
import mobileimage19 from './mobile-images/oa.jpg'
import mobileimage20 from './mobile-images/ob.jpg'
import mobileimage21 from './mobile-images/oc.jpg'
import mobileimage22 from './mobile-images/od.jpg'
import mobileimage23 from './mobile-images/oe.jpg'
import mobileimage24 from './mobile-images/of.jpg'

// Slider
import autosliderwllpapers1 from './auto-slider-wllpapers/slider1.png'
import autosliderwllpapers2 from './auto-slider-wllpapers/slider2.png'
import autosliderwllpapers3 from './auto-slider-wllpapers/slider3.png'

// Image Gallery
import imagegallery1 from './image-gallery/a.jpg'
import imagegallery2 from './image-gallery/b.jpg'
import imagegallery3 from './image-gallery/c.jpg'
import imagegallery4 from './image-gallery/d.jpg'
import comingsoon from './mobile-images/comingsoon.gif'
import specification from './mobile-images/specifications.svg'

// Sweet Alert 2
import Swal from 'sweetalert2'

// For Count Increament
// import { CountUp } from 'use-count-up'
import CountUp from 'react-countup';

// React Reveal Animation
import Slide from 'react-reveal/Slide';
import Pulse from 'react-reveal/Pulse';
import Jump from 'react-reveal/Jump';

// React Typist
import Typist from 'react-typist';

export default function Home() {

  function Explore() {
    Swal.fire({
      text: 'SPECIFICATIONS',
      // icon: {specification},
      imageUrl: 'https://res.cloudinary.com/ds62zhv7k/image/upload/v1636459219/specifications_eiinhf.png',
      imageWidth: 420,
      imageHeight: 420,
      imageAlt: 'Specifications'
    })
  }

  function BuyNow() {
    Swal.fire({
      title: 'Coming Soon',
      imageUrl: 'https://res.cloudinary.com/ds62zhv7k/image/upload/v1636459222/comingsoon_ynyely.gif',
      imageWidth: 320,
      imageHeight: 210,
      imageAlt: 'Buy Now Option, Will Be Available Soon.',
    })
  }


  const numberInc = (val) => {
    return <CountUp
      className="b"
      start={1}
      end={val}
      duration={2.75}
      separator=","
      suffix="+"
      decimal=","
    // decimals={4}
    // prefix="EUR "
    />
    //  return <CountUp 
    //   start={500}
    //   isCounting 
    //   end={val} 
    //   duration={2.2}
    //   thousandsSeparator=","
    //   easing="easeInCubic"
    //   />
  }




  return (
    <div className="sstt">
      <div>
        {/* Slider */}
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={autosliderwllpapers1} className="d-block w-100" alt="Loading..." />
              <div id="slidermargin" className="carousel-caption col-md-2 col-sm-1">
                <Pulse duration={2000}><h4 id="mobilename">Nokia&nbsp;8</h4>
                  <h5 id="mobilestory">Share&nbsp;both&nbsp;sides&nbsp;of&nbsp;the&nbsp;story</h5>
                  <div style={{ margin: '0px 105px 0px 0px' }} onClick={e => Explore()}> <p id="mobilebutton" className="btn">&nbsp;&nbsp;EXPLORE&nbsp;&nbsp;</p></div></Pulse>
              </div>
            </div>
            <div className="carousel-item">
              <img src={autosliderwllpapers2} className="d-block w-100" alt="Loading..." />
              <div id="slidermargin" className="carousel-caption col-md-2 col-sm-1">
                <h4 id="mobilename">Galaxy&nbsp;S9</h4>
                <h5 id="mobilestory">Long&nbsp;lasting&nbsp;entertainment</h5>
                <div id="explorediv" onClick={e => Explore()}> <p id="mobilebutton" className="btn">&nbsp;&nbsp;EXPLORE&nbsp;&nbsp;</p></div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={autosliderwllpapers3} className="d-block w-100" alt="Loading..." />
              <div id="slidermargin" className="carousel-caption col-md-2 col-sm-1">
                <h4 id="mobilename">Oppo&nbsp;A5</h4>
                <h5 id="mobilestory">Get&nbsp;ahead&nbsp;with&nbsp;AI&nbsp;innovations</h5>
                <div style={{ margin: '0px 105px 0px 0px' }} onClick={e => Explore()}> <p id="mobilebutton" className="btn">&nbsp;&nbsp;EXPLORE&nbsp;&nbsp;</p></div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/*  */}
        {/* Headlines*/}
        <a id="mobilenews">  </a>
        <div className="downslider">
          <p>
            <marquee direction="left" scrollamount={4} onmouseover="this.stop();" onmouseout="this.start();">
              <Jump>
                <span style={{ color: '#fafafa', fontFamily: '"ubuntu"', textUnderlinePosition: 'none' }}>
                  Latest Mobile News &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;</span>
              </Jump>
              <a href="#!" onClick={e => Explore()} style={{ color: '#fafafa', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>
                Apple iPhone XS Plus - Rs. 1,80,000 PKR</a>
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
              <a href="#!" onClick={e => Explore()} style={{ color: '#fafafa', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>
                Vivo  X50 Pro - Rs. 84,999 PKR</a>
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
              <a href="#!" onClick={e => Explore()} style={{ color: '#fafafa', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>
                BlackBerry Motion - Rs. 52,249 PKR</a>
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
              <a href="#!" onClick={e => Explore()} style={{ color: '#fafafa', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>
                Xiaomi Redmi Note 10 - Rs. 44,999 PKR</a>
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
              <a href="#!" onClick={e => Explore()} style={{ color: '#fafafa', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>
                Huawei Y6 Prime  - Rs. 18,999 PKR</a>
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
              <a href="#!" onClick={e => Explore()} style={{ color: '#fafafa', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>
                Alcatel Tablet Pixi4 LTE - Rs. 13,900 PKR</a>
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
              <a href="#!" onClick={e => Explore()} style={{ color: 'white', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>
                G-Five President G10 Octa Core&nbsp;-&nbsp;Rs. 6,999 PKR</a>
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
            </marquee></p>
        </div>
        {/*  */}
        <br />
        {/* ============================================= */}
        {/* Latest Phones */}
        <Typist
          avgTypingSpeed={15000}
          startDelay={1000}
          cursor={{
            show: false,
            blink: false,
            element: '|',
            // hideWhenDone: false,
            // hideWhenDoneDelay: 1000,
          }}
        ><h1 id="fp">LATEST PHONES</h1>
        </Typist>
        {/* =================================================== */}
        <br />
        {/* ================= Card 0 Marquee ===================== */}
        {/* Card 0*/}
        <Slide bottom cascade duration={1500}>
          <div className="container-fluid  sst">
            <div className="row" style={{ textAlign: 'center', justifyContent: 'center' }}>
              <div className="card" style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv">
                <a href="#?" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                  <img className="card-img-top" src={mobileimage1} alt="Card image cap" style={{ height: '200px', width: '107px', marginTop: '10px' }} />
                  <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>Huawei&nbsp;Mate&nbsp;20</p>
                  <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 1,19,999 PKR</p>
                </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>
                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
              <a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
              </a><div className="card " style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv"><a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                <img className="card-img-top" src={mobileimage2} alt="Card image cap" style={{ height: '200px', width: '105px', marginTop: '10px' }} />
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>Vivo&nbsp;X50&nbsp;Pro
                </p>
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 1,09,000 PKR</p>
              </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>
                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
              <a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
              </a><div className="card " style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv"><a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                <img className="card-img-top" src={mobileimage3} alt="Card image cap" style={{ height: '200px', width: '102px', marginTop: '10px' }} />
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>Realme 6S
                </p>
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 75,000 PKR</p>
              </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>

                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
              <a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
              </a><div className="card " style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv"><a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                <img className="card-img-top" src={mobileimage4} alt="Card image cap" style={{ height: '200px', width: '108px', marginTop: '10px' }} />
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>Lenovo Z6</p>
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 69,999 PKR</p>
              </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>
                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
              <a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
              </a><div className="card " style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv"><a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                <img className="card-img-top" src={mobileimage5} alt="Card image cap" style={{ height: '200px', width: '103px', marginTop: '10px' }} />
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>Infinix&nbsp;S4</p>
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 45,000 PKR</p>
              </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>
                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
              <a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
              </a><div className="card " style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv"><a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                <img className="card-img-top" src={mobileimage6} alt="Card image cap" style={{ height: '200px', width: '106px', marginTop: '10px' }} />
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>Xiaomi 5G</p>
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 33,000 PKR</p>
              </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>
                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
            </div>

          </div>
        </Slide>

        {/*  */}
        <br />


        {/* ====================================================== */}
        {/* Featured Phones */}
        <h1 id="fp"> <a id="latestphones" style={{ fontFamily: '"ubuntu"', borderBottom: '1px solid #dddddd' }}>FEATURED PHONES</a></h1>
        {/*  */}
        {/* <br>  */}
        {/*  samsung */}
        <h1 id="fp"><a id="samsung" style={{ fontFamily: '"ubuntu"' }}> <span style={{ fontSize: '38px', fontFamily: '"ubuntu"' }}>S</span>AMSUNG </a></h1>
        {/*  */}
        <br />
        {/* Card 1*/}
        <Slide bottom cascade duration={1500}>
          <div className="container-fluid sst">
            <div className="row" style={{ textAlign: 'center', justifyContent: 'center' }}>
              <div className="card" style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv">
                <a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                  <img className="card-img-top" src={mobileimage7} alt="Card image cap" style={{ height: '200px', width: '110px', marginTop: '10px' }} />
                  <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>Galaxy S20&nbsp;Ultra</p>
                  <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 1,20,000 PKR</p>
                </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>
                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
              <a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
              </a><div className="card " style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv"><a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                <img className="card-img-top" src={mobileimage8} alt="Card image cap" style={{ height: '200px', width: '116px', marginTop: '10px' }} />
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>Galaxy Z&nbsp;Flip
                </p>
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 1,90,000 PKR</p>
              </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>
                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
              <a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
              </a><div className="card " style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv"><a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                <img className="card-img-top" src={mobileimage9} alt="Card image cap" style={{ height: '200px', width: '107px', marginTop: '10px' }} />
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>Galaxy Note&nbsp;10</p>
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 1,00,000 PKR</p>
              </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>
                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
              <a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
              </a><div className="card " style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv"><a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                <img className="card-img-top" src={mobileimage10} alt="Card image cap" style={{ height: '200px', width: '108px', marginTop: '10px' }} />
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>Galaxy Note&nbsp;9&nbsp;</p>
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 92,999 PKR</p>
              </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>
                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
              <a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
              </a><div className="card " style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv"><a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                <img className="card-img-top" src={mobileimage11} alt="Card image cap" style={{ height: '200px', width: '105px', marginTop: '10px' }} />
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>Galaxy&nbsp;A71</p>
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 88,000 PKR</p>
              </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>
                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
              <a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
              </a><div className="card " style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv"><a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                <img className="card-img-top" src={mobileimage12} alt="Card image cap" style={{ height: '200px', width: '100px', marginTop: '10px' }} />
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>Galaxy&nbsp;A80</p>
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 63,000 PKR</p>
              </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>
                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
            </div>
          </div>
        </Slide>
        {/*  */}
        <br />
        {/*  IPhones */}
        <h1 id="fp"><a id="apple" style={{ fontFamily: '"ubuntu"' }}> <span style={{ fontSize: '37px', fontFamily: '"ubuntu"' }}>A</span>PPLE </a></h1>
        {/*  */}
        <br />
        {/* Card 2*/}
        <Slide bottom cascade duration={1500}>
          <div className="container-fluid">
            <div className="row" style={{ textAlign: 'center', justifyContent: 'center' }}>
              <div className="card" style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv">
                <a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                  <img className="card-img-top" src={mobileimage13} alt="Card image cap" style={{ height: '200px', width: '105px', marginTop: '10px' }} />
                  <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>iPhone 11 Pro
                  </p>
                  <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 2,18,099 PKR</p>
                </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>
                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
              <a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
              </a><div className="card " style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv"><a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                <img className="card-img-top" src={mobileimage14} alt="Card image cap" style={{ height: '200px', width: '102px', marginTop: '10px' }} />
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>iPhone XS Max
                </p>
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 1,69,000 PKR</p>
              </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>
                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
              <a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
              </a><div className="card " style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv"><a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                <img className="card-img-top" src={mobileimage15} alt="Card image cap" style={{ height: '200px', width: '105px', marginTop: '10px' }} />
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>iPhone 11</p>
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 1,64,699 PKR</p>
              </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>
                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
              <a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
              </a><div className="card " style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv"><a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                <img className="card-img-top" src={mobileimage16} alt="Card image cap" style={{ height: '200px', width: '102px', marginTop: '10px' }} />
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>iPhone X
                </p>
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 142,999 PKR</p>
              </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>
                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
              <a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
              </a><div className="card " style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv"><a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                <img className="card-img-top" src={mobileimage17} alt="Card image cap" style={{ height: '200px', width: '102px', marginTop: '10px' }} />
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>iphone 8 Plus
                </p>
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 1,22,499 PKR</p>
              </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>
                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
              <a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
              </a><div className="card " style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv"><a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                <img className="card-img-top" src={mobileimage18} alt="Card image cap" style={{ height: '200px', width: '100px', marginTop: '10px' }} />
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>iPhone 7 Plus
                </p>
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 100,899 PKR</p>
              </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>
                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
            </div>
          </div>
        </Slide>
        {/*  */}
        <br />
        {/*   */}
        <h1 id="fp"><a id="oppo" style={{ fontFamily: '"ubuntu"' }}><span style={{ fontSize: '39px' }}>O</span>PPO </a> </h1>
        {/*  */}
        <br />
        {/* Card 3*/}
        <Slide bottom cascade duration={1500}>
          <div className="container-fluid">
            <div className="row" style={{ textAlign: 'center', justifyContent: 'center' }}>
              <div className="card" style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv">
                <a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                  <img className="card-img-top" src={mobileimage19} alt="Card image cap" style={{ height: '200px', width: '101px', marginTop: '10px' }} />
                  <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>Reno 10X</p>
                  <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 1,09,999 PKR</p>
                </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>
                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'rgb(0, 0, 0)', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
              <a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
              </a><div className="card " style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv"><a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                <img className="card-img-top" src={mobileimage20} alt="Card image cap" style={{ height: '200px', width: '106px', marginTop: '10px' }} />
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>Reno 2
                </p>
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 79,999 PKR</p>
              </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>
                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
              <a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
              </a><div className="card " style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv"><a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                <img className="card-img-top" src={mobileimage21} alt="Card image cap" style={{ height: '200px', width: '107px', marginTop: '10px' }} />
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>R17 Pro
                </p>
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 75,999 PKR</p>
              </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>
                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
              <a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
              </a><div className="card " style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv"><a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                <img className="card-img-top" src={mobileimage22} alt="Card image cap" style={{ height: '200px', width: '108px', marginTop: '10px' }} />
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>Reno 3 Pro</p>
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 64,999 PKR</p>
              </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>
                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
              <a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
              </a><div className="card " style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv"><a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                <img className="card-img-top" src={mobileimage23} alt="Card image cap" style={{ height: '200px', width: '97px', marginTop: '10px' }} />
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>F11 Pro
                </p>
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 54,999 PKR</p>
              </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>
                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
              <a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
              </a><div className="card " style={{ width: '12rem', textAlign: 'center', marginBottom: '10px' }} id="carddiv"><a href="#!" style={{ textDecoration: 'none' }} onClick={e => Explore()}>
                <img className="card-img-top" src={mobileimage24} alt="Card image cap" style={{ height: '200px', width: '100px', marginTop: '10px' }} />
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 'bolder', fontSize: '17.5px', margin: '10px 0px' }}>A9 2020</p>
                <p className="card-text" style={{ color: 'black', fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif', fontWeight: 550, fontSize: '14.5px', margin: '8px 0px' }}>Rs. 39,999 PKR</p>
              </a>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                  <div style={{ margin: '0px 5px 0px 0px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => Explore()}>Explore</p>
                    </a>
                  </div>
                  <div style={{ marginLeft: '0px 0px 0px 5px' }}>
                    <a href="#!">
                      <p id="button-card" className="card-title btn btn-outline-secondary" style={{ color: 'black', fontSize: '14px', boxShadow: '2px 2px  5px grey' }} onClick={e => BuyNow()}>Buy&nbsp;Now</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* --------------- */}
            </div>
          </div>
        </Slide>
        {/*  */}
        <br />
        <br /><br />
        <br />
        {/* Projrcts */}
        <Slide bottom cascade duration={1500}>
          <div id="div">
            <div className="container-fluid">
              <div className="row justify-content-md-center" id="subcontainer">
                <div className="col col-lg-2 col-sm-12 col-md-3" id="padding">
                  <h1 className="b">{numberInc(86000)}</h1>
                  <h5 className="c">Monthly&nbsp;Impressions</h5>
                </div>
                <div className="col col-lg-2 col-sm-12 col-md-3" id="padding">
                  <h1 className="b">{numberInc(65800)}</h1>
                  <h5 className="c">Happy&nbsp;Customers</h5>
                </div>
                <div className="col col-lg-2 col-sm-12 col-md-3" id="padding">
                  <h1 className="b">{numberInc(789)}</h1>
                  <h5 className="c">Support&nbsp;Hours</h5>
                </div>
                <div className="col col-lg-2 col-sm-12 col-md-3" id="padding">
                  <h1 className="b">{numberInc(789)}</h1>
                  <h5 className="c">Working&nbsp;Hours</h5>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        {/*  */}
        <br />
        <br />
        <br />
        {/* Smart Phones */}
        {/* <h1 id="fp" style="font-size: 23px;" >OUR TEAM</h1> */}
        <h1 id="fp">TEAM MEMBERS</h1>
        {/*  */}
        <br />
        {/* Image Gallery*/}
        <div className="container col-sm-11">
          <div className="row col-md-12 col-sm-12" style={{ textAlign: 'center', marginRight: '0px', marginLeft: '0px' }}>
            <div className="container1 col-md-3 col-sm-12">
              <img src={imagegallery1} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">HIMEL&nbsp;HALIM Designer
                </div>
              </div>
            </div>
            <div className="container1 col-md-3 col-sm-12">
              <img src={imagegallery2} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text"> STEVE&nbsp;LOUIS Developer
                </div>
              </div>
            </div>
            <div className="container1 col-md-3 col-sm-12">
              <img src={imagegallery3} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">
                  MARK&nbsp;MAN Writer
                </div>
              </div>
            </div>
            <div className="container1 col-md-3 col-sm-12">
              <img src={imagegallery4} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">
                  STEAV&nbsp;CLEAN Photographer</div>
              </div>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}
