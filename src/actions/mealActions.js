import axios from "axios";
export const getAllMeals = () => async (dispatch) => {
  dispatch({ type: "GET_MEALS_REQUEST" });

  try {
    const response = await axios.get(
      "https://smd-meals-api.herokuapp.com/api/v1/meals/getallmeals"
    );
    console.log(response);
    console.log("aa2");
    dispatch({ type: "GET_MEALS_SUCCESS", payload: response.data });
  } catch (error) {
    console.log("aa", error);
    dispatch({ type: "GET_MEALS_FAILED", payload: error });
  }
};

export const getMealById = (mealid) => async (dispatch) => {
  dispatch({ type: "GET_MEALBYID_REQUEST" });

  try {
    const response = await axios.post(
      "https://smd-meals-api.herokuapp.com/api/v1/meals/getmealbyid",
      { mealid }
    );
    console.log(response);
    dispatch({ type: "GET_MEALBYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_MEALBYID_FAILED", payload: error });
  }
};

export const filterMeals = (searchkey, category) => async (dispatch) => {
  dispatch({ type: "GET_MEALS_REQUEST" });

  try {
    var filteredMeals;
    const response = await axios.get(
      "https://smd-meals-api.herokuapp.com/api/v1/meals/getallmeals"
    );
    filteredMeals = response.data.filter((meal) =>
      meal.name.toLowerCase().includes(searchkey)
    );

    if (category !== "all") {
      filteredMeals = response.data.filter(
        (meal) => meal.category.toLowerCase() === category
      );
    }
    dispatch({ type: "GET_MEALS_SUCCESS", payload: filteredMeals });
  } catch (error) {
    dispatch({ type: "GET_MEALS_FAILED", payload: error });
  }
};

export const addMeal = (meal) => async (dispatch) => {
  dispatch({ type: "ADD_MEAL_REQUEST" });
  try {
    const response = await axios.post(
      "https://smd-meals-api.herokuapp.com/api/v1/meals/addmeal",
      { meal }
    );
    console.log(response);
    dispatch({ type: "ADD_MEAL_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_MEAL_FAILED", payload: error });
  }
};

export const editMeal = (editedmeal) => async (dispatch) => {
  dispatch({ type: "EDIT_MEAL_REQUEST" });
  try {
    const response = await axios.post(
      "https://smd-meals-api.herokuapp.com/api/v1/meals/editmeal",
      { editedmeal }
    );
    console.log(response);
    dispatch({ type: "EDIT_MEAL_SUCCESS" });
    window.location.href = "/admin/mealslist";
  } catch (error) {
    dispatch({ type: "EDIT_MEAL_FAILED", payload: error });
  }
};

export const deleteMeal = (mealid) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://smd-meals-api.herokuapp.com/api/v1/meals/deletemeal",
      { mealid }
    );
    alert("Meal Deleted Successfully");
    console.log(response);
    window.location.reload();
  } catch (error) {
    alert("Something went wrong");
    console.log(error);
  }
};
