import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WD from './mobile-images/wd.PNG'
import Skeleton from '@material-ui/lab/Skeleton';

export default function About() {
  return (
    <div>

      <Header />


      {/* Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `



                    @media only screen and (max-width: 850px) {
                        h1 {
                            font-size: 29px !important;
                            text-align: center !important;
                        }
            
                        h3 {
                            text-align: center !important;
                            font-size: 23.5px !important;
                        }
            
                        #divp{
                            padding: 0px 0px 0px 20px !important;
                            font-size: 16px !important;
                            text-align: justify !important;
                            border-right: 1px solid rgb(255, 255, 255) !important;
               border-left: 1px solid rgb(255, 255, 255) !important;
                        } 
            
                        #divimg>img {
                            margin: 0px 0px 0px 25px !important;
                            height: 200px !important;
                            width: 200px !important;
            
               
                        }
              
                    }
            
            #divp{
              border-right: 1px solid rgb(240, 239, 239);
               border-left: 1px solid rgb(240, 239, 239);
            }
            
            
            h3{
              padding-left: 19px;
            }
            
                    #divimg>img{
                          height: 270px;
                            width: 80% ;
               
                          } 
            
            
                    #body-about-us {
                        /* overflow-x: hidden; */
                    }


                    ` }} />




      <div>
        
        <br />
        <br />
        <h1 style={{ textAlign: 'center', fontFamily: '"Ubuntu"' }}>About Us</h1>
        <br />
        <div className="container ">
          <div className="row col-md-12 col-sm-12">
            <div id="divimg" className=" col-sm-12 col-md-4 align-content-center" style={{ textAlign: 'center' }}> <br />
              <img className="img-responsive rounded-circle " src={WD} alt="Loading..." style={{ borderRadius: '150px', border: '4px solid rgb(162, 161, 236)' }} />
            </div>
            <div className=" col-sm-12 col-md-7">
              <br />
              <h3 style={{ textAlign: 'left', fontFamily: '"Ubuntu"', fontSize: '26px' }}>Who we are?</h3>
              <div id="divp" style={{ backgroundColor: 'rgb(253, 253, 253)', fontSize: '18px', fontFamily: 'sans-serif', textAlign: 'justify', padding: '10px 20px' }}>
                <p>
                  With each passing year technology keeps on advancing tremendously and Advance Telecom strives to
                  keep
                  its customers up to date with the latest gadgets and devices. Founded in 2006, we have been working
                  hard
                  to serve our customers and providing them with the best after sales services.
            <br /><br />
            We at Advance Telecom are proud of the strong reputation which we have earned over the past years.
            For
            us it is always about providing our customers with the best of the best only, and with the years of
            hands-on experience we are well equipped to cater our customers better than ever.
            <br /><br />
            Our distribution network is the largest in the country and we are continuously working to expand it
            even
            further.
            <br /><br />
            Every day, we connect with hundreds of people looking for assistance regarding new phones, updates
            etc.
            We also provide various service centers located at different places for easy access. Our excellent
            customer care is what has made our customers loyal to us and we promise to deliver everything the
            future
            has to offer.
            <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <Footer />


    </div>
  )
}
