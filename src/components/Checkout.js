import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { emptyCart } from "../actions/cartActions";

import { Modal } from "react-bootstrap";
import HoldOrder from "./HoldOrder";
//import { InitiatedStripeCheckout } from "../utils/facebook/facebookPixelEvent";

export default function Checkout({ subtotal }) {
  //const orderstate = useSelector((state) => state.placeOrderReducer);
  const dispatch = useDispatch();
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  subtotal = subtotal / 10;

  const processPayment = async () => {
    const url = "/.netlify/functions/charge-card";

    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

    const { data } = await axios.post(url, { cartItems });

    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  //const trackCardPayment = () => {
  // InitiatedStripeCheckout();
  //};

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    dispatch(emptyCart());
  };
  const handleShow = () => setShow(true);

  return (
    <div className="checkout-button-container">
      <div>
        <button className="btn" onClick={handleShow}>
          Pay With Cash
        </button>
      </div>
      <div>
        <button className="btn ml-3" onClick={processPayment}>
          Pay With Card
        </button>
      </div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>
            <p style={{ color: "#808080" }}>
              Fill out the form below and choose your payment option.
            </p>
            <p style={{ color: "#808080" }}>
              After payment is confirmed, I will call you to work out a time and
              date for your meal delivery...
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HoldOrder handleClose={handleClose} />
        </Modal.Body>
        <Modal.Footer class="d-flex justify-content-between align-items-end">
          <div className="ml-3 mb-3 mt-5">
            <p className="mb-0" style={{ color: "#808080" }}>
              If you have any questions
              <br />
              Contact Us
            </p>
            <span style={{ color: "#808080" }}>401-632-9326</span>
          </div>
          <div>
            <i
              className="fa fa-times-circle"
              style={{
                fontSize: "36px",
                color: "#808080",
                cursor: "pointer",
                margin: "5px",
              }}
              onClick={handleClose}
            />
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
