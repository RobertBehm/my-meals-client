import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import styled from "styled-components";

import Addmeal from "./Addmeal";
import Editmeal from "./Editmeal";
import Orderslist from "./Orderslist";
import Mealslist from "./Mealslist";
import Userslist from "./Userslist";
import Customerslist from "./Customerslist";

export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <div
        className="row justify-content-center p-3"
        style={{ color: "#808080" }}
      >
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

          <StyledUL className="adminfunctions">
            <StyledList>
              <Link to={"/admin/userslist"} style={{ color: "white" }}>
                Users List
              </Link>
            </StyledList>
            <StyledList>
              <Link to={"/admin/mealslist"} style={{ color: "white" }}>
                Meals List
              </Link>
            </StyledList>
            <StyledList>
              <Link to={"/admin/addmeal"} style={{ color: "white" }}>
                Add Meal
              </Link>
            </StyledList>
            <StyledList>
              <Link to={"/admin/orderslist"} style={{ color: "white" }}>
                Orders List
              </Link>
            </StyledList>
            <StyledList>
              <Link to={"/admin/customerslist"} style={{ color: "white" }}>
                Cash Orders
              </Link>
            </StyledList>
          </StyledUL>

          <Switch>
            <Route path="/admin" component={Userslist} exact />
            <Route path="/admin/userslist" component={Userslist} exact />
            <Route path="/admin/orderslist" component={Orderslist} exact />
            <Route path="/admin/mealslist" component={Mealslist} exact />
            <Route
              path="/admin/customerslist"
              component={Customerslist}
              exact
            />
            <Route path="/admin/addmeal" component={Addmeal} exact />
            <Route path="/admin/editmeal/:mealid" component={Editmeal} exact />
          </Switch>
        </div>
      </div>
    </div>
  );
}

const StyledUL = styled.ul`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledList = styled.li`
  @media (max-width: 768px) {
    margin: 0.5rem;
  }
`;
