import { UserIsAuthenticated, UserIsNotAuthenticated } from 'lib/auth/UserIsAuthenticated';

import Home from './pages/home/Home';
import Post from './pages/post/Post';
import Calendar from './pages/calendar/Calendar';
import Timeline from './pages/timeline/Timeline';

import Login from "./pages/auth/Login";

const routes = [
  { path: "/",         name: "Home",     component: Home },
  { path: "/post",     name: "Post",     component: UserIsAuthenticated(Post) },
  { path: "/calendar", name: "Calendar", component: Calendar },
  { path: "/timeline", name: "Timeline", component: Timeline },

  { path: "/login",    name: "Login",    component: UserIsNotAuthenticated(Login ) }
];

export default routes;
