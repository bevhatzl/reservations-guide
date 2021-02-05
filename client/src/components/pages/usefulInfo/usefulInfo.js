import React from 'react';
import Footer from '../../../components/Footer/Footer';
import Sidebar from '../../Sidebar/Sidebar';
import "./style.css";

function usefulInfo () {
    return (
        <section id="main-content-usefulInfo">          
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
                <div className="content d-flex" id="usefulinfo">
                <h1 id="heading">Useful Information</h1>
                <h2>Watch our for scams</h2>
                <p>Current scams to watch out for:</p>
                <p>* Prepaid accommodation bookings made by credit card - After payment is processed, the booker will explain why they cannot stay at the hotel and will request a refund. They will explain the card used to make the original payment has been lost or stolen and will request the refund to be sent to a different card or to a bank account. After you process the refund to the alternative card/method, you receive a fraud chargeback for the original purchase since the booker had provided stolen card details in the original purchase.<br />
                Be aware that you should never process a refund to a different card or payment method other than the card used in the original purchase transction. If the booker advises the original card has been lost/stolen you are to advise them to contact their bank to request a dispute to recover the funds via the chargeback process.</p>
                <p>* Chip/PIN transaction declined but magnetic swipe or manual entry is approved - This is a sign the card may be counterfeit and you should not accept payment from the card if Chip/PIN failed. In case you do process the transaction by mag swipe or manually entering the card number, you may be liable if you receive a fraud chargeback.</p>
                <p>* Prepaid third party bookings - These are the highest risk of credit card fraud. The guest and the cardholder are different people and the cardholder will not be present. You may request the cardholder to send a scan of their ID and card however you cannot know if these have been stolen or not as the cardholder is not present to verify by sight or by chip/pin. Be aware of fake travel agent scams in which you will receive booking requests via a third party. Take note of the email address used by the alleged travel agent/booker and of the country of issue of the card card (BIN). You may search the internet for the first 6 digits of the credit card number which is called the BIN and indicates the card issuer bank and country. Be aware if multiple different credit cards are provided by the booker as this is an indication the card details have been stolen. You may run the alleged cardholder's ID through our Inquiry in case this same ID document was used at another hotel with stolen card details.</p>
                <p>* Pre-Authorizations - Make sure to always enter the pre-authorization amount for the exact same amount that you wish to complete the sale. The pre-authorization purpose is to check if the amount is available on the card and also if the card is active. If you take a pre-authorization for $1 you are asking the issuing bank if $1 can be charged. If you complete the sale for a higher amount you may receive a chargeback for no-authorization received.</p>
                                      
                </div>
                <div id="footer-cont">
                <Footer />
                </div>
            </div>
        </section>

    )

}

export default usefulInfo;