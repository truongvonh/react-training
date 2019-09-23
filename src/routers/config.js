import Home from './../pages/Home'
import About from '../pages/About'
import Index from '../pages/Index'
import NotFound from '../pages/NotFound'

const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/",
    exact: true,
    component: Index
  },
  {
    path: "/about",
    component: About
  },
  {
    component: NotFound
  },
];

export default  routes