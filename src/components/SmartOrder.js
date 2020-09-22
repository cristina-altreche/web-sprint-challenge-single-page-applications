import React, { useState } from 'react'
import { Link } from "react-router-dom";


const SmartOrder = () => {

    const [order, setOrder] = useState('')
    console.log(order)

    return (
        <div style={{height: "100px"}}>
            <section className="contactless-section">
                <span className="contactless-text">All Deliveries Are Contactless</span>
            </section>
            <div className="smart-order">
                <div className="smart-order-heading">
                    <h1 className="smart-order-text">Start your order</h1>
                </div>
                <div className="smart-order-ctas">
                    <div className="smart-order-container">
                        <Link to="/Form" onClick={() => setOrder('delivery')} className="btn smart-order-cta">Delivery</Link>
                    </div>
                    <span className="smart-order-or">or</span>
                    <div className="smart-order-container">
                        <Link to="/Form" onClick={() => setOrder('carryout')} className="btn smart-order-cta">Carryout</Link>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default SmartOrder
