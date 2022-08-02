import React from 'react'
import './style.css'

function Order() {

    return (
        <section id='delivery'>
            <hr />
            <h2>Order Now</h2>
            <br />
            <hr />
            <section id='order'>
                <form>
                    <center> <input id='name' type="text" placeholder='Name' required /> </center>
                    <center> <input type="email" placeholder='Email' required /> </center>
                    <center> <input type="Number" placeholder='Phone Number (Optionaly)' /> </center>
                    <center> <input type="text" placeholder='Country' required /> </center>
                    <center> <select name="Meal">
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                        <option>Breakfast And Dinner</option>
                        <option>All Day Food</option>
                    </select> </center>
                    <center><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id='sub'>
                        Submit
                    </button></center>



                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Thanks For Order From Foodera</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    We Will Call You As Soon As To Confirm Your Order !
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </section>
        </section>
    )
}

export default Order
