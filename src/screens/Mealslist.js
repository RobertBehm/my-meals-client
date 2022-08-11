import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { deleteMeal, getAllMeals } from "../actions/mealActions";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import Hidden from "@material-ui/core/Hidden";

export default function Mealslist() {
  const dispatch = useDispatch();

  const mealsstate = useSelector((state) => state.getAllMealsReducer);

  const { meals, error, loading } = mealsstate;
  useEffect(() => {
    dispatch(getAllMeals());
  }, []);
  return (
    <div>
      <h2>Meals List</h2>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}

      <table className="table table-bordered table-responsive-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <Hidden smDown>
              <th>Category</th>
            </Hidden>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {meals &&
            meals.map((meal) => {
              return (
                <tr>
                  <td>{meal.name}</td>
                  <td>
                    Regular : {meal.prices[0]["regular"]} <br />
                    Large : {meal.prices[0]["large"]}
                  </td>
                  <Hidden smDown>
                    <td>{meal.category}</td>
                  </Hidden>
                  <td>
                    <i
                      className="fa fa-trash m-1"
                      onClick={() => {
                        dispatch(deleteMeal(meal._id));
                      }}
                    ></i>
                    <Link to={`/admin/editmeal/${meal._id}`}>
                      <i className="fa fa-edit m-1"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

const StyledWrapper = styled.div``;
