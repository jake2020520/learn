import React from "react";
import Home from "../pages/home";
import Login from "../pages/login";
import ReduxText from "../pages/reduxText";
export const RootRoutes: Array<any> = [
  {
    path: "/",
    name: "login",
    icon: "smile",
    exact: true,
    component: <Login />,
  },
  {
    path: "/home",
    name: "home",
    icon: "smile",
    exact: true,
    component: <Home />,
  },
  {
    path: "/redux-test",
    name: "home",
    icon: "smile",
    exact: true,
    component: <ReduxText />,
  },
  // {
  //   path: '/',
  //   name: 'LayoutContainer',
  //   icon: 'smile',
  //   exact: true,
  //   component: <LayoutContainer />,
  //   children: [
  //     {
  //       path: '/',
  //       name: '/contain',
  //       icon: 'smile',
  //       exact: true,
  //       component: <Welcome />
  //     },
  //     {
  //       path: '/home',
  //       name: 'home',
  //       component: <Home />
  //     },
  //     {
  //       path: '/about',
  //       name: 'about',
  //       component: <About />
  //     }
  //   ]
  // }

  // {
  //   component: './404'
  // }
];
