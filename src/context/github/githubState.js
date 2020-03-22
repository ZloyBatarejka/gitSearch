import React, { useReducer } from "react";
import { GithubContext } from "./githubContext";
import { githubReducer } from "./githubReducer";
import axios from "axios";
import {
  SEARCH_USERS,
  GET_REPOS,
  GET_USER,
  SET_LOADING,
  CLEAR_USERS
} from "../types";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const withCreds = url => {
  return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
};
export const GihubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: []
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  const getUser = async name => {
    setLoading();
    const response = await axios.get(
      withCreds(`https://api.github.com/users/${name}?`)
    );
    dispatch({ type: GET_USER, payload: response.data });
  };
  const getRepos = async name => {
    setLoading();
    const response = await axios.get(
      withCreds(`https://api.github.com/users/${name}/repos?per_page=5&`)
    );
    dispatch({ type: GET_REPOS, payload: response.data });
  };
  const search = async value => {
    setLoading();
    const response = await axios.get(
      withCreds(`https://api.github.com/search/users?q=${value}&`)
    );
    //..
    dispatch({ type: SEARCH_USERS, payload: response.data.items });
  };
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };
  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };
  const { user, users, loading, repos } = state;
  return (
    <GithubContext.Provider
      value={{
        user,
        users,
        loading,
        repos,
        getRepos,
        getUser,
        search,
        setLoading,
        clearUsers
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
