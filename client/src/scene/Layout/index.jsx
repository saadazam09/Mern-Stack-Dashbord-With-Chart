import React from 'react'
// import { useState } from 'react'
import { Box, useMediaQuery } from '@mui/material'
// const { Outlet, data } = require("react-router-dom");
import Navbar from "../../component/Navbar";
import Sidebar from "../../component/Sidebar";
import { useSelector } from 'react-redux';

/**
 * This component is the main layout component of the app.
 * It renders the sidebar and the navbar, and also handles the
 * state of the sidebar (open or closed) and the media query
 * to determine if the app is running on a mobile device or not.
 */
function Layout() {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setisSidebarOpen] = React.useState(true);

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setisSidebarOpen={setisSidebarOpen}
      />
      <Box>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setisSidebarOpen={setisSidebarOpen}
        />
      </Box>
    </Box>
  );
}

export default Layout;

