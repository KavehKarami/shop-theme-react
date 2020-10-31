import React from "react";
import Home from "./containers/Home";
import About from "./containers/About";
import Pricing from "./containers/Pricing";
import HomeIcon from "./components/shared/icons/HomeIcon";
import PriceIcon from "./components/shared/icons/PriceIcon";
import AboutUsIcon from "./components/shared/icons/AboutUsIcon";

export const routes = [
  { path: "/", component: Home, exact: true, label: "خانه" },
  { path: "/pricing", component: Pricing, exact: true, label: "تعرفه ها" },
  { path: "/about", component: About, exact: true, label: "درباره ما" },
];

export const mobileNavRouter = [
  {
    path: "/about",
    component: About,
    exact: true,
    label: "درباره ما",
    icon: <AboutUsIcon />,
  },
  {
    path: "/pricing",
    component: Pricing,
    exact: true,
    label: "تعرفه ها",
    icon: <PriceIcon />,
  },
  {
    path: "/",
    component: Home,
    exact: true,
    label: "خانه",
    icon: <HomeIcon />,
  },
];
