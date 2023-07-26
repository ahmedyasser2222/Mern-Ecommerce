import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, logout } from "../redux/slices/userSlices";
import axios from "axios";
import { URL } from "../API";
import Cookies from "js-cookie";

const GetUserDetails = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getUserDetails() {
      if (!Cookies.get("token")) {
        dispatch(logout());
      } else {
        try {
          const res = await axios.get(`${URL}/api/v1/me`, {
            headers: { authorization: `Bearer ${Cookies.get("token")}` || "" },
          });
          dispatch(setUser(res.data.user));
        } catch (err) {
          dispatch(logout());
        }
      }
    }

    getUserDetails();
  }, []);

  return <div>{children}</div>;
};

export default GetUserDetails;
