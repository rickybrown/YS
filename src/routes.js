
import Home from './pages/home/Home';
import Post from './pages/post/Post';
import Calendar from './pages/calendar/Calendar';
import Timeline from './pages/timeline/Timeline';

const routes = [
  { path: "/",         name: "Home",     component: Home },
  { path: "/post",     name: "Post",     component: Post },
  { path: "/calendar", name: "Calendar", component: Calendar },
  { path: "/timeline", name: "Timeline", component: Timeline }
];

export default routes;
