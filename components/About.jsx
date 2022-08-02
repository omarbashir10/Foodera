import React from 'react'
import './style.css'
import lispon from '../images/lisbon.jpg'
import london from '../images/london.jpg'
import san from '../images/san-francisco.jpg'
import berlin from '../images/berlin.jpg'
import c1 from '../images/customer-1.jpg'
import c2 from '../images/customer-2.jpg'
import c3 from '../images/customer-3.jpg'
function About() {
    return (
        <section id='about'>
            <div className="container">
                <hr />
                <h2>OUR BRUNCHES</h2>
                <br />          
                <hr />
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <div className="country">
                            <img src={lispon} alt="Country" />
                            <h5>Lispon</h5>
                            <p>More Than 30 Top Chefs</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="country">
                            <img src={london} alt="Country" />
                            <h5>London</h5>
                            <p>More Than 50 Top Chefs</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="country">
                            <img src={san} alt="Country" />
                            <h5>San-Fransisco</h5>
                            <p>More Than 15 Top Chefs</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="country">
                            <img src={berlin} alt="Country" />
                            <h5>Berlin</h5>
                            <p>More Than 45 Top Chefs</p>
                        </div>
                    </div>
                </div>
                <br />
                <hr />
                <h2 className='my-3'>Our Customers Comments</h2>
                <hr />
                <br />



            </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div id='slide1' className="carousel-item active">
                        <div className="row">
                            <img id='imgy' className='col-md-4 col-sm-10' src={c1} alt="Our Customer" />
                            <p id='myp' className='col-md-6 col-sm-10'>Foodera is one of the best restaurants on the planet, really they are amazing and their food is perfect in the London branch . the foodera they are amazing at the Lisbon branch I really enjoyed their food.<br /> <h6>Charlie Adams</h6></p>
                            
                        </div></div>
                    <div id='slide2' className="carousel-item">
                        <div className="row">
                            <img id='imgy' className='col-md-4 col-sm-10' src={c2} alt="Our Customer" />
                            <p id='myp' className='col-md-6 col-sm-10'>Loved the foodera they are amazing at the Lisbon branch I really enjoyed and their food is amazing . One of the best restaurants I have tried in my life is Foodera, their delivery is very fast, I rely on them for all my meals<br/><h6>Roberta Flex</h6></p>
                            
                        </div></div>
                    <div id='slide3' className="carousel-item">
                        <div className="row">
                            <img id='imgy' className='col-md-4 col-sm-10' src={c3} alt="Our Customer" />
                            <p id='myp' className='col-md-6 col-sm-10'>One of the best restaurants I have tried in my life is Foodera, their delivery is very fast, I rely on them for all my meals . Loved the foodera they are amazing at the Lisbon branch I really enjoyed their food<br/><h6>Thomas Lam</h6></p>
                            
                        </div></div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
}

export default About