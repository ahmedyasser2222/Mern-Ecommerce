import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import WomanIcon from "@mui/icons-material/Woman";
import Man2Icon from "@mui/icons-material/Man2";
import CableIcon from "@mui/icons-material/Cable";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";
import { SwipeableDrawer } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

export default function TemporarDrawer({ open, setOpen, logout }) {
  const userData = useSelector((state) => state.userSlice);
  const navigate = useNavigate();

  const linksHeader = [
    {
      title: "All Products",
      url: "/products",
      Icon: <ShoppingBasketIcon />,
    },
    {
      title: "Women's Fashion",
      url: "/products",
      Icon: <WomanIcon />,
    },
    {
      title: "Men's Fashion",
      url: "/products",
      Icon: <Man2Icon />,
    },
    {
      title: "Electronics",
      url: "/products",
      Icon: <CableIcon />,
    },
    {
      title: "Kids",
      url: "/products",
      Icon: <FamilyRestroomIcon />,
    },
  ];
  const authList = [
    {
      title: "Login",
      url: "/login",
      Icon: <LoginIcon />,
    },
    {
      title: "Sign Up",
      url: "/register",
      Icon: <AppRegistrationIcon />,
    },
  ];

  const CustomeListItem = ({
    Icon ,
    text = "",
    url = "",
    onClick,
  }) => (
    <ListItem
      key={text}
      disablePadding
      onClick={() => {
        if (url) navigate(url);
        else onClick();
      }}
    >
      <ListItemButton>
        <ListItemIcon>{Icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={() => setOpen(false)}
      onKeyDown={() => setOpen(false)}
    >
      {userData.authenticated && (
        <>
          <List>
            <CustomeListItem
              Icon={<AccountCircleIcon />}
              text={userData.user.name}
              url="/profile"
            />
          </List>
        </>
      )}
      <Divider />

      <List>
        {linksHeader.map((item, index) => (
          <CustomeListItem Icon={item.Icon} text={item.title} url={item.url} key={index} />
        ))}
      </List>
      <Divider />
      {userData.authenticated ? (
        <>
        <CustomeListItem Icon={<ShoppingCart />} text={`Cart(${userData.cartProductsNum})`}  url="/cart" />
        <CustomeListItem Icon={<LogoutIcon />} text="Logout"  onClick={() => logout()} />
        </>
      ) : (
        <List>
          {authList.map((item, index) => (
            <CustomeListItem
              Icon={item.Icon}
              text={item.title}
              url={item.url}
              key={index}
            />
          ))}
        </List>
      )}
    </Box>
  );

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <div className="menu">
      <React.Fragment key={"left"}>
        <SwipeableDrawer
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          
          sx={{
            display: { xs: "block", sm: "none"  },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 260 },
          }}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
