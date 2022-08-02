import React from 'react'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import img7 from '../images/7.jpg'
import img8 from '../images/8.jpg'

function Services() {
    return (
        <section id='services'>
            <div className="container">
                <h2><span className='block'>GET FOOD FAST<span className='none'> ,</span></span> NOT FAST FOOD</h2>
                <hr />
                <div className="main">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <h4>Up To 365 Days/Year</h4>
                            <p>Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.</p>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <h4>Ready In 20 Minutes</h4>
                            <p>You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.</p>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <h4>100% Organic</h4>
                            <p>All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!</p>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <h4>Up To 365 Days/Year</h4>
                            <p>Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="images">
                <img src={img1} alt="img" />
                <img src={img2} alt="img" />
                <img src={img3} alt="img" />
                <img src={img4} alt="img" />
                <img src={img5} alt="img" />
                <img src={img6} alt="img" />
                <img src={img7} alt="img" />
                <img src={img8} alt="img" />
            </div>
        </section>
    )
}

export default Services