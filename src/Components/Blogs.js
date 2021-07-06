import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'


export default function Blogs() {

    return (
        <div>


            <Header />

            <style
                dangerouslySetInnerHTML={{
                    __html: `
           
            @media only screen and (max-width: 1000px) {
                h1 {
                    font-size: 31px !important;
                    text-align: center !important;
                }
    
                h4 {
                    text-align: center !important;
                    text-align: justify !important;
                    font-size: 17px !important;              
                    margin: 0px 1x !important;
                }
    
                iframe {
                  width: 330px !important;
                    height: 200px !important;
                    margin-bottom: 10px !important;
                }
    
                #firstiframe {
                    margin-left: 0px !important;
                    margin-right: 0px !important;
                    padding-left: 0px !important;
                    padding-right: 0px !important;
    
                }
    
                #p {
                    text-align: justify !important;
                    font-family: sans-serif !important;
                    font-size: 14px !important;
                 
                    background-color: #f5f5f5 !important;
                    border-radius: 5px !important;
                    padding: 6px 6px !important;
    
                }
    
    
                .blog1 {
                    margin: 1px 10px !important;
                    text-align: justify !important;
                }
    
                .blog2 {
                  margin: 1px 5px !important;
                    text-align: justify !important;
                }
    
                .btn {
                    font-size: 10px !important;
    
                }
    
            }
    
    
    
            .blog1 {
                margin: 1px 270px;
            }
    
            #p {
                text-align: justify;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
               box-shadow: 1px 1px 5px rgb(156, 156, 156) ;
                
                background-color: #f5f5f5;
                border-radius: 10px;
                border: 1px solid rgb(221, 218, 218);
                padding: 8px 8px;
    
            }
    
            #body-blogs {
                /* overflow-x: hidden; */
            }
           
           
            
            ` }} />



            <div>
                <br />
                <br />
                <h1 style={{ textAlign: 'center', fontFamily: '"Ubuntu"' }}>Latest Blogs</h1>
                <br />
                <div className="container-fluid row" id="firstiframe">
                    <div id="divimg " className="col  col-sm-12 col-md-12 " style={{ textAlign: 'center' }}>
                        <iframe width={800} height={450} src="https://www.youtube.com/embed/zrc2UAMnr94?start=81" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        <div className="blog1">
                            <h4 style={{ fontFamily: '"Ubuntu"', fontSize: '18px', textAlign: 'justify' }}>
                                Huawei Mate XS Foldable Launched This
          Year And Will Be Available Here On Saturday.</h4>
                            <details style={{ textAlign: 'left' }}>
                                <summary className="btn btn-outline-secondary btn-sm" style={{ fontSize: '11px', fontFamily: '"Ubuntu"' }}>
                                    See More</summary>
                                <p id="p">
                                    The Huawei Mate XS foldable smartphone, launched last year, did not make it outside China.
                                    However,
                                    its successor, the Mate Xs, will be available here on Saturday.
                                    As its moniker implies, the Mate Xs is an incremental upgrade from its predecessor.For one, with
                                    its
                                    new Huawei Kirin 990 5G chipset, the Mate Xs is said to have faster overall
                                    performance (up by 23 per cent from the Mate X), better graphics performance (up 39 per cent)
                                    and
                                    improved power efficiency (up 23 per cent), as well as support more 5G bands.
                                    DESIGN &amp; DISPLAY
                                    Design wise, the Mate Xs is relatively unchanged from the original. Still drool-worthy with its
                                    foldable Oled display.Its hinge design is said to be improved with the use of more than 100
                                    high-precision components.
          </p>
                            </details>
                        </div>
                    </div>
                    <br />
                </div>
                <br />
                <br />
                <div className="container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <div className="row" style={{ textAlign: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <div className="col col-sm-12 col-md-4 " id="container2" style={{ textAlign: 'center' }}>
                            <iframe className="embed-responsive-item " width={350} height={195} src="https://www.youtube.com/embed/q3eFXeO62oo" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            {/* blog2 */}
                            <div className="blog2">
                                <h4 style={{ fontFamily: '"Ubuntu"', fontSize: '18px', textAlign: 'justify' }}>
                                    Samsung Galaxy Fold 2 Launched.</h4>
                                <details style={{ textAlign: 'left' }}>
                                    <summary className="btn btn-outline-secondary btn-sm" style={{ fontSize: '11px', fontFamily: '"Ubuntu"' }}>See More</summary>
                                    <p id="p">
                                        The Galaxy Fold is at once a hopeful glimpse into the future and a fascinating mess. It’s a
                                        product I can’t recommend anyone purchase, but it’s one I’m still glad Samsung had the guts
                                        to make.
                                        What’s perhaps most frustrating are the glimpses you get using the device, those moments it
                                        transcends lovely and is legitimately useful. And when you leave the device at home, you
                                        actually start to miss the 7.3-inch display.
            </p>
                                </details>
                            </div>
                            <br />
                            {/*  */}
                        </div>
                        <div className="col col-sm-12 col-md-4" id="container2">
                            <iframe className="embed-responsive-item " width={350} height={195} src="https://www.youtube.com/embed/SFEYFHUOEWI" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            {/* blog3 */}
                            <div className="blog2">
                                <h4 style={{ fontFamily: '"Ubuntu"', fontSize: '18px', textAlign: 'justify' }}>
                                    Asus ROG, Most Powerful Smartphone.</h4>
                                <details style={{ textAlign: 'left' }}>
                                    <summary className="btn btn-outline-secondary btn-sm" style={{ fontSize: '11px', fontFamily: '"Ubuntu"' }}>See More</summary>
                                    <p id="p">
                                        The new Asus ROG Phone 2 is not only a gaming beast — it’s an all around monster, period.
                                        Its specs blow everyone else out of the water, from its 120Hz OLED screen to its Qualcomm
                                        Snapdragon 855 Plus processor — and a giant 6,000mAh battery to power it all.
                                        The design on this smartphone remains largely the same, as this hands-on video from engadget
                                        and unboxing shows.
            </p>
                                </details>
                            </div>
                            <br />
                            {/*  */}
                        </div>
                        <div className="col col-sm-12 col-md-4" id="container2">
                            <iframe className="embed-responsive-item " width={350} height={195} src="https://www.youtube.com/embed/98HWUMBDgWM?start=18" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            {/* blog4 */}
                            <div className="blog2">
                                <h4 style={{ fontFamily: '"Ubuntu"', fontSize: '18px', textAlign: 'justify' }}>
                                    TCL 10 Pro 512 Giga Byte Launched.</h4>
                                <details style={{ textAlign: 'left' }}>
                                    <summary className="btn btn-outline-secondary btn-sm" style={{ fontSize: '11px', fontFamily: '"Ubuntu"' }}>See More</summary>
                                    <p id="p">
                                        TCL announced that it would be launching some phones this year and it has finally announced
                                        the full specifications
                                        of its 10-series phones – the TCL 10L, 10 Pro and 10 5G. Immerse yourself with an FHD + curved display and more. The trio are fairly similar,
                                        pulling from the same bag of specs,
                                        but amusingly enough the 5G model isn’t the top model. Let us walk you through the new trio.
            </p>
                                </details>
                            </div>
                            <br />
                            {/*  */}
                        </div>
                    </div>
                </div>
                <br /><br />
            </div>



            <Footer />


        </div>
    )
}
