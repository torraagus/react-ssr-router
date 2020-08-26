import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/pag1",
    component: Page1,
  },
  {
    path: "/pag2",
    component: Page2,
  },
  {
    path: "/pag3",
    component: Page3,
  },
];

export default routes;
