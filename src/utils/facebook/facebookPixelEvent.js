export const ViewedCart = () => {
  window.fbq("trackCustom", "ViewedCart");
};

export const Purchases = () => {
  window.fbq("trackCustom", "Purchases");
};

export const InitiatedStripeCheckout = () => {
  window.fbq("trackCustom", "InitiatedStripeCheckout");
};

export const ClickedCashApp = () => {
  window.fbq("track", "ClickedCashApp");
};

export const ClickedVenmo = () => {
  window.fbq("track", "ClickedVenmo");
};

export const ClickedPaymentOptions = () => {
  window.fbq("track", "ClickedPaymentOptions");
};

export const SubmittedOrderForm = () => {
  window.fbq("trackCustom", "SubmittedOrderForm");
};
