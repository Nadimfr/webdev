import React from 'react'
import '../CreditNotes/creditnotes.scss'

const Creditnotes = () => {
    return (
        <div className="Credit_notes">
            <div className="Title_wrapper">Credit Notes</div>
            <div className="Box">
                <div className="Subtitle_wrapper">Credit Note for <span>$100.00 USD</span></div>
                <div className="Details">
                    <div className="Details_title">
                        <div>Order ID</div>
                        <div>Date</div>
                        <div>Retailer Store</div>
                    </div>
                    <div className="Details_value">
                        <div>5552323</div>
                        <div>12/3/2021</div>
                        <div>Store Name</div>
                    </div>   
                </div>

                <div className="Cashout">
                    <div className="Row_one">
                        <div>Items</div>
                        <div>Amount (USD)</div>
                    </div>
                    <div className="Row_two">
                        <div>Iphone 12</div>
                        <div>$100.00</div>
                    </div>
                    <div className="Row_three">
                        <div>Total</div>
                        <div>$100.00</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Creditnotes
