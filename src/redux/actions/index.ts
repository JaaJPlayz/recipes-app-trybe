import { searchDrinksFirstLetter, searchDrinksIngredients,
  searchDrinksName,
  searchDrinksPerCategorie } from '../../services/Drinks/ApiDrinks';
import { searchMealsIngredients, searchMealsName,
  searchMealsFirstLetter,
  searchMealsPerCategorie } from '../../services/Meals/ApiMeals';
import { Dispatch } from '../../types';

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL_DRINKS = 'REQUEST_SUCCESSFUL_DRINKS';
export const REQUEST_SUCCESSFUL_MEALS = 'REQUEST_SUCCESSFUL_MEALS';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const REQUEST_LOADING = 'REQUEST_LOADING';

const requestStarted = () => ({ type: REQUEST_STARTED });

const requestSuccessfulMeals = (payload: Array<object>, caller: string = '') => ({
  type: REQUEST_SUCCESSFUL_MEALS,
  payload,
  caller,
});

const requestSuccessfulDrinks = (payload: Array<object>, caller: string = '') => ({
  type: REQUEST_SUCCESSFUL_DRINKS,
  payload,
  caller,
});

const requestFailed = () => ({
  type: REQUEST_FAILED,
});

export const loadingAction = (isLoading: boolean) => ({
  type: REQUEST_LOADING,
  payload: isLoading,
});

export const fetchDrinksIngrediant = (ingredients: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingAction(true));
    dispatch(requestStarted());
    searchDrinksIngredients(ingredients)
      .then((response) => {
        dispatch(loadingAction(false));
        dispatch(requestSuccessfulDrinks(response.drinks));
      }).catch(() => dispatch(requestFailed()));
  };
};

export const fetchDrinksName = (name: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingAction(true));
    dispatch(requestStarted());
    searchDrinksName(name)
      .then((response) => {
        dispatch(loadingAction(false));
        dispatch(requestSuccessfulDrinks(response.drinks));
      }).catch(() => dispatch(requestFailed()));
  };
};

export const fetchDrinksFirstLetter = (letter: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingAction(true));
    dispatch(requestStarted());
    searchDrinksFirstLetter(letter)
      .then((response) => {
        dispatch(loadingAction(false));
        dispatch(requestSuccessfulDrinks(response.drinks));
      }).catch(() => dispatch(requestFailed()));
  };
};

export const fetchMealsIngrediant = (ingredients: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingAction(true));
    dispatch(requestStarted());
    searchMealsIngredients(ingredients)
      .then((response) => {
        dispatch(loadingAction(false));
        dispatch(requestSuccessfulMeals(response.meals));
      }).catch(() => dispatch(requestFailed()));
  };
};

export const fetchMealsName = (name: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingAction(true));
    dispatch(requestStarted());
    searchMealsName(name)
      .then((response) => {
        dispatch(loadingAction(false));
        dispatch(requestSuccessfulMeals(response.meals));
      }).catch(() => dispatch(requestFailed()));
  };
};

export const fetchMealsFirstLetter = (letter: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingAction(true));
    dispatch(requestStarted());
    searchMealsFirstLetter(letter)
      .then((response) => {
        dispatch(loadingAction(false));
        dispatch(requestSuccessfulMeals(response.meals));
      }).catch(() => dispatch(requestFailed()));
  };
};

export const fetchCategoriesDrinks = (categories: string, caller : string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(loadingAction(true));
      dispatch(requestStarted());
      searchDrinksPerCategorie(categories)
        .then((response) => {
          dispatch(loadingAction(false));
          dispatch(requestSuccessfulDrinks(response.drinks, caller));
        });
    } catch (error: any) {
      dispatch(requestFailed());
    }
  };
};

export const fetchCategoriesMeals = (categories: string, caller : string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(loadingAction(true));
      dispatch(requestStarted());
      searchMealsPerCategorie(categories)
        .then((response) => {
          dispatch(loadingAction(false));
          dispatch(requestSuccessfulMeals(response.meals, caller));
        });
    } catch (error: any) {
      dispatch(requestFailed());
    }
  };
};
