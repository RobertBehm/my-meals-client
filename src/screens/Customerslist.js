import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer, getAllCustomers } from "../actions/customerAction";

export default function Customerslist() {
  const dispatch = useDispatch();

  const customersstate = useSelector((state) => state.getAllCustomersReducer);
  const { customers } = customersstate;

  console.log(customers);

  useEffect(() => {
    dispatch(getAllCustomers());
  }, []);

  return (
    <div className="table-responsive-sm">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Phone</th>
            <th>Items</th>
            {/*<th>Quantity</th>*/}
            {/*<th>Prices</th>*/}
            <th>Total</th>
            <th> </th>
          </tr>
        </thead>

        <tbody>
          {customers &&
            customers.map((customer) => {
              let total = Number(
                customer.foods
                  .map((item) => (item.price / 100) * item.quantity)
                  .reduce(function (previousValue, currentValue) {
                    return previousValue + currentValue;
                  }, 0)
              );

              if (customer.deliveryCharges) {
                total = total + 12;
              }

              return (
                <tr>
                  <td> {customer.name} </td>
                  <td> {customer.email} </td>
                  <td> {customer.address} </td>
                  <td> {customer.city} </td>
                  <td> {customer.state} </td>
                  <td> {customer.phone} </td>
                  <td>
                    {customer.foods.map((item, i) => {
                      return (
                        <>
                          <div>{item.name}</div>
                          <div>Size: {item.size}</div>
                          <div>Quantity: {item.quantity}</div>
                          {customer.foods.length - 1 !== i && (
                            <div style={{ borderTop: "2px solid #bbb" }} />
                          )}
                        </>
                      );
                    })}
                  </td>
                  <td>
                    ${total} <br />
                    {customer.deliveryCharges ? `Delivery` : `Pickup`}{" "}
                  </td>
                  <td>
                    <i
                      className="fa fa-trash"
                      onClick={() => {
                        dispatch(deleteCustomer(customer._id));
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
