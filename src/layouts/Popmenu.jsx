import React, { useState, useRef } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Box,
  IconButton,
  Avatar,
  ListItemText,
  Popover,
  MenuItem as MenuItemMui,
} from "@mui/material";
import { popMenu } from "../constans/menu";

const PopMenu = () => {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <IconButton
        size="small"
        sx={{ ml: 2 }}
        onClick={() => setOpen(true)}
        ref={menuRef}
      >
        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
      </IconButton>
      <MenuPopover
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={menuRef.current}
        sx={{
          marginTop: 2.5,
          marginLeft: 0.5,
          overflow: "inherit",
          boxShadow: "1px, 1px, 2px, 2px rgb(0 0 0 / 20%)",
          width: 320,
        }}
      >
        {popMenu.map((item, index) => (
          <MenuItemMui
            key={index}
            to={item.path}
            component={RouterLink}
            onClick={() => setOpen(false)}
            sx={{ py: 1, px: 2.5 }}
          >
            <ListItemText disableTypography>{item.title}</ListItemText>
          </MenuItemMui>
        ))}
      </MenuPopover>
    </Box>
  );
};

// eslint-disable-next-line react/prop-types
const MenuPopover = ({ children, sx, ...other }) => {
  return (
    <Popover
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      paperProps={{ sx }}
      {...other}
    >
      {children}
    </Popover>
  );
};

export default PopMenu;
