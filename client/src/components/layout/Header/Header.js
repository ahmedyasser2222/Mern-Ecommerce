import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import { Box, Button, Container, Menu, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile";
import Drawer from "./Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { logout } from "../../../redux/slices/userSlices"
import Cookies from "js-cookie"

const Header = () => {
  const userData = useSelector((state) => state.userSlice);
  const [openMenu, setOpenMenu] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleClose = () => setOpenMenu(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const HandleLogout = () => {
    Cookies.remove("token")
    dispatch(logout())
    navigate("/")
  };

  return (
    <nav className="navbar">
      <Container maxWidth="lg">
        <div className="navbar-wraper">
          <div className="logo">
            <Link to="/">Souq</Link>
          </div>
          <div className="items">
            <Link to="/products">All Products</Link>
            <Link to="/products">Women's Fashion</Link>
            <Link to="/products">Men's Fashion</Link>
            <Link to="/products">Electronics</Link>
            <Link to="/products">Kids</Link>
          </div>
          <div className="auth">
            {userData.authenticated ? (
              <Profile logout={HandleLogout} />
            ) : (
              <>
                <Link to="/register" className="register-btn btn">
                  Sign Up
                </Link>
                <Link to="/login" className="login-btn btn">
                  Login
                </Link>
              </>
            )}
          </div>
          
          <div className="menu" onClick={() => setOpenDrawer(true)}>
            <MenuIcon />
          </div>
        </div>
        <Drawer open={openDrawer} setOpen={setOpenDrawer} logout={HandleLogout} />
      </Container>
    </nav>
  );
};

export default Header;
