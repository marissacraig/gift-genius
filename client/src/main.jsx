import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FriendProfile from './pages/FriendProfile.jsx';
import Friends from './pages/Friends.jsx';
import UserProfile from './pages/UserProfile.jsx';
import Gifts from './pages/Gifts.jsx';
import Event from './pages/Event.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NoMatch />,
    children: [
      {
        index: true, 
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/friendprofile',
        element: <FriendProfile />
      }, {
        path: '/friends',
        element: <Friends />
      }, {
        path: '/userprofile',
        element: <UserProfile />
      }, {
        path: '/gifts',
        element: <Gifts />
      }, {
        path: '/events/:eventId',
        element: <Event />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
